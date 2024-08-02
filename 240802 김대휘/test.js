// 모달창 관련 함수
function closeModalOutside(event) {
    if (event.target.classList.contains('board-modal')) {
        if (document.querySelector('.modal-header button.plan-save')) {
            const confirmation = confirm("정말 해당 창을 종료하시겠습니까? 작성하신 내용은 저장되지 않습니다.");
            if (confirmation) {
                document.getElementById('plan-modal').style.display = 'none';
            }
        } else {
            document.getElementById('plan-modal').style.display = 'none';
        }
    }
}

// 여행 계획 관련 함수
function savePlan() {
    alert('여행 계획을 저장하였습니다.');
    toggleEditMode(false);
}

function editPlan() {
    toggleEditMode(true);
}

function deletePlan() {
    if (confirm('삭제하시겠습니까?')) {
        alert('계획이 삭제되었습니다.');
        document.getElementById('plan-modal').style.display = 'none';
    }
}

function toggleEditMode(isEditable) {
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = !isEditable);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = !isEditable);
    
    document.getElementById('chapter-add').style.display = isEditable ? 'block' : 'none';
    document.getElementById('plan-delete').style.display = isEditable ? 'block' : 'none';
    
    const actionButton = document.querySelector('.modal-header button:nth-child(2)');
    actionButton.innerHTML = isEditable ? '💾' : '✍️';
    actionButton.classList.toggle('plan-save', isEditable);
    actionButton.classList.toggle('plan-edit', !isEditable);
    actionButton.onclick = isEditable ? savePlan : editPlan;

    if (isEditable) {
        enableDragAndDrop(); // 드래그 앤 드롭 활성화
        document.querySelectorAll('.map-box-preview-item *').forEach(el => el.style.pointerEvents = '');
        document.querySelectorAll('.timeline-box *').forEach(el => el.style.pointerEvents = '');
    } else {
        disableDragAndDrop(); // 드래그 앤 드롭 비활성화
        document.querySelectorAll('.map-box-preview-item *').forEach(el => el.style.pointerEvents = 'none');
        document.querySelectorAll('.timeline-box *').forEach(el => el.style.pointerEvents = 'none');
    }
}

function enableDragAndDrop() {
    // 드래그 앤 드롭 이벤트 리스너 등록
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('dragstart', handleTimelineItemDragStart);
        item.addEventListener('dragend', handleTimelineItemDragEnd);
        
        // 내부 요소의 드래그 이벤트 방지
        item.querySelectorAll('*').forEach(innerItem => {
            innerItem.addEventListener('dragstart', (event) => event.stopPropagation());
        });
    });

    const timelineBox = document.querySelector('.timeline-box');
    timelineBox.addEventListener('dragover', (event) => event.preventDefault());
    timelineBox.addEventListener('drop', handleTimelineBoxDrop);
}

function disableDragAndDrop() {
    // 드래그 앤 드롭 이벤트 리스너 제거
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.removeEventListener('dragstart', handleTimelineItemDragStart);
        item.removeEventListener('dragend', handleTimelineItemDragEnd);
        
        // 내부 요소의 드래그 이벤트 방지
        item.querySelectorAll('*').forEach(innerItem => {
            innerItem.removeEventListener('dragstart', (event) => event.stopPropagation());
        });
    });

    const timelineBox = document.querySelector('.timeline-box');
    timelineBox.removeEventListener('dragover', (event) => event.preventDefault());
    timelineBox.removeEventListener('drop', handleTimelineBoxDrop);
}

// 챕터 관련 함수
function addChapter() {
    const chapterList = document.querySelector('.chapter-list');
    const newChapterNumber = chapterList.querySelectorAll('.chapter:not(#chapter-add)').length + 1;

    const newChapter = document.createElement('div');
    newChapter.className = 'chapter';
    newChapter.id = `chapter${newChapterNumber}`;
    newChapter.draggable = true;

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = `chapter-name${newChapterNumber}`;
    newInput.className = 'chapter-name';
    newInput.value = `${newChapterNumber}일차`;

    newChapter.appendChild(newInput);
    
    chapterList.insertBefore(newChapter, document.getElementById('chapter-add'));
    
    newChapter.addEventListener('dragstart', handleDragStart);
    newChapter.addEventListener('dragover', handleDragOver);
    newChapter.addEventListener('drop', handleDrop);

    repositionAddButton();
}

function repositionAddButton() {
    const chapterList = document.querySelector('.chapter-list');
    const addButton = document.getElementById('chapter-add');
    chapterList.appendChild(addButton);
}

function updateChapterNumbers() {
    const chapters = document.querySelectorAll('.chapter:not(#chapter-add)');
    chapters.forEach((chapter, index) => {
        const input = chapter.querySelector('.chapter-name');
        input.value = `${index + 1}일차`;
        chapter.id = `chapter${index + 1}`;
    });
}

// 드래그 앤 드롭 관련 함수
function handleDragStart(event) {
    if (event.target.classList.contains('map-box-preview-item')) {
        event.dataTransfer.setData('text/plain', event.target.id);
    } else if (event.target.classList.contains('chapter')) {
        event.dataTransfer.setData('text/plain', event.target.id);
        setTimeout(() => {
            event.target.classList.add('invisible');
        }, 0);
    } else {
        event.preventDefault();
    }
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    if (draggedElement.classList.contains('map-box-preview-item')) {
        createTimelineItem(draggedElement);
    } else if (draggedElement.classList.contains('chapter')) {
        handleChapterDrop(event, draggedElement);
    } else if (draggedElement.classList.contains('timeline-item')) {
        handleTimelineBoxDrop(event);
    }
}

function handleChapterDrop(event, draggedElement) {
    draggedElement.classList.remove('invisible');
    const chapterList = document.querySelector('.chapter-list');

    if (!chapterList.contains(event.target) && event.target !== chapterList) {
        if (confirm('해당 챕터를 삭제하시겠습니까? 작성하신 내용은 저장되지 않습니다.')) {
            draggedElement.remove();
            updateChapterNumbers();
            repositionAddButton();
        }
        return;
    }

    let targetElement = event.target.closest('.chapter');
    
    if (draggedElement !== targetElement) {
        if (targetElement) {
            if (targetElement.nextSibling) {
                chapterList.insertBefore(draggedElement, targetElement.nextSibling);
            } else {
                chapterList.appendChild(draggedElement);
            }
        } else {
            chapterList.insertBefore(draggedElement, chapterList.firstChild);
        }
        updateChapterNumbers();
        repositionAddButton();
    }
}

function disableDragAndDrop() {
    document.querySelectorAll('.map-box-preview-item').forEach(item => {
        item.setAttribute('draggable', false);
    });
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.setAttribute('draggable', false);
    });
}

function enableDragAndDrop() {
    document.querySelectorAll('.map-box-preview-item').forEach(item => {
        item.setAttribute('draggable', true);
    });
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.setAttribute('draggable', true);
    });
}

// 타임라인 관련 함수
let timelineItemCount = 0;

function createTimelineItem(item) {
    if (timelineItemCount >= 6) {
        alert('최대 6개의 타임라인 아이템만 생성할 수 있습니다.');
        return;
    }

    timelineItemCount++;
    
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.id = `timeline-item${timelineItemCount}`;
    timelineItem.draggable = true;

    const timelineIcon = document.createElement('div');
    timelineIcon.className = 'timeline-icon';
    timelineIcon.id = `timeline-icon-${timelineItemCount}`;
    timelineIcon.textContent = timelineItemCount;

    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';

    const timelineName = document.createElement('input');
    timelineName.className = 'timeline-name';
    timelineName.id = `timeline-name${timelineItemCount}`;
    timelineName.placeholder = '타임라인 제목';

    const locationDetail = document.createElement('div');
    locationDetail.className = 'location-detail';
    locationDetail.appendChild(item.cloneNode(true));

    timelineContent.appendChild(timelineName);
    timelineContent.appendChild(locationDetail);

    timelineItem.appendChild(timelineIcon);
    timelineItem.appendChild(timelineContent);

    // 내부 요소들의 드래그를 방지
    timelineItem.querySelectorAll('*').forEach(child => {
        child.setAttribute('draggable', false);
        child.addEventListener('dragstart', e => e.preventDefault());
    });

    // 순차적으로 왼쪽 3개, 오른쪽 3개에 추가
    const leftColumn = document.querySelector('.timeline-column-left .timeline-items');
    const rightColumn = document.querySelector('.timeline-column-right .timeline-items');

    if (timelineItemCount <= 3) {
        leftColumn.appendChild(timelineItem);
    } else {
        rightColumn.appendChild(timelineItem);
    }

    const newIndex = timelineItemCount;
    
    timelineItem.id = `timeline-item${newIndex}`;
    timelineIcon.id = `timeline-icon-${newIndex}`;
    timelineName.id = `timeline-name${newIndex}`;

    // 드래그 이벤트 리스너 추가
    timelineItem.addEventListener('dragstart', handleTimelineItemDragStart);
    timelineItem.addEventListener('dragend', handleTimelineItemDragEnd);
}

function handleTimelineItemDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.style.display = 'none';
    }, 0);
}

function handleTimelineItemDragEnd(event) {
    event.target.style.display = '';
}

function handleTimelineBoxDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    if (!draggedElement) return;

    const timelineBox = document.querySelector('.timeline-box');

    if (!timelineBox.contains(event.target)) {
        // 타임라인 박스 외부로 드래그된 경우
        if (confirm('정말 해당 계획을 삭제하시겠습니까? 작성하신 내용은 저장되지 않습니다.')) {
            const startLocationInput = document.querySelector('.start-location').value; // 출발지 입력값 저장
            draggedElement.remove();
            timelineItemCount--;
            updateTimelineItems(startLocationInput); // 출발지 입력값을 인자로 전달
        } else {
            // 취소한 경우 원래 위치로 되돌림
            draggedElement.style.display = '';
        }
    } else {
        // 타임라인 박스 내부에서 드래그된 경우
        const targetColumn = event.target.closest('.timeline-items') || (event.target.classList.contains('timeline-items') ? event.target : null);
        
        if (targetColumn) {
            const afterElement = getDragAfterElement(targetColumn, event.clientY);
            if (afterElement == null) {
                targetColumn.appendChild(draggedElement);
            } else {
                targetColumn.insertBefore(draggedElement, afterElement);
            }
            draggedElement.style.display = '';
            updateTimelineItems(); // 출발지 입력값을 복원할 필요 없음
        } else {
            // 적절한 위치를 찾지 못한 경우 원래 위치로 되돌림
            draggedElement.style.display = '';
        }
    }
}

function updateTimelineItems(startLocationInput = '') {
    const leftColumn = document.querySelector('.timeline-column-left .timeline-items');
    const rightColumn = document.querySelector('.timeline-column-right .timeline-items');
    const allItems = document.querySelectorAll('.timeline-item');

    leftColumn.innerHTML = `
        <div class="timeline-item-start">
            <div class="timeline-icon-start">
                <img src="../img/Location-Icon.svg" alt="Location-Icon">
            </div>
            <input class="start-location" spellcheck="false" placeholder="출발 위치" value="${startLocationInput}"></input>
        </div>
    `;
    rightColumn.innerHTML = '';

    allItems.forEach((item, index) => {
        const timelineItem = item.cloneNode(true);
        const newIndex = index + 1;
        
        // 아이디 업데이트
        timelineItem.id = `timeline-item${newIndex}`;
        
        // 아이콘 번호 업데이트
        const timelineIcon = timelineItem.querySelector('.timeline-icon');
        timelineIcon.id = `timeline-icon-${newIndex}`;
        timelineIcon.textContent = newIndex;
        
        // 타임라인 이름 입력 필드 아이디 업데이트
        const timelineName = timelineItem.querySelector('.timeline-name');
        timelineName.id = `timeline-name${newIndex}`;

        if (newIndex <= 3) {
            leftColumn.appendChild(timelineItem);
        } else {
            rightColumn.appendChild(timelineItem);
        }
    });
    timelineItemCount = allItems.length;
}

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('plan-modal').addEventListener('click', closeModalOutside);
    
    document.getElementById('plan-save').onclick = savePlan;
    document.querySelector('.modal-header button:last-child').onclick = deletePlan;
    
    document.querySelectorAll('.chapter:not(#chapter-add)').forEach(chapter => {
        chapter.addEventListener('dragstart', handleDragStart);
    });

    document.addEventListener('drop', handleDrop);
    document.addEventListener('dragover', handleDragOver);

    document.getElementById('chapter-add').onclick = addChapter;

    const chapterList = document.querySelector('.chapter-list');
    chapterList.addEventListener('dragover', handleDragOver);
    chapterList.addEventListener('drop', handleDrop);

    const mapBoxPreviewItems = document.querySelectorAll('.map-box-preview-item');
    const timelineBox = document.querySelector('.timeline-box');

    mapBoxPreviewItems.forEach(item => {
        item.setAttribute('draggable', true);
        item.addEventListener('dragstart', handleDragStart);
        
        item.querySelectorAll('*').forEach(child => {
            child.setAttribute('draggable', false);
            child.addEventListener('dragstart', e => e.preventDefault());
        });
    });

    timelineBox.addEventListener('dragover', handleDragOver);
    timelineBox.addEventListener('drop', handleDrop);
});
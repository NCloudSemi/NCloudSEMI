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
    document.querySelectorAll('.contents-box input, .contents-box textarea, .contents-box select').forEach(el => {
        el.disabled = !isEditable;
        if (!isEditable) {
            el.style.backgroundColor = 'transparent';
            el.style.color = 'inherit';
        } else {
            el.style.backgroundColor = '';
            el.style.color = '';
        }
    });
    
    document.getElementById('chapter-add').style.display = isEditable ? 'block' : 'none';
    document.getElementById('plan-delete').style.display = isEditable ? 'block' : 'none';
    
    const actionButton = document.querySelector('.modal-header button:nth-child(2)');
    actionButton.innerHTML = isEditable ? '💾' : '✍️';
    actionButton.classList.toggle('plan-save', isEditable);
    actionButton.classList.toggle('plan-edit', !isEditable);
    actionButton.onclick = isEditable ? savePlan : editPlan;

    document.querySelectorAll('.map-box-preview-item').forEach(item => {
        item.setAttribute('draggable', isEditable);
        item.querySelectorAll('*').forEach(el => el.style.pointerEvents = isEditable ? '' : 'none');
    });

    document.querySelectorAll('.timeline-box *').forEach(el => el.style.pointerEvents = isEditable ? '' : 'none');
    document.querySelectorAll('.timeline-item').forEach(item => {
        const deleteButton = item.querySelector('.delete-button');
        if (deleteButton) {
            deleteButton.style.display = isEditable ? 'block' : 'none';
        }
    });

    document.querySelectorAll('.timeline-traffic-item').forEach(item => {
        item.draggable = isEditable;
        item.querySelectorAll('*').forEach(el => {
            el.style.pointerEvents = isEditable ? 'auto' : 'none';
        });
    });

    document.getElementById('chapter-add').style.pointerEvents = isEditable ? 'auto' : 'none';

    if (isEditable) {
        enableDragAndDrop();
    } else {
        disableDragAndDrop();
    }
}

function enableDragAndDrop() {
    const timelineItems = document.querySelectorAll('.timeline-item, .timeline-traffic-item');
    timelineItems.forEach(item => {
        item.addEventListener('dragstart', handleTimelineItemDragStart);
        item.addEventListener('dragend', handleTimelineItemDragEnd);
    });

    const timelineBox = document.querySelector('.timeline-box');
    timelineBox.addEventListener('dragover', (event) => event.preventDefault());
    timelineBox.addEventListener('drop', handleTimelineBoxDrop);
}

function disableDragAndDrop() {
    const timelineItems = document.querySelectorAll('.timeline-item, .timeline-traffic-item');
    timelineItems.forEach(item => {
        item.removeEventListener('dragstart', handleTimelineItemDragStart);
        item.removeEventListener('dragend', handleTimelineItemDragEnd);
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
    } else if (draggedElement.classList.contains('timeline-item') || draggedElement.classList.contains('timeline-traffic-item')) {
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

// 타임라인 관련 함수
let timelineItemCount = 0;
let trafficItemCount = 0;

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

    const timelineBox = document.querySelector('.timeline-box');
    timelineBox.appendChild(timelineItem);

    updateTimelineNumbers();

    // 드래그 이벤트 리스너 추가
    timelineItem.addEventListener('dragstart', handleTimelineItemDragStart);
    timelineItem.addEventListener('dragend', handleTimelineItemDragEnd);
}

function handleTimelineItemDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.style.opacity = '0.5';
    }, 0);
}

function handleTimelineItemDragEnd(event) {
    event.target.style.opacity = '1';
}

function handleTimelineBoxDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    if (!draggedElement) return;

    const timelineBox = document.querySelector('.timeline-box');

    if (!timelineBox.contains(event.target)) {
        if (draggedElement.classList.contains('timeline-traffic-item')) {
            if (confirm('정말 교통 정보를 삭제하시겠습니까? 작성하신 내용은 저장되지 않습니다.')) {
                draggedElement.remove();
                updateTimelineNumbers();
            }
        } else if (draggedElement.classList.contains('timeline-item')) {
            if (confirm('정말 해당 계획을 삭제하시겠습니까? 작성하신 내용은 저장되지 않습니다.')) {
                const startLocationInput = document.querySelector('.start-location').value;
                draggedElement.remove();
                updateTimelineNumbers(startLocationInput);
            }
        }
    } else {
        const targetColumn = event.target.closest('.timeline-items') || (event.target.classList.contains('timeline-items') ? event.target : null);
        
        if (targetColumn) {
            const afterElement = getDragAfterElement(targetColumn, event.clientY);
            if (afterElement == null) {
                targetColumn.appendChild(draggedElement);
            } else {
                targetColumn.insertBefore(draggedElement, afterElement);
            }
            updateTimelineNumbers();
        }
    }
}

function updateTimelineNumbers(startLocationInput = '') {
    const leftColumn = document.querySelector('.timeline-column-left .timeline-items');
    const rightColumn = document.querySelector('.timeline-column-right .timeline-items');
    const allItems = document.querySelectorAll('.timeline-item, .timeline-traffic-item');

    leftColumn.innerHTML = `
        <div class="timeline-item-start">
            <div class="timeline-icon-start">
                <img src="../img/Location-Icon.svg" alt="Location-Icon">
            </div>
            <input class="start-location" spellcheck="false" placeholder="출발 위치" value="${startLocationInput}"></input>
        </div>
    `;
    rightColumn.innerHTML = '';

    let timelineIndex = 0;
    let trafficIndex = 0;

    allItems.forEach((item) => {
        if (item.classList.contains('timeline-item')) {
            timelineIndex++;
            const newIndex = timelineIndex;
            
            item.id = `timeline-item${newIndex}`;
            
            const timelineIcon = item.querySelector('.timeline-icon');
            timelineIcon.id = `timeline-icon-${newIndex}`;
            timelineIcon.textContent = newIndex;
            
            const timelineName = item.querySelector('.timeline-name');
            timelineName.id = `timeline-name${newIndex}`;
        } else if (item.classList.contains('timeline-traffic-item')) {
            trafficIndex++;
            item.id = `timeline-traffic-item${trafficIndex}`;
            item.querySelector('.timeline-traffic-icon').id = `timeline-traffic-icon${trafficIndex}`;
            item.querySelector('.traffic-time').id = `traffic-time${trafficIndex}`;
            item.querySelector('.traffic-option').id = `traffic-option${trafficIndex}`;
        }

        if (item.classList.contains('timeline-traffic-item') && trafficIndex <= 2) {
            leftColumn.appendChild(item);
        } else if (item.classList.contains('timeline-traffic-item') && trafficIndex <= 5) {
            rightColumn.appendChild(item);
        } else {
            if (timelineIndex <= 3) {
                leftColumn.appendChild(item);
            } else {
                rightColumn.appendChild(item);
            }
        }
    });

    timelineItemCount = timelineIndex;
    trafficItemCount = trafficIndex;
}


// 교통 버튼 함수
function createTrafficItem(trafficType) {
    if (trafficItemCount >= 5) {
        alert('최대 5개의 교통 아이템만 생성할 수 있습니다.');
        return;
    }

    trafficItemCount++;

    const trafficItem = document.createElement('div');
    trafficItem.className = 'timeline-traffic-item';
    trafficItem.id = `timeline-traffic-item${trafficItemCount}`;
    trafficItem.draggable = true;

    const trafficIcon = document.createElement('div');
    trafficIcon.className = 'timeline-traffic-icon';
    trafficIcon.id = `timeline-traffic-icon${trafficItemCount}`;

    const iconImg = document.createElement('img');
    iconImg.src = `../img/${trafficType}-Icon.svg`;
    iconImg.alt = `${trafficType}-Icon`;

    const trafficTime = document.createElement('input');
    trafficTime.type = 'text';
    trafficTime.className = 'traffic-time';
    trafficTime.spellcheck = false;
    trafficTime.placeholder = '소요 시간';
    trafficTime.id = `traffic-time${trafficItemCount}`;

    const trafficOption = document.createElement('select');
    trafficOption.className = 'traffic-option';
    trafficOption.id = `traffic-option${trafficItemCount}`;

    const options = [
        { value: 'Bus', text: '버스' },
        { value: 'Car', text: '자동차/택시' },
        { value: 'Walk', text: '도보' }
    ];

    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.text;
        if (opt.value === trafficType) {
            option.selected = true;
        }
        trafficOption.appendChild(option);
    });

    trafficIcon.appendChild(iconImg);
    trafficItem.appendChild(trafficIcon);
    trafficItem.appendChild(trafficTime);
    trafficItem.appendChild(trafficOption);

    const timelineBox = document.querySelector('.timeline-box');
    timelineBox.appendChild(trafficItem);

    updateTimelineNumbers();

    trafficOption.addEventListener('change', function() {
        iconImg.src = `../img/${this.value}-Icon.svg`;
        iconImg.alt = `${this.value}-Icon`;
    });

    trafficItem.addEventListener('dragstart', handleTimelineItemDragStart);
    trafficItem.addEventListener('dragend', handleTimelineItemDragEnd);
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.timeline-item:not(.dragging), .timeline-traffic-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
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

    document.querySelectorAll('.traffic-button').forEach(button => {
        button.addEventListener('click', function() {
            const trafficType = this.querySelector('img').alt.split('-')[0];
            createTrafficItem(trafficType);
        });
    });

    timelineBox.addEventListener('dragover', handleDragOver);
    timelineBox.addEventListener('drop', handleDrop);
});
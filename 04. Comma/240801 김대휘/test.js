// 모달창 닫기
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

// 여행 계획 저장 / 여행 계획 수정 버튼 작동
function savePlan() {
    alert('여행 계획을 저장하였습니다.');
    
    // 수정 불가 하도록 설정
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = true);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = true);
    
    // 챕터 추가 버튼 / 삭제 버튼 숨기기
    document.getElementById('chapter-add').style.display = 'none';
    document.getElementById('plan-delete').style.display = 'none';
    
    // 여행 계획 저장 버튼을 수정 버튼으로 변경
    const saveButton = document.querySelector('.modal-header button:nth-child(2)');
    saveButton.innerHTML = '✍️';
    saveButton.classList.remove('plan-save');
    saveButton.classList.add('plan-edit');
    saveButton.onclick = editPlan;

    // 챕터 드래그 앤 드롭 비활성화
    disableDragAndDrop();
}

// 여행 계획 수정 버튼 작동
function editPlan() {
    // 수정이 가능한 상태로 변경
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = false);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = false);
    
    // 챕터 추가 버튼 / 삭제 버튼 보이기
    document.getElementById('chapter-add').style.display = 'block';
    document.getElementById('plan-delete').style.display = 'block';
    
    // 여행 계획 저장 버튼으로 되돌아가기
    const editButton = document.querySelector('.modal-header button:nth-child(2)');
    editButton.innerHTML = '💾';
    editButton.classList.remove('plan-edit');
    editButton.classList.add('plan-save');
    editButton.onclick = savePlan;

    // 챕터 드래그 앤 드롭 활성화
    enableDragAndDrop();
}

// 여행 계획 삭제 버튼 실행
function deletePlan() {
    if (confirm('삭제하시겠습니까?')) {
        alert('계획이 삭제되었습니다.');
        document.getElementById('plan-modal').style.display = 'none';
    }
}

// 새로운 챕터 추가
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

// Add 버튼 위치 조정
function repositionAddButton() {
    const chapterList = document.querySelector('.chapter-list');
    const addButton = document.getElementById('chapter-add');
    chapterList.appendChild(addButton);
}

// 드래그 시작 이벤트
function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('invisible');
    }, 0);
}

// 드래그 오버 이벤트
function handleDragOver(event) {
    event.preventDefault();
}

// 드래그 종료 이벤트
function handleDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);
    draggedElement.classList.remove('invisible');

    const chapterList = document.querySelector('.chapter-list');

    // chapter-list 외부로 드래그된 경우
    if (!chapterList.contains(event.target) && event.target !== chapterList) {
        if (confirm('해당 챕터를 삭제하시겠습니까? 작성하신 내용은 저장되지 않습니다.')) {
            draggedElement.remove();
            updateChapterNumbers();
            repositionAddButton();
        }
        return;
    }

    // chapter-list 내부에서의 이동
    let targetElement = event.target.closest('.chapter');
    
    // 드래그한 요소와 타겟 요소가 다를 경우
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

// 챕터 번호 업데이트
function updateChapterNumbers() {
    const chapters = document.querySelectorAll('.chapter:not(#chapter-add)');
    chapters.forEach((chapter, index) => {
        const input = chapter.querySelector('.chapter-name');
        input.value = `${index + 1}일차`;
        chapter.id = `chapter${index + 1}`;
    });
}

// 드래그 앤 드롭 비활성화
function disableDragAndDrop() {
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.draggable = false; // 드래그 비활성화
        chapter.removeEventListener('dragstart', handleDragStart);
        chapter.removeEventListener('dragover', handleDragOver);
        chapter.removeEventListener('drop', handleDrop);
    });
}

// 드래그 앤 드롭 활성화
function enableDragAndDrop() {
    document.querySelectorAll('.chapter').forEach(chapter => {
        chapter.draggable = true; // 드래그 활성화
        chapter.addEventListener('dragstart', handleDragStart);
        chapter.addEventListener('dragover', handleDragOver);
        chapter.addEventListener('drop', handleDrop);
    });
}

// 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('plan-modal').addEventListener('click', closeModalOutside);
    
    document.getElementById('plan-save').onclick = savePlan;
    document.querySelector('.modal-header button:last-child').onclick = deletePlan;
    
    document.querySelectorAll('.chapter:not(#chapter-add)').forEach((chapter, index) => {
        chapter.addEventListener('dragstart', handleDragStart);
    document.addEventListener('drop', handleDrop);
    document.addEventListener('dragover', (event) => event.preventDefault());
    });

    document.getElementById('chapter-add').onclick = addChapter;

    const chapterList = document.querySelector('.chapter-list');
    chapterList.addEventListener('dragover', handleDragOver);
    chapterList.addEventListener('drop', handleDrop);
});
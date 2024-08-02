// 모달창 닫기
function closeModalOutside(event) {
    if (event.target.classList.contains('board-modal')) {
        document.getElementById('plan-modal').style.display = 'none';
    }
}

// 여행 계획 저장 / 여행 계획 수정 버튼 작동
function savePlan() {
    alert('여행 계획을 저장하였습니다.');
    
    // 수정 불가 하도록 설정
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = true);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = true);
    
    // 챕터 추가 버튼 / 저장 버튼 숨기기
    document.getElementById('chapter-add').style.display = 'none';
    document.getElementById('plan-delete').style.display = 'none';
    
    // 여행 계획 저장 버튼을 수정 버튼으로 변경
    const saveButton = document.querySelector('.modal-header button:nth-child(2)');
    saveButton.innerHTML = '✍️';
    saveButton.classList.remove('plan-save');
    saveButton.classList.add('plan-edit');팹
    saveButton.onclick = editPlan;
}

// 여행 계획 수정 버튼 작동
function editPlan() {
    // 수정이 가능한 상태로 변경
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = false);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = false);
    
    // 챕터 추가 버튼 / 저장 버튼 보이기
    document.getElementById('chapter-add').style.display = 'block';
    document.getElementById('plan-delete').style.display = 'block';
    
    // 여행 계획 저장 버튼으로 되돌아가기
    const editButton = document.querySelector('.modal-header button:nth-child(2)');
    editButton.innerHTML = '💾';
    editButton.classList.remove('plan-edit');
    editButton.classList.add('plan-save');
    editButton.onclick = savePlan;
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
    const newChapterNumber = chapterList.children.length;

    const newChapter = document.createElement('div');
    newChapter.className = 'chapter';
    newChapter.id = `chapter${newChapterNumber}`;
    newChapter.draggable = true;

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = `chapter-name${newChapterNumber}`;
    newInput.className = 'chapter-name';
    
    newInput.value = `${newChapterNumber}일차`;

    newChapter.onclick = () => switchChapter(newChapterNumber + 1);
    
    newChapter.appendChild(newInput);
    
    chapterList.insertBefore(newChapter, document.getElementById('chapter-add'));
    
    // 드래그 관련 이벤트 추가
    newChapter.addEventListener('dragstart', handleDragStart);
    newChapter.addEventListener('dragover', handleDragOver);
    newChapter.addEventListener('drop', handleDrop);
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
    event.preventDefault(); // 기본 동작 방지
}

// 드래그 종료 이벤트
function handleDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);

    if (event.target.classList.contains('chapter')) {
        // 같은 리스트 내에서 드래그 앤 드롭
        const targetElement = event.target;
        const chapterList = document.querySelector('.chapter-list');
        
        if (draggedElement !== targetElement) {
            // 드래그한 요소와 타겟 요소가 다를 경우
            chapterList.insertBefore(draggedElement, targetElement.nextSibling);
        }
    } else {
        // 모달 박스 밖으로 드래그한 경우
        if (confirm('삭제하시겠습니까?')) {
            draggedElement.remove();
        }
    }

    draggedElement.classList.remove('invisible'); // 드래그가 끝난 후 요소를 다시 보이게 함
}

// 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('plan-modal').addEventListener('click', closeModalOutside);
    
    document.getElementById('plan-save').onclick = savePlan;
    document.querySelector('.modal-header button:last-child').onclick = deletePlan;
    
    document.querySelectorAll('.chapter').forEach((chapter, index) => {
        chapter.onclick = () => switchChapter(index + 1);
        
        let pressTimer;
        chapter.addEventListener('mousedown', () => {
            pressTimer = window.setTimeout(() => deleteChapter(index + 1), 3000);
        });
        chapter.addEventListener('mouseup', () => clearTimeout(pressTimer));
        chapter.addEventListener('mouseleave', () => clearTimeout(pressTimer));
        
        // 드래그 관련 이벤트 추가
        chapter.addEventListener('dragstart', handleDragStart);
        chapter.addEventListener('dragover', handleDragOver);
        chapter.addEventListener('drop', handleDrop);
    });

    document.getElementById('chapter-add').onclick = addChapter;

    // 챕터 추가된 후에도 드래그 관련 이벤트를 설정
    const addChapterButton = document.getElementById('chapter-add');
    addChapterButton.addEventListener('dragover', handleDragOver);
});

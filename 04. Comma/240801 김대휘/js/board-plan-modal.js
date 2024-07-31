// Function to close the modal when clicking outside
function closeModalOutside(event) {
    if (event.target.classList.contains('board-modal')) {
        document.getElementById('plan-modal').style.display = 'none';
    }
}

// Function to save the plan
function savePlan() {
    alert('여행 계획을 저장하였습니다.');
    
    // Disable editing
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = true);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = true);
    
    // Hide chapter-add button
    document.getElementById('chapter-add').style.display = 'none';
    
    // Change save button to edit button
    const saveButton = document.querySelector('.modal-header button:nth-child(2)');
    saveButton.innerHTML = '✍️';
    saveButton.classList.remove('plan-save');
    saveButton.classList.add('plan-edit');
    saveButton.onclick = editPlan;
}

// Function to enable editing
function editPlan() {
    // Enable editing
    document.querySelectorAll('.contents-box input, .contents-box textarea').forEach(el => el.readOnly = false);
    document.querySelectorAll('.contents-box button').forEach(el => el.disabled = false);
    
    // Show chapter-add button
    document.getElementById('chapter-add').style.display = 'block';
    
    // Change edit button back to save button
    const editButton = document.querySelector('.modal-header button:nth-child(2)');
    editButton.innerHTML = '💾';
    editButton.classList.remove('plan-edit');
    editButton.classList.add('plan-save');
    editButton.onclick = savePlan;
}

// Function to delete the plan
function deletePlan() {
    if (confirm('삭제하시겠습니까?')) {
        // Add deletion logic here
        alert('계획이 삭제되었습니다.');
        document.getElementById('plan-modal').style.display = 'none';
    }
}

// Function to switch chapters
function switchChapter(chapterNumber) {
    // Add logic to switch to the selected chapter
    console.log(`Switched to chapter ${chapterNumber}`);
}

// Function to delete a chapter
function deleteChapter(chapterNumber) {
    if (confirm(`챕터 ${chapterNumber}를 삭제하시겠습니까?`)) {
        // Add chapter deletion logic here
        console.log(`Deleted chapter ${chapterNumber}`);
    }
}

// Function to add a new chapter
function addChapter() {
    const chapterList = document.querySelector('.chapter-list');
    const newChapterNumber = chapterList.children.length;
    
    const newChapter = document.createElement('div');
    newChapter.className = 'chapter';
    newChapter.id = `chapter${newChapterNumber}`;
    newChapter.onclick = () => switchChapter(newChapterNumber);
    
    chapterList.insertBefore(newChapter, document.getElementById('chapter-add'));
    
    // Move the add-chapter button
    const addChapterButton = document.getElementById('chapter-add');
    addChapterButton.style.marginLeft = `${newChapterNumber * 5}vw`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('plan-modal').addEventListener('click', closeModalOutside);
    
    document.querySelector('.plan-save').onclick = savePlan;
    document.querySelector('.modal-header button:last-child').onclick = deletePlan;
    
    document.querySelectorAll('.chapter').forEach((chapter, index) => {
        chapter.onclick = () => switchChapter(index + 1);
        
        let pressTimer;
        chapter.addEventListener('mousedown', () => {
            pressTimer = window.setTimeout(() => deleteChapter(index + 1), 3000);
        });
        chapter.addEventListener('mouseup', () => clearTimeout(pressTimer));
        chapter.addEventListener('mouseleave', () => clearTimeout(pressTimer));
    });
    
    document.getElementById('chapter-add').onclick = addChapter;
});
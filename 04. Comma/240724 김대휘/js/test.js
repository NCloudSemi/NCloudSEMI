document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const modal = document.getElementById('modal');
    
    cardContainer.addEventListener('click', function(e) {
        if (e.target.closest('.card')) {
            openModal();
        }
    });

    // 모달 외부 클릭 시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.zIndex = '1';
    }, 300);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}
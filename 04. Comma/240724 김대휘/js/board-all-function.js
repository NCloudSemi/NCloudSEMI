document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const viewModal = document.getElementById('view-modal');
    
    cardContainer.addEventListener('click', function(e) {
        if (e.target.closest('.card')) {
            openViewModal();
        }
    });

    // 모달 외부 클릭 시 닫기
    viewModal.addEventListener('click', function(e) {
        if (e.target === viewModal) {
            closeViewModal();
        }
    });
});

function openViewModal() {
    const viewModal = document.getElementById('view-modal');
    viewModal.style.display = 'flex';
    setTimeout(() => {
        viewModal.style.opacity = '1';
        viewModal.style.zIndex = '1';
    }, 300);
}

function closeViewModal() {
    const viewModal = document.getElementById('view-modal');
    viewModal.style.opacity = '0';
    setTimeout(() => {
        viewModal.style.display = 'none';
    }, 300);
}
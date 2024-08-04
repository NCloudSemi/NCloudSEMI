$(document).ready(function() {
    const $viewModal = $('#view-modal');
    const $writeModal = $('#write-modal');

    $('#cardContainer').on('click', '.card', function() {
        openViewModal();
    });

    $viewModal.click(function(e) {
        if (e.target === this) {
            closeViewModal();
        }
    });

    $writeModal.click(function(e) {
        if (e.target === this) {
            closeWriteModal();
        }
    });

    $('.write-button').click(function() {
        openWriteModal();
    });

    $('.edit').click(function() {
        openWriteModal();
    });

    $('.save').click(function() {
        alert('저장되었습니다.');
        closeWriteModal();
    });

    $('.delete').click(function() {
        if (confirm('정말 글을 삭제하시겠습니까?')) {
            alert('삭제되었습니다.');
            closeWriteModal();
        }
    });

    function openViewModal() {
        $viewModal.css('display', 'flex').css('opacity', 1).css('z-index', 1);
    }

    function closeViewModal() {
        $viewModal.css('opacity', 0).css('z-index', -1);
    }

    function openWriteModal() {
        $writeModal.css('opacity', 1).css('z-index', 1000);
    }

    function closeWriteModal() {
        $writeModal.css('opacity', 0).css('z-index', -1);
    }
});
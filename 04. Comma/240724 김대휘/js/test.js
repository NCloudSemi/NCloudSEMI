document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const photoButton = document.querySelector('.photo');
    const modalImg = document.querySelector('.modal-img img');
    const previewBox = document.querySelector('.modal-preview-box');
    const prevButton = document.querySelector('.slide-button.prev');
    const nextButton = document.querySelector('.slide-button.next');

    let uploadedImages = [];

    photoButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        if (files.length > 5 || uploadedImages.length + files.length > 5) {
            alert('최대 5개의 이미지만 업로드 가능합니다.');
            return;
        }

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedImages.push(e.target.result);
                updateImages();
            }
            reader.readAsDataURL(file);
        });
    });

    function updateImages() {
        if (uploadedImages.length > 0) {
            modalImg.src = uploadedImages[0];
        }

        previewBox.innerHTML = '';
        for (let i = 1; i < uploadedImages.length; i++) {
            const img = document.createElement('img');
            img.src = uploadedImages[i];
            img.addEventListener('click', () => removeImage(i));
            previewBox.appendChild(img);
        }
    }

    function removeImage(index) {
        uploadedImages.splice(index, 1);
        updateImages();
    }

    function slideImage(direction) {
        if (direction === 'next') {
            uploadedImages.push(uploadedImages.shift());
        } else {
            uploadedImages.unshift(uploadedImages.pop());
        }
        updateImages();
    }

    prevButton.addEventListener('click', () => slideImage('prev'));
    nextButton.addEventListener('click', () => slideImage('next'));
});
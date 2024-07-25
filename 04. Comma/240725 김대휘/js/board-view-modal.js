$(document).ready(function() {
    // 사진 슬라이드 기능
    const slideImages = ['../img/Example_Img1.svg', '../img/Example_Img2.svg']; 
    let currentSlide = 0;

    function showSlide(n) {
        const slideImage = document.querySelector('.slide-image');
        currentSlide = (n + slideImages.length) % slideImages.length;
        slideImage.src = slideImages[currentSlide];
    }

    document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

    // 댓글 더보기/접기 기능
    const showMoreButton = document.querySelector('.show-more-comments');
    const hiddenComments = document.querySelector('.hidden-comments');

    showMoreButton.addEventListener('click', () => {
        if (hiddenComments.style.display === 'none') {
            hiddenComments.style.display = 'block';
            showMoreButton.textContent = '댓글 접기';
        } else {
            hiddenComments.style.display = 'none';
            showMoreButton.textContent = '댓글 더보기';
        }
    });
});
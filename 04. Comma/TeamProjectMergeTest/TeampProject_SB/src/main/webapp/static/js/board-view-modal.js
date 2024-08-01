$(document).ready(function() {

    const contextPath = $('#contextPath').val();
    // 사진 슬라이드 기능
    //const slideImages = ['../img/Example_Img1.svg', '../img/Example_Img2.svg']; 전역으로 이돟
    //let currentSlide = 0; 전역으로 이동

    function showSlide(n) {
        const slideImage = document.querySelector('.slide-image');
        currentSlide = (n + slideImages.length) % slideImages.length;
        slideImage.src = `/upload/${slideImages[currentSlide]}`;
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


    const toggleLike = function(type) {
        const $this = $(this);
        const isLiked = $this.attr('is-like') == "true";
        const target_id = $this.attr('target-id')
        console.log($this.attr('is-like'))
        if (isLiked) {
            $this.find('img').attr("src", `${contextPath}/static/image/Unliked-Icon.svg`);
            $this.attr('is-like', false);
        } else {
            $this.find('img').attr("src", `${contextPath}/static/image/Liked-Icon.svg`);
            $this.attr('is-like', true);
        }

        //block button
        if(target_id != 'undefined')
        {
            $(this).addClass('disabled')
            fetch(`/post/like.do?type=${type}&target_id=${target_id}`).then(()=>{
                //unBlock button
                $(this).removeClass('disabled');
            })
        }



    }

    $('.modal-interaction-like-button').on('click',()=>{toggleLike('post')});
    $('.modal-comment-box').on('click', '.comment .like-button',()=>{ toggleLike('comment')});
    $('.modal-comment-box').on('click', ',commnet .comment-content .hidden-comments .hidden-comment .hidden-like-button',()=>{ toggleLike('hidden')})

});
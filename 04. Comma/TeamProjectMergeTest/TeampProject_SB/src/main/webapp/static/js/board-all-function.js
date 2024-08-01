$(document).ready(function() {
    const $viewModal = $('#view-modal');
    const $writeModal = $('#write-modal');
    const contextPath = $('#contextPath').val();

    $('#cardContainer').on('click', '.card', function() {
        //loading card
        const p_id = $(this).attr('card_id');

        console.log(p_id);
        console.log(typeof p_id);

        if(p_id != 'undefined' && p_id != null) {
            console.log(11111111111);
            getModalData(p_id)
        }else{
            console.log(2222222222222222);
            getDumyModalData()
        }
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

    function getModalData(post_id){
        fetch(`/post/get.do?post_id=${post_id}`)
            .then((res) => res.json())
            .then((res) => {

                const post = res["post"];
                //writer
                // Set the src attribute of the image
                $('.writer-image-box img').attr('src', `/upload/${post["profile_img"]}`);
                $('.writer-name').text(post["nickname"]);
                $('.writer-location').text(post["address"]);

                //did you like?
                $('.modal-interaction-like-button').attr('target-id', post['post_id'])
                if(post["is_like"]) {
                    $('.modal-interaction-like-button img').attr('src', `${contextPath}/static/image/Liked-Icon.svg`)
                    $('.modal-interaction-like-button').attr('is-like',true)
                }
                else {
                    $('.modal-interaction-like-button img').attr('src', `${contextPath}/static/image/Unliked-Icon.svg`)
                    $('.modal-interaction-like-button').attr('is-like',false)
                }

                //post title,content,imgs
                $('#title').val(post["title"])
                $('#memo').val(post["content"])

                //imgs-list
                slideImages=[];
                slideImages = JSON.parse(post["post_img"]);
                if (post["post_img"].length != 0)
                    $(".modal-img img").attr('src', `/upload/${slideImages[0]}`);
                else
                    $(".modal-img img").attr('src', `${contextPath}/static/image/Default-Img.svg`);
                currentSlide = 0;

                //loading comment
                return fetch(`/post/comment.do?post_id=${post_id}`)

            })
            .then((res) => res.json())
            .then((res) => {
                //all clear
                const comments = res["comments"];
                $('.modal-comment-box').empty()

                //make_comments
                if (comments != null && comments.length) {
                    let i = 0;
                    comments.forEach(comment => {
                        //is like?
                        let like_icon_src = `${contextPath}/static/image/Unliked-Icon.svg`
                        let is_like = false
                        if(comment["is_like"]) {
                            like_icon_src = `${contextPath}/static/image/Liked-Icon.svg`
                            is_like = true
                        }

                        const commentBlock = `<div class="comment">
                                <img src="/upload/${comment['profile_img']}" alt="Comment${i++}" class="commenter-image">
                                <div class="comment-content">
                                    <div class="commenter-info">
                                        <span class="commenter-name">${comment['nickname']}</span>
                                        <img src="${contextPath}/static/image/Comment1-Rank.svg" alt="rank" class="commenter-rank">
                                    </div>
                                    <p class="comment-text">${comment['comment_content']}</p>
                                    <button class="reply-button">답글 달기</button>
                                </div>
                                <button class="like-button"  comment-id = ${comment["comment_id"]} is-like =${is_like} target-id=${comment["comment_id"]} >
                                    <img src="${like_icon_src}" alt="좋아요">
                                </button>
                            </div>`

                        $('.modal-comment-box').append(commentBlock)
                    })
                }
                openViewModal();
            })
    }

    function getDumyModalData(){


        //더미 데이터 추가
        $('.writer-image-box img').attr('src', `${contextPath}/static/image/Writer.svg`);
        $('.writer-name').text("Sovely._.153");
        $('.writer-location').text("Cheonan, South Korea");

        //post title,content,imgs
        $('#title').val("제목 test")
        $('#memo').val("내용 test")

        //imgs-list
        slideImages=[];
        dumySlideImages.forEach(dumy=>{
            slideImages.push(dumy)
        })
        $(".modal-img img").attr('src', `${contextPath}/static/image/Writer.svg`);
        currentSlide = 0;

        //댓글영역
        const dumyComent = `<div class="comment">
            <img src="${contextPath}/static/image/Comment1.svg" alt="Comment1" class="commenter-image">
                <div class="comment-content">
                    <div class="commenter-info">
                        <span class="commenter-name">inner_dev</span>
                        <img src="${contextPath}/static/image/Comment1-Rank.svg" alt="rank" class="commenter-rank">
                    </div>
                    <p class="comment-text">미친.. 대박😲🫢 인피니티 풀 장난 아니네요;;;</p>
                    <button class="reply-button">답글 달기</button>
                </div>
                <button class="like-button" is-like = false>
                    <img src="${contextPath}/static/image/Unliked-Icon.svg" alt="좋아요">
                </button>
        </div>
        <div class="comment">
            <img src="${contextPath}/static/image/Comment2.svg" alt="Comment2" class="commenter-image">
                <div class="comment-content">
                    <div class="commenter-info">
                        <span class="commenter-name">hsmt_y</span>
                        <img src="${contextPath}/static/image/Comment2-Rank.svg" alt="rank" class="commenter-rank">
                    </div>
                    <p class="comment-text"><span id="tag">@i_m_0._.</span> 나영쓰.. 여기다.. 가자! 나 다음 여행 때 저기 무조건 데리고 가줘.. 제바류ㅠㅠ🥹🥹🥹🥹🥹</p>
                    <button class="reply-button">답글 달기</button>
                </div>
                <button class="like-button" is-like = true>
                    <img src="${contextPath}/static/image/Liked-Icon.svg" alt="좋아요">
                </button>
        </div>
        <div class="comment">
            <div class="commenter-image-wrapper">
                <img src="${contextPath}/static/image/Comment3.svg" alt="Comment3" class="commenter-image">
            </div>
            <div class="comment-content">
                <div class="commenter-info">
                    <span class="commenter-name">wmmwSiru</span>
                    <img src="${contextPath}/static/image/Comment3-Rank.svg" alt="rank" class="commenter-rank">
                </div>
                <p class="comment-text">헐... 여행가고 시ㅍ다</p>
                <button class="show-more-comments">댓글 더보기</button>
                <div class="hidden-comments" style="display: none;">
                    <div class="hidden-comment">
                        <img src="${contextPath}/static/image/Hidden-Comment1.svg" class="hidden-commenter-image" alt="Hidden-Comment1">
                            <div class="hidden-comment-content">
                                <div class="hidden-commenter-info">
                                    <span class="hidden-commenter-name">life_hip_somi</span>
                                    <img src="${contextPath}/static/image/Writer-Rank.svg" class="hidden-commenter-rank" alt="Hidden-Comment1-Rank">
                                </div>
                                <p class="hidden-comment-text"><span id="tag">@wmmwSiru</span>ㄹㅇ... 우리 그래서 언제 여행 가는건데;;</p>
                            </div>
                            <button class="hidden-like-button" is-like = false>
                                <img src="${contextPath}/static/image/Unliked-Icon.svg" alt="Like">
                            </button>
                    </div>
                </div>
            </div>
            <button class="like-button" is-like = true>
                <img src="${contextPath}/static/image/Liked-Icon.svg" alt="좋아요">
            </button>
        </div>`
        $('.modal-comment-box').empty().append(dumyComent)
        openViewModal()
    }

});
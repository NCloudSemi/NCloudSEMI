$(()=>{

    let mainContainer = document.querySelector("#mp_change_contents")
    let cardContainer = document.querySelector("#mp_grid-container") //container
    let popupCardContainer =  document.querySelector(".mp_pickplace-list")
    let popupLocationContainer =  document.querySelector(".mp_popup_gallery")


    const user_id  = $('input[name="user_id"]').val();
    
    //나중에 코드 합치기 p

    //내 카드 챙셔오기
    function  fetchCardsMy(){
        return new  Promise((resolve) =>{

                const cards = [];
                let datas =[]
                fetch(`/post/getMyPost?user_id=${user_id}`).then((res) =>res.json()).then((res)=>{
                    datas = res["posts"];
                    datas.forEach(data =>{
                        //이미지 작업
                        data['post_img'] = JSON.parse(data['post_img'])
                        cards.push({
                            id: data["post_id"] ,
                            imageUrl: (data["post_img"] != null && data["post_img"].length > 0 ) ? `/upload/${data["post_img"][0]}` :"",
                            title: data["title"]
                        });
                    })
                    resolve(cards);
                })


        });
    }
    // 카드 추가 기능
    function addCards(cards) {
        let inner=""
        console.log("HEAR1")
        let count =1
        cards.forEach(card => {
            inner += `<div class="mp_grid-item" card_id="${card.id}"><img src="${card.imageUrl}" /></div>`
            count +=1
        });
        for (let i = count; i <= 9; i++) {
            inner += `<div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진${i}.jpg" /></div>`
        }
        if(count < 9){
            $("#mp_travel_recode_num_tag").text(9)
        }else{
            $("#mp_travel_recode_num_tag").text(count-1)
        }


        document.querySelector("#mp_grid-container").innerHTML= inner;
        $(".mp_grid-item").on("click",function (){

            const p_id = $(this).attr('card_id');
            if(p_id != 'undefined' && p_id != null) {
                console.log(11111111111);
                getModalData(p_id)
            }else{
                console.log(2222222222222222);
                getDumyModalData()
            }
        })

    }

   

    //like 카드 챙겨오기
    function  fetchCardLike(){
        return new  Promise((resolve) =>{

                const cards = [];
                let datas =[]
                fetch(`/post/getMyLikes?user_id=${user_id}`).then((res) =>res.json()).then((res)=>{
                    datas = res["posts"];
                    datas.forEach(data =>{
                        //이미지 작업
                        data['post_img'] = JSON.parse(data['post_img'])
                        cards.push({
                            id: data["post_id"] ,
                            imageUrl: (data["post_img"] != null && data["post_img"].length > 0 ) ? `/upload/${data["post_img"][0]}` :"",
                            title: data["title"]
                        });
                    })
                    resolve(cards);
                })


        });
    }
    //카드추가
    function addLikeCards(cards) {
        let inner=""

        cards.forEach(card => {
            inner +=  `<div class="mp_checkbox" card_id ="${card.id}">
            <input type="checkbox" class="item-checkbox" />
            <img src="${card.imageUrl}" alt="Image 1" />
        </div>`

        });
        popupLocationContainer.innerHTML = inner;
        $(".mp_checkbox").on("click",function (){

            const p_id = $(this).attr('card_id');
            if(p_id != 'undefined' && p_id != null) {
                console.log(11111111111);
                getModalData(p_id)
            }else{
                console.log(2222222222222222);
                getDumyModalData()
            }
        })
    } 


    //page 그리기
    $(".mp_travelRecode_btn").on("click",function (){
         const loaded_page =`<div id="mp_add-post-button">
            <img src="/static/image/new_board_icon.svg" alt="게시물추가" />
        </div>
        <div id="mp_new_board_overlay" class="mp_hidden"></div>
        <div id="mp_new_board_popup" class="mp_hidden">
            <div class="mp_pick_popup-header">
                <div class="mp_pick_popup-header-title">
                    <h5>게시물 등록</h5>
                </div>
                <button id="mp_new_board_upload_popup">
                    <img src="/static/image/업로드_icon.svg" alt="업로드_icon" />
                </button>
                <button id="mp_new_board_close-popup">
                    <img src="/static/image/닫기_icon.svg" alt="닫기버튼" />
                </button>
            </div>
            <div class="mp_popup_content">
                <div class="mp_new_board_box">
                    <form action="">
                        <div class="mp_new_board_image_box">
                            <img src="/static/image/+_icon.svg" alt="+ 아이콘" />
                            <p><strong>이미지 등록</strong></p>
                        </div>
                        <div class="mp_new_board_text_box">
                            <textarea
                                rows="10"
                                maxlength="1000"
                                placeholder="게시물의 내용을 입력하세요."
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="mp_grid-container">
        </div>`
        mainContainer.innerHTML =loaded_page
        //카드 다시 가져오기
        fetchCardsMy().then(addCards);
    })

    //
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
                if(post["is_like"] == 1) {
                    $('.modal-interaction-like-button img').attr('src', `/static/image/Liked-Icon.svg`)
                    $('.modal-interaction-like-button').attr('is-like',true)
                }
                else {
                    $('.modal-interaction-like-button img').attr('src', `/static/image/Unliked-Icon.svg`)
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
                    $(".modal-img img").attr('src', `/static/image/Default-Img.svg`);
                //currentSlide = 0;

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
                        let like_icon_src = `/static/image/Unliked-Icon.svg`
                        let is_like = false
                        if(comment["is_like"]) {
                            like_icon_src = `/static/image/Liked-Icon.svg`
                            is_like = true
                        }

                        const commentBlock =
                            `<div class="comment">
                                <img src="/upload/${comment['profile_img']}" alt="Comment${i++}" class="commenter-image">
                                <div class="comment-content">
                                    <div class="commenter-info">
                                        <span class="commenter-name">${comment['nickname']}</span>
                                        <img src="/static/image/Comment1-Rank.svg" alt="rank" class="commenter-rank">
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
        $('.writer-image-box img').attr('src', `/static/image/Writer.svg`);
        $('.writer-name').text("Sovely._.153");
        $('.writer-location').text("Cheonan, South Korea");

        //post title,content,imgs
        $('#title').val("제목 test")
        $('#memo').val("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita vel omnis voluptas, voluptates voluptatum vitae pariatur? Labore maiores, quod est dignissimos eum consectetur voluptas exercitationem, iste consequatur quos totam excepturi!\n" +
            "                            Reprehenderit possimus omnis doloribus distinctio totam quaerat blanditiis molestiae aliquam inventore? Vel ut animi quos accusantium cum, iusto eum cumque rem tempora, minima temporibus, fuga reprehenderit consectetur suscipit? Quisquam, debitis.\n" +
            "                            Corporis dolorem, officia, eveniet tenetur quam perspiciatis nulla laborum amet non ut deserunt adipisci? Ex, quaerat eos, vero cum laborum, molestias hic asperiores in deserunt quod reiciendis possimus labore et?\n" +
            "                            Velit eaque soluta assumenda non voluptates optio ipsam placeat, ducimus earum possimus nam ipsa dolorum unde tenetur nisi vitae nulla magnam facere ea dolores maxime. Sunt laboriosam ipsam dicta praesentium.\n" +
            "                            Non deserunt expedita itaque, tempora cupiditate optio sint, nobis aperiam alias adipisci ipsa delectus dicta aliquid recusandae iste reiciendis. Mollitia itaque quis quidem modi eius minima ipsa soluta. Aliquam, doloribus.")

        //imgs-list
        //slideImages=[];
        //dumySlideImages.forEach(dumy=>{
        //    slideImages.push(dumy)
        //})
        //$(".modal-img img").attr('src', `/static/image/Writer.svg`);
        //currentSlide = 0;

        //댓글영역
        const dumyComent = `<div class="comment">
            <img src="/static/image/Comment1.svg" alt="Comment1" class="commenter-image">
                <div class="comment-content">
                    <div class="commenter-info">
                        <span class="commenter-name">inner_dev</span>
                        <img src="}/static/image/Comment1-Rank.svg" alt="rank" class="commenter-rank">
                    </div>
                    <p class="comment-text">미친.. 대박😲🫢 인피니티 풀 장난 아니네요;;;</p>
                    <button class="reply-button">답글 달기</button>
                </div>
                <button class="like-button" is-like = false>
                    <img src="/static/image/Unliked-Icon.svg" alt="좋아요">
                </button>
        </div>
        <div class="comment">
            <img src="/static/image/Comment2.svg" alt="Comment2" class="commenter-image">
                <div class="comment-content">
                    <div class="commenter-info">
                        <span class="commenter-name">hsmt_y</span>
                        <img src="/static/image/Comment2-Rank.svg" alt="rank" class="commenter-rank">
                    </div>
                    <p class="comment-text"><span id="tag">@i_m_0._.</span> 나영쓰.. 여기다.. 가자! 나 다음 여행 때 저기 무조건 데리고 가줘.. 제바류ㅠㅠ🥹🥹🥹🥹🥹</p>
                    <button class="reply-button">답글 달기</button>
                </div>
                <button class="like-button" is-like = true>
                    <img src="/static/image/Liked-Icon.svg" alt="좋아요">
                </button>
        </div>
        <div class="comment">
            <div class="commenter-image-wrapper">
                <img src="/static/image/Comment3.svg" alt="Comment3" class="commenter-image">
            </div>
            <div class="comment-content">
                <div class="commenter-info">
                    <span class="commenter-name">wmmwSiru</span>
                    <img src="$/static/image/Comment3-Rank.svg" alt="rank" class="commenter-rank">
                </div>
                <p class="comment-text">헐... 여행가고 시ㅍ다</p>
                <button class="show-more-comments">댓글 더보기</button>
                <div class="hidden-comments" style="display: none;">
                    <div class="hidden-comment">
                        <img src="/static/image/Hidden-Comment1.svg" class="hidden-commenter-image" alt="Hidden-Comment1">
                            <div class="hidden-comment-content">
                                <div class="hidden-commenter-info">
                                    <span class="hidden-commenter-name">life_hip_somi</span>
                                    <img src="/static/image/Writer-Rank.svg" class="hidden-commenter-rank" alt="Hidden-Comment1-Rank">
                                </div>
                                <p class="hidden-comment-text"><span id="tag">@wmmwSiru</span>ㄹㅇ... 우리 그래서 언제 여행 가는건데;;</p>
                            </div>
                            <button class="hidden-like-button" is-like = false>
                                <img src="/static/image/Unliked-Icon.svg" alt="Like">
                            </button>
                    </div>
                </div>
            </div>
            <button class="like-button" is-like = true>
                <img src="/static/image/Liked-Icon.svg" alt="좋아요">
            </button>
        </div>`
        $('.modal-comment-box').empty().append(dumyComent)
        openViewModal()
    }

    $('#view-modal').click(function(e) {
        if (e.target === this) {
            closeViewModal();
        }
    });

    $('#write-modal').click(function(e) {
        if (e.target === this) {
            closeWriteModal();
        }
    });

    $('.write-button').click(function() {
        //only defalut img
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
        $("#view-modal").css('display', 'flex').css('opacity', 1).css('z-index', 1);
    }

    function closeViewModal() {
        $("#view-modal").css('opacity', 0).css('z-index', -1);
    }

    function openWriteModal() {
        $("#write-modal").css('opacity', 1).css('z-index', 1000);
    }

    function closeWriteModal() {
        $("#write-modal").css('opacity', 0).css('z-index', -1);
    }


    //like 장소 챙겨오기
    
    //like 징소 추가

    
     //실행
    fetchCardsMy().then(addCards);
    fetchCardLike().then(addLikeCards);


    
   //픽한 게시물 픽한 장소 데이터 전송
   

    /*
   `<div class="mp_pickplace-item">
        <input type="checkbox" class="item-checkbox" />
        <img src="${pageContext.request.contextPath}/static/image/신라스테이_서초_img.png" alt="신라스테이_서초" />
        <div class="mp_pickplace_details">
            <h3>신라스테이 서초</h3>
            <div class="mp_pickplace_rating">
                <img
                    id="star_score_4"
                    src="${pageContext.request.contextPath}/static/image/별점(4점).svg"
                    alt="별점4점"
                />
            </div>
            <div class="mp_pickplace_grade">
                <strong>3성급 호텔</strong>
                    <img
                        id="certification_mark"
                        src="${pageContext.request.contextPath}/static/image/인증마크_icon.svg"
                        alt="인증마크"
                     />
            </div>
            <div class="mp_pickplace_price">
                span><strong>금액 : </strong>200,000 ~ 300,000</span>
            </div>
        </div>
    </div>`
    */











}) 
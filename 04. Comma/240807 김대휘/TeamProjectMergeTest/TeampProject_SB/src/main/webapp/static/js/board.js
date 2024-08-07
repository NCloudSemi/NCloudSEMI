$(document).ready(function() {


    const cardContainer = document.getElementById('cardContainer');
    const linkPost = document.getElementById("init_id").value
    let contextPath = document.getElementById("contextPath").value

    let page = 1;
    const cardsPerPage = 1000;

    //카드 불러오기 기능 DB
    function  fetchCardsReal(initPage){
        return new  Promise((resolve) =>{

                const cards = [];
                let datas =[]
                fetch(`/post/view.do?pageNum=${initPage}&searchKeyword=""`).then((res) =>res.json()).then((res)=>{
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

                    // 초기 카드 로드 (랜덤 데이터 짭)
                    fetchCards(page, cardsPerPage).then(addCards);
                })


        });
    }

    // 카드 불러오기 기능
    function fetchCards(page, perPage) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const cards = [];
                for (let i = 0; i < perPage; i++) {
                    cards.push({
                        imageUrl: `https://picsum.photos/200/300?travel=${page * perPage + i}`,
                        title: `Card ${page * perPage + i + 1}`
                    });
                }
                resolve(cards);
            }, 0);
        });
    }

    // 카드 추가 기능
    function addCards(cards) {
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.setAttribute("card_id",card.id);
            cardElement.innerHTML = `
                <img src="${card.imageUrl}" alt="${card.title}">
            `;
            cardContainer.appendChild(cardElement);
        });
    }

    //현재 링크 데이터가 있나?
    function loadLinkPost(post_id){
        try {
            getInitModalData(post_id)


        }catch (res){
            alert("존재하지 않은 게시글 입니다!")
        }
    }

    //실제로 존재하는 카드들 로드후 짭 로딩됨
    fetchCardsReal(cardsPerPage).then(addCards)

    //is-link?
    if(linkPost != null && linkPost != undefined && linkPost != -1)
    {
        console.log("try link")
        loadLinkPost(linkPost)
        console.log("try link")
    }

    // 무한 스크롤 구현
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            page++;
            fetchCards(page, cardsPerPage).then(addCards);
        }
    });


    //modal 열기용
    function getInitModalData(post_id){
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
                openInitMViewModal()
            })
    }

    function openInitMViewModal() {
        $('#viewModal').css('display', 'flex').css('opacity', 1).css('z-index', 1);
    }
});
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
            inner += `<div class="mp_grid-item"><img src="${card.imageUrl}" /></div>`
            count +=1
        });
        for (let i = count; i <= 9; i++) {
            inner += `<div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진${i}.jpg" /></div>`
        }
        document.querySelector("#mp_grid-container").innerHTML= inner;
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
            inner +=  `<div class="mp_checkbox">
            <input type="checkbox" class="item-checkbox" />
            <img src="${card.imageUrl}" alt="Image 1" />
        </div>`

        });
        popupLocationContainer.innerHTML = inner;
        console.log(popupLocationContainer)
        console.log("im inner "+inner)
    } 

    //page 전환 일부
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
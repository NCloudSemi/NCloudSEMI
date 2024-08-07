$(()=>{

    let mainContainer = document.querySelector("#")
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
        cards.forEach(card => {
            inner += `<div class="mp_grid-item"><img src="${card.imageUrl}" /></div>`

        });
        cardContainer.innerHTML= inner;
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
    addClickListener('mp_travelRecode_btn', travelRecordsHTML, initTravelRecords);
    $("#mp_travelRecode_btn").on("click",function (){

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
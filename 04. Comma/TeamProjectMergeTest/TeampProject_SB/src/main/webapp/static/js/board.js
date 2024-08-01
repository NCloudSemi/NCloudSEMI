$(document).ready(function() {


    const cardContainer = document.getElementById('cardContainer');
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

    //실제로 존재하는 카드들 로드후 짭 로딩됨
    fetchCardsReal(cardsPerPage).then(addCards)


    // 무한 스크롤 구현
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            page++;
            fetchCards(page, cardsPerPage).then(addCards);
        }
    });
});
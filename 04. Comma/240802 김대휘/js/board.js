$(document).ready(function() {
    // 카드 불러오기 기능
    const cardContainer = document.getElementById('cardContainer');
    let page = 1;
    const cardsPerPage = 1000;
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
            cardElement.innerHTML = `
                <img src="${card.imageUrl}" alt="${card.title}">
            `;
            cardContainer.appendChild(cardElement);
        });
    }

    // 초기 카드 로드
    fetchCards(page, cardsPerPage).then(addCards);

    // 무한 스크롤 구현
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            page++;
            fetchCards(page, cardsPerPage).then(addCards);
        }
    });
});
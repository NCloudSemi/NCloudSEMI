$(()=>{
        // 주요 DOM 요소 참조
        const mainContent = document.getElementById('content-main');
        const scrollAnchor = document.getElementById('scroll-anchor');
        const containerContent = document.getElementById('container-content');
        let postCount = 0;
        
        window.slideIndex = 0;  // 전역 슬라이드 인덱스 변수
        window.editSlideIndex = 0;
    
        // 더미 데이터 생성
        const posts = Array.from({ length: 30 }, (_, i) => i + 1);

    
        // 메인 영역 컨텐츠 로드 함수
        function loadMorePosts(initial = false) {
            const postsToLoad = initial ? 2 : 10;
            let photoCount = 0;
            let videoCount = 0;
    
            for (let i = 0; i < postsToLoad; i++) {
                let postType;
                let postClass;
                if (videoCount < Math.floor((photoCount + 1) / 4)) {
                    postType = 'video';
                    postClass = 'landscape';
                    videoCount++;
                } else {
                    postType = 'photo';
                    postClass = 'square';
                    photoCount++;
                }
                //data-bs-toggle="modal" data-bs-target="#postModal" data-post-id="3"
                const post = document.createElement('div');

                post.setAttribute("data-bs-toggle", "modal");
                post.setAttribute("data-bs-target", "#postModal");
                post.setAttribute("data-post-id", "3");
                post.className = `post ${postType} ${postClass}`;
                //post.addEventListener('click', function() {
                //    openModal(postType);
                //});
    
                if (postType === 'photo') {
                    post.innerHTML = `<img src="img/카드 게시판 사진_${(postCount % 22)+1}.jpg" alt="Post Image">`;
                } else {
                    post.innerHTML = `<img src="img/카드 게시판 동영상_${(postCount % 11)+1}.gif" ></img>`;
                }
    
                mainContent.insertBefore(post, scrollAnchor);
                postCount++;
            }
        }
    
        // IntersectionObserver를 사용하여 스크롤에 따라 게시글 추가 로드
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMorePosts();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
    
        observer.observe(scrollAnchor);
    
        // 초기 게시글 로드
        loadMorePosts(true);
})
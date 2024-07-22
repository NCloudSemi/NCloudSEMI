document.addEventListener('DOMContentLoaded', function() {
    // 주요 DOM 요소 참조

    const mainContent = document.getElementById('content-main');
    const scrollAnchor = document.getElementById('scroll-anchor');
    const containerContent = document.getElementById('container-content');
    const editPost = document.getElementById('edit-post');
    const deletePost = document.getElementById('delete-post');
    const editPostContent = document.getElementById('edit-post-content');
    const deletePostContent = document.getElementById('delete-post-content');
    let postCount = 0;
    window.slideIndex = 0;  // 전역 슬라이드 인덱스 변수
    window.editSlideIndex = 0;

    // 더미 데이터 생성
    const posts = Array.from({ length: 30 }, (_, i) => i + 1);

    // 메뉴 버튼에 클릭 이벤트 리스너 추가
    //document.getElementById('btn-edit-post').addEventListener('click', function() {
    //    updateContent(editPost, editPostContent, posts); // 게시글 수정 페이지로 업데이트
    //});
    //document.getElementById('btn-delete-post').addEventListener('click', function() {
    //    updateContent(deletePost, deletePostContent, posts); // 게시글 삭제 페이지로 업데이트
    //});

    // 컨텐츠 업데이트 함수
    function updateContent(page, content, data) {
        containerContent.style.display = 'none';
        editPost.style.display = 'none';
        deletePost.style.display = 'none';
        page.style.display = 'flex';

        // 데이터가 없을 경우 '게시글이 없음' 표시
        if (data.length === 0) {
            content.innerHTML = '<p>게시글이 없음</p>';
        } else {
            content.innerHTML = ''; // 페이지 비움
            data.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.className = 'post square'; // 메인 컨텐츠와 동일한 스타일 적용
                postElement.innerHTML = `
                    <div class="post-content">
                        <img src="https://picsum.photos/1080?random=${index}" alt="Post Image">
                    </div>
                `;
                postElement.addEventListener('click', function() {
                    openEditPostModal(`게시글 내용 ${index}`);
                });

                content.appendChild(postElement);

            });
        }
    }

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

            const post = document.createElement('div');
            post.className = `post ${postType} ${postClass}`;
            post.addEventListener('click', function() {
                openModal(postType);
            });

            if (postType === 'photo') {
                post.innerHTML = `<img src="https://picsum.photos/1080?random=${postCount}" alt="Post Image">`;
            } else {
                post.innerHTML = `<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls></video>`;
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

    // 모달창 관련 변수 및 함수
    const modalPost = document.getElementById('modal-post');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modalPost) {
            closeModal();
        }
    });

    // 모달창 열기 함수
    function openModal(type) {
        const carouselPost = document.getElementById('carousel-post');
        carouselPost.innerHTML = '';

        // 더미 데이터 추가 
        const numOfItems = 5;
        for (let i = 0; i < numOfItems; i++) {
            if (type === 'photo') {
                const img = document.createElement('img');
                img.src = `https://picsum.photos/600?random=${i+1}`;
                carouselPost.appendChild(img);
            } else {
                const video = document.createElement('video');
                video.src = `https://www.w3schools.com/html/mov_bbb.mp4`;
                video.controls = true;
                carouselPost.appendChild(video);
            }
        }

        window.slideIndex = 0;  // 슬라이드 인덱스 초기화
        showSlides(window.slideIndex);
        modalPost.style.display = 'block';
    }

    // 모달창 닫기 함수
    function closeModal() {
        modalPost.style.display = 'none';
    }

    // 게시글 작성 모달창 관련 변수 및 함수
    const modalCreatePost = document.getElementById('modal-create-post');
    const modalCreatePostContent = document.getElementById('modal-create-post-content');
    //const createPostButton = document.getElementById('btn-create-post');
    //const closeCreatePostButton = document.querySelector('#modal-create-post .close-button');
    //const closeCreatePostContentButton = document.querySelector('#modal-create-post-content .close-button');
    const uploadImagesForm = document.getElementById('form-upload-images');
    const createPostForm = document.getElementById('form-create-post');
    let uploadedImages = [];

    //createPostButton.addEventListener('click', function() {
    //    modalCreatePost.style.display = 'block';
    //});

    //closeCreatePostButton.addEventListener('click', function() {
    //    modalCreatePost.style.display = 'none';
    //});

    //closeCreatePostContentButton.addEventListener('click', function() {
    //    modalCreatePostContent.style.display = 'none';
    //});

    window.addEventListener('click', function(event) {
        if (event.target === modalCreatePost) {
            modalCreatePost.style.display = 'none';
        } else if (event.target === modalCreatePostContent) {
            modalCreatePostContent.style.display = 'none';
        }
    });

    // 이미지 업로드 폼 제출 시 처리 함수
    uploadImagesForm.addEventListener('submit', function(event) {
        //서버 전송 로직 자리
        event.preventDefault();
        const files = document.getElementById('input-post-images').files;
        uploadedImages = [];
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedImages.push(e.target.result);
                if (uploadedImages.length === files.length) {
                    openCreatePostContentModal();
                }
            };
            reader.readAsDataURL(files[i]);
        }
    });

    // 게시글 작성 단계 모달창 열기 함수
    function openCreatePostContentModal() {
        const carouselCreateContent = document.getElementById('carousel-create-content');
        carouselCreateContent.innerHTML = '';
        uploadedImages.forEach((imageSrc) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            carouselCreateContent.appendChild(img);
        });
        window.slideIndex = 0;  // 슬라이드 인덱스 초기화
        showSlidesContent(window.slideIndex);
        modalCreatePost.style.display = 'none';
        modalCreatePostContent.style.display = 'block';
    }

    // 이전 버튼 클릭 시 첫 번째 모달창으로 돌아가는 함수
    window.goToPrevious = function() {
        modalCreatePostContent.style.display = 'none';
        modalCreatePost.style.display = 'block';
    };

    /**게시글 수정 모달창 */
    const modalEditPost = document.getElementById('modal-edit-post');
    const closeEditPostButton = document.querySelector('#modal-edit-post .close-button');
    const editPostForm = document.getElementById('form-edit-post');
    const editPostTextarea = document.getElementById('textarea-edit-post-content');

    function closeEditPostModal() {
        modalEditPost.style.display = 'none';
    }

    closeEditPostButton.addEventListener('click', function() {
        closeEditPostModal();
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalEditPost) {
            closeEditPostModal();
        }
    });

    editPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // 서버전송 로직 자리 
        const editedContent = editPostTextarea.value;
        console.log('수정된 내용:', editedContent);
        closeEditPostModal();
    });

    function openEditPostModal() {
        containerContent.style.display = 'none';
        deletePost.style.display = 'none';
        editPost.style.display = 'none';
        modalEditPost.style.display = 'flex';
        const carouselEditContent = document.getElementById('carousel-edit-content');

        // 이미지 캐러셀 초기화
        carouselEditContent.innerHTML = '';

        // 더미 데이터 가져오기 (picsum.photos에서 임시 이미지 사용)
        const numOfImages = 30; // 가져올 이미지 개수
        

        for (let i = 0; i < numOfImages; i++) {
            const img = document.createElement('img');
            img.src = `https://picsum.photos/1080?random=${i+1}`;
            carouselEditContent.appendChild(img);
        }

        window.slideIndex = 0;  // 슬라이드 인덱스 초기화
        showSlidesEdit(window.slideIndex);
    }

    function closeEditPostModal() {
        modalEditPost.style.display = 'none';
        containerContent.style.display = 'flex';
    }

    document.querySelector('#modal-edit-post .close-button').addEventListener('click', closeEditPostModal);
    window.addEventListener('click', function(event) {
        if (event.target === modalEditPost) {
            closeEditPostModal();
        }
    });
});

// 캐러셀 슬라이드 이동 함수
function plusSlides(n) {
    showSlides(window.slideIndex += n);
}

// 캐러셀 슬라이드 표시 함수
function showSlides(n) {
    const slides = document.querySelectorAll('#carousel-post > *');
    if (n >= slides.length) {
        window.slideIndex = 0;
    }
    if (n < 0) {
        window.slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[window.slideIndex].style.display = 'block';
}

// 게시글 작성 단계 캐러셀 슬라이드 이동 함수
function plusSlidesContent(n) {
    showSlidesContent(window.slideIndex += n);
}

// 게시글 작성 단계 캐러셀 슬라이드 표시 함수
function showSlidesContent(n) {
    const slidesContent = document.querySelectorAll('#carousel-create-content > *');
    if (n >= slidesContent.length) {
        window.slideIndex = 0;
    }
    if (n < 0) {
        window.slideIndex = slidesContent.length - 1;
    }
    for (let i = 0; i < slidesContent.length; i++) {
        slidesContent[i].style.display = 'none';
    }
    slidesContent[window.slideIndex].style.display = 'block';
}

function plusSlidesEdit(n) {
    showSlidesEdit(window.editSlideIndex += n);
}
function showSlidesEdit(n) {
    const slidesEdit = document.querySelectorAll('#carousel-edit-content > *');
    if (n >= slidesEdit.length) {
        window.editSlideIndex = 0;
    }
    if (n < 0) {
        window.editSlideIndex = slidesEdit.length - 1;
    }
    for (let i = 0; i < slidesEdit.length; i++) {
        slidesEdit[i].style.display = 'none';
    }
    slidesEdit[window.editSlideIndex].style.display = 'block';
}
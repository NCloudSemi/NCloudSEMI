$(()=>{
       


        var postModal = document.getElementById('postModal');
        postModal.addEventListener('show.bs.modal', function (event) {
            var button = event.relatedTarget;
            var postId = button.getAttribute('data-post-id');
            
            var postData = getPostData(postId);

            var modalTitle = postModal.querySelector('.modal-title');
            var carouselInner = postModal.querySelector('.carousel-inner');
            var postContent = postModal.querySelector('#postContent');

            modalTitle.textContent = postData.title;
            carouselInner.innerHTML = '';
            postData.images.forEach(function(image, index) {
                var item = document.createElement('div');
                item.className = 'carousel-item' + (index === 0 ? ' active' : '');
                item.innerHTML = '<img src="' + image + '" class="d-block w-100" alt="Image ' + (index + 1) + '">';
                carouselInner.appendChild(item);
            });
            postContent.innerHTML = postData.content;
        });

        var writeModal = document.getElementById('writeModal');
        var postContentInput = document.getElementById('postContent');
        var charCount = document.getElementById('charCount');
        var postImages = document.getElementById('postImages');
        var imagePreview = document.getElementById('imagePreview');

        postContentInput.addEventListener('input', function() {
            charCount.textContent = this.value.length + ' / 200';
        });

        postImages.addEventListener('change', function(event) {
            imagePreview.innerHTML = '';
            for (var i = 0; i < event.target.files.length; i++) {
                var img = document.createElement('img');
                img.src = URL.createObjectURL(event.target.files[i]);
                img.style.width = '100px';
                img.style.height = '100px';
                img.style.objectFit = 'cover';
                imagePreview.appendChild(img);
            }
        });

        document.getElementById('submitPost').addEventListener('click', function() {
            console.log('게시글 제출');
            var modal = bootstrap.Modal.getInstance(writeModal);
            modal.hide();
        });


    function getPostData(postId) {
        var posts = {
            '1': {
                title: '☁️하늘 자전거☁️',
                images: ['img/하늘자전거1.png', 'img/하늘자전거2.png', 'img/하늘자전거3.png'],
                content: '하늘 자전거를 타고 나니까 진짜 거짓말 쬐~끔 보태서 ☁️구름 위를 여행하는 것 같았어😚'
            },
            '2': {
                title: '국내여행지 뿌시기👊 프로젝트 in【 강 릉 】',
                images: ['img/강릉1.jpg', 'img/강릉2.jpg', 'img/강릉3.jpg', 'img/강릉4.jpg'],
                content: '☀️뜨거운 태양을 피해 시~원한 바다🌊가 있는 강릉으로 떠난 날😎'
            },
            '3': {
                title: '국내여행지 뿌시기👊 프로젝트 in【 전 주 】',
                images: ['img/전주1.jpg', 'img/전주2.jpg'],
                content: '⚠️아름다움에 기절 주의⚠️ 아름다운 자연경관들과 고풍스러운 한옥들이 즐비한 전주'
            },
            '4': {
                title: '국내여행지 뿌시기👊 프로젝트 in【 경 주 】',
                images: ['img/경주1.jpg', 'img/경주2.jpg', 'img/경주3.jpg'],
                content: '⭐선조들이 달과 별을 보던 첨성대가 있던🌕 경주! 야경을 보며 걷다보면 감성이 뿜뿜😍😍'
            }
        };
        return posts[postId];
    }


})
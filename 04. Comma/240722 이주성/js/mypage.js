const messageBox = document.getElementById("message-box");
const mp_status_popup = document.getElementById("mp_status_popup");
const mp_status_overlay = document.getElementById("mp_status_overlay");
const applyMessageBtn = document.getElementById("apply-message");
const closePopupBtn = document.getElementById("close-mp_status_popup");

messageBox.addEventListener("click", function () {
    // 팝업 및 오버레이 표시
    mp_status_popup.style.display = "block";
    mp_status_overlay.style.display = "block";
});

applyMessageBtn.addEventListener("click", function () {
    const icon = document.getElementById("icon-select").value;
    const message = document.getElementById("message-input").value;

    if (message) {
        const iconElement = messageBox.querySelector(".icon");
        const messageElement = messageBox.querySelector(".message");

        // 아이콘과 메시지 업데이트
        iconElement.src = icon;
        messageElement.textContent = message;

        // 팝업 닫기
        mp_status_popup.style.display = "none";
        mp_status_overlay.style.display = "none";
    } else {
        alert("메시지를 입력하세요.");
    }
});

closePopupBtn.addEventListener("click", function () {
    // 팝업 닫기
    mp_status_popup.style.display = "none";
    mp_status_overlay.style.display = "none";
});

// 오버레이 클릭 시 팝업 닫기
overlay.addEventListener("click", function () {
    mp_status_popup.style.display = "none";
    mp_status_overlay.style.display = "none";
});

// IndexedDB 초기화
let db;
const request = indexedDB.open("postDB", 1);

request.onerror = function (event) {
    console.error("Database error:", event);
};

request.onsuccess = function (event) {
    db = event.target.result;
    displayPosts(); // 데이터베이스에서 게시물 표시
};

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("posts", { keyPath: "id", autoIncrement: true });
};

// 게시물 추가 팝업 열기
const addPostButton = document.getElementById("add-post-button");
const new_board_popup = document.getElementById("new_board_popup");
const new_board_overlay = document.getElementById("new_board_overlay");
const gridContainer = document.getElementById("grid-container");
const registerButton = document.getElementById("register-button");
const closePopupButton = document.getElementById("close-new_board_popup");

addPostButton.addEventListener("click", function () {
    new_board_popup.style.display = "block";
    new_board_overlay.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
    new_board_popup.style.display = "none";
    new_board_overlay.style.display = "none";
});

// 게시물 등록 버튼 클릭 시
registerButton.addEventListener("click", function () {
    const representativeImageInput = document.getElementById("representative-image");
    const postText = document.getElementById("post-text").value;
    const additionalImagesInput = document.getElementById("additional-images");

    // 대표 이미지 처리
    const representativeFile = representativeImageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const representativeImgSrc = event.target.result;

        // IndexedDB에 게시물 저장
        const transaction = db.transaction(["posts"], "readwrite");
        const store = transaction.objectStore("posts");
        const post = {
            representativeImage: representativeImgSrc,
            text: postText,
            additionalImages: [],
        };

        // 추가 이미지 처리
        for (const file of additionalImagesInput.files) {
            const additionalReader = new FileReader();
            additionalReader.onload = function (event) {
                post.additionalImages.push(event.target.result);
                if (post.additionalImages.length === additionalImagesInput.files.length) {
                    store.add(post);
                    transaction.oncomplete = function () {
                        displayPosts(); // 게시물 표시
                        new_board_popup.style.display = "none";
                        new_board_overlay.style.display = "none";
                    };
                }
            };
            additionalReader.readAsDataURL(file);
        }
    };

    if (representativeFile) {
        reader.readAsDataURL(representativeFile);
    } else {
        alert("대표 이미지를 선택하세요.");
    }
});

// 게시물 표시
function displayPosts() {
    gridContainer.innerHTML = ""; // 기존 내용 초기화

    const transaction = db.transaction(["posts"], "readonly");
    const store = transaction.objectStore("posts");
    const request = store.getAll();

    request.onsuccess = function (event) {
        const posts = event.target.result;
        posts.forEach((post) => {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.innerHTML = `
                <img src="${post.representativeImage}" alt="대표 이미지">
                <p>${post.text}</p>
            `;
            // 추가 이미지 표시
            post.additionalImages.forEach((imageSrc) => {
                const img = document.createElement("img");
                img.src = imageSrc;
                gridItem.appendChild(img);
            });
            gridContainer.appendChild(gridItem);
        });
    };
}

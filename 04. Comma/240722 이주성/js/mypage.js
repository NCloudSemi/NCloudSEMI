/*---------------------------프로필 사진 변경---------------------------*/
function change_profile() {
    let input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.click();
    input.onchange = function (event) {
        changeFileFromLocal(event.target.files[0]);
    }
}

function changeFileFromLocal (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file, "UTF-8");

    reader.onload = function() {
        let output = document.getElementById("mp_profile");
        output.src = reader.result;
    }
}

/*---------------------------픽한 게시물, 픽한 장소-----------------------*/
/*------------------------------픽한 게시물------------------------------*/
const pickBoardIcons = document.querySelectorAll("#mp_heart_icon, #mp_pickboard_text");

pickBoardIcons.forEach(icon => {
    icon.addEventListener("click", function() {
        document.getElementById('mp_pickboard_overlay').style.display = 'block';
        document.getElementById('mp_pickboard_popup').style.display = 'block';
    });
});

document.getElementById('mp_pickboard_close-popup').addEventListener('click', function () {
    document.getElementById('mp_pickboard_overlay').style.display = 'none';
    document.getElementById('mp_pickboard_popup').style.display = 'none';
});

// 오버레이를 클릭하면 팝업을 닫음
document.getElementById('mp_pickboard_overlay').addEventListener('click', function () {
    document.getElementById('mp_pickboard_overlay').style.display = 'none';
    document.getElementById('mp_pickboard_popup').style.display = 'none';
});

/*------------------------------픽한 장소--------------------------------*/







/*---------------------------내 여행 등급 확인----------------------------*/






/*----------------------------상태메세지 변경-----------------------------*/
const messageBox = document.getElementById("mp_messagebox");
const mp_status_popup = document.getElementById("mp_status_popup");
const mp_status_overlay = document.getElementById("mp_status_overlay");
const applyMessageBtn = document.getElementById("apply-message");
const closeStatusPopupBtn = document.getElementById("close-mp_status_popup");

messageBox.addEventListener("click", function () {
    // 팝업 및 오버레이 표시
    mp_status_popup.style.display = "block";
    mp_status_overlay.style.display = "block";

    // 폰트 크기 초기화
    const messageElement = messageBox.querySelector(".message");
    messageElement.style.fontSize = 'initial';
});

applyMessageBtn.addEventListener("click", function () {
    const message = document.getElementById("message-input").value;

    if (message) {
        const messageElement = messageBox.querySelector(".message");

        // 메시지 업데이트 및 줄바꿈 처리
        messageElement.innerHTML = message.replace(/\n/g, '<br>');

        // 폰트 크기 조절
        fitTextToBox(messageElement);

        // 팝업 닫기
        mp_status_popup.style.display = "none";
        mp_status_overlay.style.display = "none";
    } else {
        alert("메시지를 입력하세요.");
    }
});

closeStatusPopupBtn.addEventListener("click", function () {
    // 팝업 닫기
    mp_status_popup.style.display = "none";
    mp_status_overlay.style.display = "none";
});

// 오버레이 클릭 시 팝업 닫기
mp_status_overlay.addEventListener("click", function () {
    mp_status_popup.style.display = "none";
    mp_status_overlay.style.display = "none";
});

// 폰트 크기를 조절하는 함수
function fitTextToBox(element) {
    const parent = element.parentElement;
    let fontSize = window.getComputedStyle(element).fontSize.replace('px', '');
    fontSize = parseFloat(fontSize);

    while (element.scrollHeight > parent.clientHeight || element.scrollWidth > parent.clientWidth) {
        fontSize -= 1;
        element.style.fontSize = fontSize + 'px';
        if (fontSize < 10) break; // 최소 폰트 크기 제한
    }
}

/*-------------------------------게시물추가----------------------------*/

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB =
window.indexedDB ||
window.mozIndexedDB ||
window.webkitIndexedDB ||
window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction =
window.IDBTransaction ||
window.webkitIDBTransaction ||
window.msIDBTransaction;
window.IDBKeyRange =
window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

if (!window.indexedDB) {
    window.alert(
    "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.",
    );
}

// IndexedDB 초기화
let db;
const request = indexedDB.open("postDB", 1);

request.onerror = function (event) {
    alert("Database error: " + event.target.errorCode);
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
const gridContainer = document.getElementById("mp_grid-container");
const registerButton = document.getElementById("register-button");
const closeNewBoardPopupBtn = document.getElementById("close-new_board_popup");

addPostButton.addEventListener("click", function () {
    new_board_popup.style.display = "block";
    new_board_overlay.style.display = "block";
});

closeNewBoardPopupBtn.addEventListener("click", function () {
    new_board_popup.style.display = "none";
    new_board_overlay.style.display = "none";
});

registerButton.addEventListener("click", function () {
    // 게시물 등록 버튼 클릭 이벤트 핸들러

    const representativeImageInput = document.getElementById("representative-image");
    const postText = document.getElementById("post-text").value;
    const additionalImagesInput = document.getElementById("additional-images");

    // 대표 이미지 파일 가져오기
    const representativeFile = representativeImageInput.files[0];
    if (!representativeFile) {
        alert("대표 이미지를 선택하세요.");
        return;
    }

    // FileReader를 사용해 대표 이미지 파일을 읽음
    const reader = new FileReader();
    reader.onload = function (event) {
        // 이미지 파일이 로드되면 데이터 URL을 가져옴
        const representativeImgSrc = event.target.result;

        // 추가 이미지 파일들을 배열로 가져옴
        const additionalFiles = Array.from(additionalImagesInput.files);
        const additionalImages = [];

        if (additionalFiles.length === 0) {
            // 추가 이미지가 없을 경우 바로 게시물을 저장
            savePost(representativeImgSrc, postText, additionalImages);
        } else {
            // 추가 이미지가 있을 경우 각 파일을 읽음
            let loadedImages = 0;
            additionalFiles.forEach((file) => {
                const additionalReader = new FileReader();
                additionalReader.onload = function (event) {
                    // 각 추가 이미지 파일이 로드되면 데이터 URL을 추가 이미지 배열에 추가
                    additionalImages.push(event.target.result);
                    loadedImages++;

                    if (loadedImages === additionalFiles.length) {
                        // 모든 추가 이미지가 로드되면 게시물을 저장
                        savePost(representativeImgSrc, postText, additionalImages);
                    }
                };
                additionalReader.readAsDataURL(file); // 추가 이미지 파일을 데이터 URL로 읽음
            });
        }
    };
    reader.readAsDataURL(representativeFile); // 대표 이미지 파일을 데이터 URL로 읽음
});

// 게시물을 저장하는 함수
function savePost(representativeImgSrc, postText, additionalImages) {
    // IndexedDB 트랜잭션 생성 및 게시물 저장소 접근
    const transaction = db.transaction(["posts"], "readwrite");
    const store = transaction.objectStore("posts");
    const post = {
        representativeImage: representativeImgSrc, // 대표 이미지 URL
        text: postText, // 게시물 텍스트
        additionalImages: additionalImages // 추가 이미지 배열
    };

    store.add(post);
    transaction.oncomplete = function () {
        displayPosts(); // 게시물 표시 함수 호출
        new_board_popup.style.display = "none";
        new_board_overlay.style.display = "none";
    };
}

function displayPosts() {
    // posts 객체 저장소에 대한 트랜잭션 열기
    let transaction = db.transaction(["posts"], "readonly");
    let store = transaction.objectStore("posts");

    // 모든 게시물 가져오기
    let request = store.getAll();

    request.onsuccess = function (event) {
        let posts = event.target.result;

        // 게시물을 화면에 표시하는 로직
        posts.forEach(post => {
            let postElement = document.createElement('div');
            postElement.innerHTML = `
                <img src="${post.representativeImage}" alt="Post Image">
                <p>${post.text}</p>
            `;
            document.getElementById('posts-container').appendChild(postElement);
        });
    };

    request.onerror = function (event) {
        console.error("게시물을 가져오는 중 오류 발생:", event.target.errorCode);
    };
}


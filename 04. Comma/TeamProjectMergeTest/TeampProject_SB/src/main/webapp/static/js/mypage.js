/*---------------------------프로필 사진 변경---------------------------*/
// function change_profile() {
//     let input = document.createElement("input");
//
//     input.type = "file";
//     input.accept = "image/*";
//
//     input.click();
//     input.onchange = function (event) {
//         console.log("HEAR")
//         changeFileFromLocal(event.target.files[0]);
//         console.log("HEAR")
//         uploadImage(event.target.files[0]); // 이미지 서버로 업로드
//     };
// }

function changeFileFromLocal(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file, "UTF-8");


    reader.onload = function () {

        let output = document.getElementById("mp_profile");
        output.src = reader.result;
    };
}

function uploadImage(file) {
    let formData = new FormData();
    formData.append("file", file);

    fetch('/mypage/uploadProfileImage', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                console.log('Image uploaded successfully');
                // 이미지 경로를 업데이트
                document.getElementById('mp_profile').src = '/static/savedProfileImg/' + data.fileName;
            } else {
                console.error('Image upload failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function triggerFileInput(event) {
    event.preventDefault(); // 폼 제출 방지
    document.getElementById('fileInput').click(); // 파일 선택 창 열기
}

function uploadProfileImage() {
    var fileInput = document.getElementById('fileInput');
    var formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch('/mypage/uploadProfileImage.do', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.userProfile) {
                console.log('Image uploaded successfully');``
                var newImageUrl = `/static/savedProfileImg/${data.userProfile.profile_img
                }?t=${new Date().getTime()}`;

                document.getElementById('mp_profile').src = newImageUrl;
                console.log('New image URL:', newImageUrl);
            } else {
                console.error('Image upload failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

/*---------------------------유저 info 변경-----------------------*/
const userInfoChangeIcons = document.querySelectorAll("#mp_nickname_change, #mp_region_change");
userInfoChangeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        document.getElementById("mp_userInfo_overlay").style.display = "block";
        document.getElementById("mp_userInfo_popup").style.display = "block";
    });
});

// 유저 info 변경 팝업 닫기
document.getElementById("mp_userInfo_close-popup").addEventListener("click", function () {
    document.getElementById("mp_userInfo_overlay").style.display = "none";
    document.getElementById("mp_userInfo_popup").style.display = "none";
});

// 유저 info 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_userInfo_overlay").addEventListener("click", function () {
    document.getElementById("mp_userInfo_overlay").style.display = "none";
    document.getElementById("mp_userInfo_popup").style.display = "none";
});

/*---------------------------픽한 게시물, 픽한 장소-----------------------*/
/*------------------------------픽한 게시물------------------------------*/
// mp_heart_icon와 mp_pickboard_text 클릭 시 팝업과 오버레이 표시
// 픽한 게시물 팝업 열기
const pickBoardIcons = document.querySelectorAll("#mp_heart_icon, #mp_pickboard_text");
pickBoardIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        document.getElementById("mp_pickboard_overlay").style.display = "block";
        document.getElementById("mp_pickboard_popup").style.display = "block";
    });
});

// 픽한 게시물 팝업 닫기
document.getElementById("mp_pickboard_close-popup").addEventListener("click", function () {
    document.getElementById("mp_pickboard_overlay").style.display = "none";
    document.getElementById("mp_pickboard_popup").style.display = "none";
});

// 픽한 게시물 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_pickboard_overlay").addEventListener("click", function () {
    document.getElementById("mp_pickboard_overlay").style.display = "none";
    document.getElementById("mp_pickboard_popup").style.display = "none";
});

// 전체 선택 체크박스
const selectAllCheckbox_board = document.getElementById("mp_pickboard_select-all");
// 개별 선택 체크박스들
const itemCheckboxes_board = document.querySelectorAll('.mp_popup_gallery .mp_checkbox input[type="checkbox"]');

// 전체 선택 체크박스 클릭 이벤트
selectAllCheckbox_board.addEventListener("change", function () {
    itemCheckboxes_board.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox_board.checked;
    });
});

// 개별 체크박스 클릭 이벤트
itemCheckboxes_board.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        // 개별 체크박스 중 하나라도 체크되지 않았으면 전체 선택 체크 해제
        if (!checkbox.checked) {
            selectAllCheckbox_board.checked = false;
        }
        // 모든 개별 체크박스가 체크되면 전체 선택 체크
        else if (Array.from(itemCheckboxes).every((cb) => cb.checked)) {
            selectAllCheckbox_board.checked = true;
        }
    });
});

/*------------------------------픽한 장소--------------------------------*/
// #mp_pin_icon와 #mp_pickplace_text 클릭 시 팝업과 오버레이 표시
// 픽한 장소 팝업 열기
const pickPlaceIcons = document.querySelectorAll("#mp_pin_icon, #mp_pickplace_text");
pickPlaceIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        document.getElementById("mp_pickplace_overlay").style.display = "block";
        document.getElementById("mp_pickplace_popup").style.display = "block";
    });
});

// 픽한 장소 팝업 닫기
document.getElementById("mp_pickplace_close-popup").addEventListener("click", function () {
    document.getElementById("mp_pickplace_overlay").style.display = "none";
    document.getElementById("mp_pickplace_popup").style.display = "none";
});

// 픽한 장소 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_pickplace_overlay").addEventListener("click", function () {
    document.getElementById("mp_pickplace_overlay").style.display = "none";
    document.getElementById("mp_pickplace_popup").style.display = "none";
});

// 전체 선택 체크박스
const selectAllCheckbox_place = document.getElementById("mp_pickplace_select-all");
// 개별 선택 체크박스들
const itemCheckboxes_place = document.querySelectorAll('.mp_pickplace-item input[type="checkbox"]');

// 전체 선택 체크박스 클릭 이벤트
selectAllCheckbox_place.addEventListener("change", function () {
    itemCheckboxes_place.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox_place.checked;
    });
});

// 개별 체크박스 클릭 이벤트
itemCheckboxes_place.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
        // 개별 체크박스 중 하나라도 체크되지 않았으면 전체 선택 체크 해제
        if (!checkbox.checked) {
            selectAllCheckbox_place.checked = false;
        }
        // 모든 개별 체크박스가 체크되면 전체 선택 체크
        else if (Array.from(itemCheckboxes).every((cb) => cb.checked)) {
            selectAllCheckbox_place.checked = true;
        }
    });
});

/*---------------------------내 여행 등급 확인----------------------------*/

const gradeIcons = document.querySelectorAll("#mp_baggage_icon, #mp_grade_text");
gradeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        document.getElementById("mp_grade_overlay").style.display = "block";
        document.getElementById("mp_grade_popup").style.display = "block";
    });
});

// 픽한 게시물 팝업 닫기
document.getElementById("mp_grade_close-popup").addEventListener("click", function () {
    document.getElementById("mp_grade_overlay").style.display = "none";
    document.getElementById("mp_grade_popup").style.display = "none";
});

// 픽한 게시물 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_grade_overlay").addEventListener("click", function () {
    document.getElementById("mp_grade_overlay").style.display = "none";
    document.getElementById("mp_grade_popup").style.display = "none";
});

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
    messageElement.style.fontSize = "initial";
});

applyMessageBtn.addEventListener("click", function () {
    const message = document.getElementById("message-input").value;

    if (message) {
        const messageElement = messageBox.querySelector(".message");

        // 메시지 업데이트 및 줄바꿈 처리
        messageElement.innerHTML = message.replace(/\n/g, "<br>");

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
    let fontSize = window.getComputedStyle(element).fontSize.replace("px", "");
    fontSize = parseFloat(fontSize);

    while (element.scrollHeight > parent.clientHeight || element.scrollWidth > parent.clientWidth) {
        fontSize -= 1;
        element.style.fontSize = fontSize + "px";
        if (fontSize < 10) break; // 최소 폰트 크기 제한
    }
}

/*-------------------------------게시물추가----------------------------*/
const newBoardIcons = document.querySelectorAll("#mp_add-post-button");
newBoardIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
        document.getElementById("mp_new_board_overlay").style.display = "block";
        document.getElementById("mp_new_board_popup").style.display = "block";
    });
});

// 게시물 추가 팝업 닫기
document.getElementById("mp_new_board_close-popup").addEventListener("click", function () {
    console.log(1);
    document.getElementById("mp_new_board_overlay").style.display = "none";
    console.log(2);
    document.getElementById("mp_new_board_popup").style.display = "none";
    console.log(3);
});

// 게시물 추가 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_new_board_overlay").addEventListener("click", function () {
    console.log(1);
    document.getElementById("mp_new_board_overlay").style.display = "none";
    console.log(2);
    document.getElementById("mp_new_board_popup").style.display = "none";
    console.log(3);
});

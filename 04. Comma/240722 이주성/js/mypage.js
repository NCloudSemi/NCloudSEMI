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

// 전체 선택 체크박스
const selectAllCheckbox = document.querySelector('#mp_popup_content_checkbox input[type="checkbox"]');
// 개별 선택 체크박스들
const itemCheckboxes = document.querySelectorAll('.mp_popup_gallery .mp_checkbox input[type="checkbox"]');

// 전체 선택 체크박스 클릭 이벤트
selectAllCheckbox.addEventListener('change', function() {
    itemCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

// 개별 체크박스 클릭 이벤트
itemCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // 개별 체크박스 중 하나라도 체크되지 않았으면 전체 선택 체크 해제
        if (!checkbox.checked) {
            selectAllCheckbox.checked = false;
        }
        // 모든 개별 체크박스가 체크되면 전체 선택 체크
        else if (Array.from(itemCheckboxes).every(cb => cb.checked)) {
            selectAllCheckbox.checked = true;
        }
    });
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




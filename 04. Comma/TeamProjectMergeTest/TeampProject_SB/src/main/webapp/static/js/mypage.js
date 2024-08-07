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

let addressChk = false;

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

// 주소 체크
$(window).on("load", function(){
    $("#mp_change_address").click(function (){

        new daum.Postcode({
            oncomplete: function (data) {

                jQuery("#mp_address").val(data.address);
                addressChk = true;
                console.log(addressChk);

                jQuery("#mp_detailed-address").focus();
            }
        }).open();
    })
})

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

const mp_pickboard_tag1 = document.getElementById('mp_heart_icon');
const mp_pickboard_tag2 = document.getElementById('mp_pickboard_text');

mp_pickboard_tag2.addEventListener('mouseover', function() {
    mp_pickboard_tag1.style.transform = 'scale(1.3)';
    mp_pickboard_tag1.style.transition = 'transform 0.3s ease';
});

mp_pickboard_tag2.addEventListener('mouseout', function() {
    mp_pickboard_tag1.style.transform = '';
    mp_pickboard_tag1.style.transition = '';
});

mp_pickboard_tag1.addEventListener('mouseover', function() {
    mp_pickboard_tag2.style.fontSize = '1.3em';
    mp_pickboard_tag2.style.fontWeight = 'bolder';
    mp_pickboard_tag2.style.color = '#ff6b00';
    mp_pickboard_tag2.style.borderColor = '#ff6b00';
});

mp_pickboard_tag1.addEventListener('mouseout', function() {
    mp_pickboard_tag2.style.fontSize = '';
    mp_pickboard_tag2.style.fontWeight = '';
    mp_pickboard_tag2.style.color = '';
    mp_pickboard_tag2.style.borderColor = '';
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

const mp_pickplace_tag1 = document.getElementById('mp_pin_icon');
const mp_pickplace_tag2 = document.getElementById('mp_pickplace_text');

mp_pickplace_tag2.addEventListener('mouseover', function() {
    mp_pickplace_tag1.style.transform = 'scale(1.3)';
    mp_pickplace_tag1.style.transition = 'transform 0.3s ease';
});

mp_pickplace_tag2.addEventListener('mouseout', function() {
    mp_pickplace_tag1.style.transform = '';
    mp_pickplace_tag1.style.transition = '';
});

mp_pickplace_tag1.addEventListener('mouseover', function() {
    mp_pickplace_tag2.style.fontSize = '1.3em';
    mp_pickplace_tag2.style.fontWeight = 'bolder';
    mp_pickplace_tag2.style.color = '#ff6b00';
    mp_pickplace_tag2.style.borderColor = '#ff6b00';
});

mp_pickplace_tag1.addEventListener('mouseout', function() {
    mp_pickplace_tag2.style.fontSize = '';
    mp_pickplace_tag2.style.fontWeight = '';
    mp_pickplace_tag2.style.color = '';
    mp_pickplace_tag2.style.borderColor = '';
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

document.querySelector('textarea').addEventListener('input', function() {
    this.value = this.value.trim();
});

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

        // 서버에 메시지 저장
        // saveMessageToServer(message);

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

/*-------------------------------mp_right_header_tags----------------------------*/
const mp_tag1 = document.getElementById('mp_travel_recode_tag');
const mp_tag2 = document.getElementById('mp_travel_recode_num_tag');
const mp_tag3 = document.getElementById('mp_travel_plan_tag');
const mp_tag4 = document.getElementById('mp_travel_plan_num_tag');
const mp_tag5 = document.getElementById('mp_reservation_tag');
const mp_tag6 = document.getElementById('mp_reservation_num_tag');

mp_tag2.addEventListener('mouseover', function() {
    mp_tag1.style.fontSize = '1.3em';
    mp_tag1.style.fontWeight = 'bolder';
    mp_tag1.style.color = '#ff6b00';
});

mp_tag2.addEventListener('mouseout', function() {
    mp_tag1.style.fontSize = '';
    mp_tag1.style.fontWeight = '';
    mp_tag1.style.color = '';
});

mp_tag4.addEventListener('mouseover', function() {
    mp_tag3.style.fontSize = '1.3em';
    mp_tag3.style.fontWeight = 'bolder';
    mp_tag3.style.color = '#ff6b00';
});

mp_tag4.addEventListener('mouseout', function() {
    mp_tag3.style.fontSize = '';
    mp_tag3.style.fontWeight = '';
    mp_tag3.style.color = '';
});

mp_tag6.addEventListener('mouseover', function() {
    mp_tag5.style.fontSize = '1.3em';
    mp_tag5.style.fontWeight = 'bolder';
    mp_tag5.style.color = '#ff6b00';
});

mp_tag6.addEventListener('mouseout', function() {
    mp_tag5.style.fontSize = '';
    mp_tag5.style.fontWeight = '';
    mp_tag5.style.color = '';
});

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
    document.getElementById("mp_new_board_overlay").style.display = "none";
    document.getElementById("mp_new_board_popup").style.display = "none";
});

// 게시물 추가 오버레이 클릭 시 팝업 닫기
document.getElementById("mp_new_board_overlay").addEventListener("click", function () {
    document.getElementById("mp_new_board_overlay").style.display = "none";
    document.getElementById("mp_new_board_popup").style.display = "none";
});

/*-----------------------오른쪽 상단 텍스트 innerHtml-----------------------*/

function saveContentToLocalStorage(content) {
    localStorage.setItem('savedContent', content);
}

document.addEventListener('DOMContentLoaded', () => {
    // 각 섹션에 대한 HTML 콘텐츠 정의
    const travelRecordsHTML = `
        <div id="mp_add-post-button">
            <img src="/static/image/new_board_icon.svg" alt="게시물추가" />
        </div>
        <!-- Overlay -->
        <div id="mp_new_board_overlay" class="mp_hidden"></div>
        <!-- Popup -->
        <div id="mp_new_board_popup" class="mp_hidden">
            <div class="mp_pick_popup-header">
                <div class="mp_pick_popup-header-title">
                    <h5>게시물 등록</h5>
                </div>
                <button id="mp_new_board_upload_popup">
                    <img src="/static/image/업로드_icon.svg" alt="업로드_icon" />
                </button>
                <button id="mp_new_board_close-popup">
                    <img src="/static/image/닫기_icon.svg" alt="닫기버튼" />
                </button>
            </div>
            <div class="mp_popup_content">
                <div class="mp_new_board_box">
                    <form action="">
                        <div class="mp_new_board_image_box">
                            <img src="/static/image/+_icon.svg" alt="+ 아이콘" />
                            <p><strong>이미지 등록</strong></p>
                        </div>
                        <div class="mp_new_board_text_box">
                            <textarea
                                rows="10"
                                maxlength="1000"
                                placeholder="게시물의 내용을 입력하세요."
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div id="mp_grid-container">
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진1.jpg" alt="이미지 1" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진2.jpg" alt="이미지 2" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진3.jpg" alt="이미지 3" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진4.jpg" alt="이미지 4" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진5.jpg" alt="이미지 5" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진6.jpg" alt="이미지 6" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진7.jpg" alt="이미지 7" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진8.jpg" alt="이미지 8" /></div>
            <div class="mp_grid-item"><img src="/static/image/mp_gridbox 사진9.jpg" alt="이미지 9" /></div>
        </div>
    `;

    const travelPlansHTML = `
        <div id="mp_add-post-button"></div>
        <div class="mp_travel_plan_box">
            <div class="mp_tr_checkbox-container">
                <div id="mp_travel_plan_select_all">
                    <label>
                        <input type="checkbox" id="mp_travelplan_select-all" onclick=""/>
                    </label>
                    <p>전체선택</p>
                </div>
                <div>
                    <img id="mp_travelPlan_delete" src="/static/image/delete_icon.svg" alt="삭제버튼" />
                </div>
            </div>
            <div id="mp_content_flexbox_right">
                <div class="mp_travel_plan_icons">
                    <input type="checkbox" class="mp_travel_plan_checkbox" />
                    <div class="mp_travel_plan_icon">
                        <div class="mp_travel_plan_info">
                            <div>
                                <h4>제주</h4>
                                <p><strong>8.11-8.12</strong></p>
                            </div>
                            <div>
                                <p>2024.07.29 15:32 저장</p>
                            </div>
                        </div>
                        <div>
                            <img src="/static/image/제주사진.jpg" alt="제주사진">
                        </div>
                    </div>
                </div>
                <div class="mp_travel_plan_icons">
                    <input type="checkbox" class="mp_travel_plan_checkbox" />
                    <div class="mp_travel_plan_icon">
                        <div class="mp_travel_plan_info">
                            <div>
                                <h4>양양</h4>
                                <p><strong>8.24-8.25</strong></p>
                            </div>
                            <div>
                                <p>2024.07.29 15:32 저장</p>
                            </div>
                        </div>
                        <div>
                            <img src="/static/image/양양사진.jpg" alt="양양사진"> 
                        </div>
                    </div>
                </div>
                <div class="mp_travel_plan_icons">
                    <input type="checkbox" class="mp_travel_plan_checkbox" />
                    <div class="mp_travel_plan_icon">
                        <div class="mp_travel_plan_info">
                            <div>
                                <h4>강릉</h4>
                                <p><strong>10.05-10.06</strong></p>
                            </div>
                            <div>
                                <p>2024.07.29 15:32 저장</p>
                            </div>
                        </div>
                        <div>
                            <img src="/static/image/강릉사진.jpg" alt="강릉사진">
                        </div>
                    </div>
                </div>
                <div class="mp_travel_plan_icons">
                    <input type="checkbox" class="mp_travel_plan_checkbox" />
                    <div class="mp_travel_plan_icon">
                        <div class="mp_travel_plan_info">
                            <div>
                                <h4>부산</h4>
                                <p><strong>12.21-12.22</strong></p>
                            </div>
                            <div>
                                <p>2024.07.29 15:32 저장</p>
                            </div>
                        </div>
                        <div>
                            <img src="/static/image/부산사진.jpg" alt="부산사진">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const reservationDetailsHTML = `
        <div id="mp_add-post-button"></div>
        <div class="mp_reservation_info">
            <div class="mp_reservation_info_header">
                <h4><strong>예약정보</strong></h4>
                <div id="mp_reservation_line"></div>   
            </div>
            <div class="mp_reservation_info_box">
                <div class="mp_reservation_direction_btn">
                    <button><img src="/static/image/왼쪽 방향_icon.svg" alt="왼쪽방향"></button>
                </div>
                <div class="mp_reservation_info_titles">
                    <p>예약번호</p>
                    <p>예약날짜</p>
                    <p>상품명</p>
                    <p>인원</p>
                    <p>결제금액</p>
                    <p>결제상황</p>
                    <p>예약현황</p>
                </div>
                <div class="mp_reservation_info_contents">
                    <p>202408021458390001</p>
                    <p>2024.08.24 - 2024.08.25</p>
                    <p>신라스테이 서초(1박)</p>
                    <p>성인 2명</p>
                    <p>230,000원</p>
                    <p>결제 완료</p>
                    <p id="mp_reservation_status">예약확정</p>
                </div>
                <div class="mp_reservation_img">
                    <img id="mp_reservation_info_img" src="/static/image/신라스테이_서초_img.png" alt="신라스테이_서초">
                    <div class="mp_reservation_info_class">
                        <div class="mp_reservation_img_info">
                            <img
                                id="mp_reservation_star"
                                src="/static/image/별점(4점).svg"
                                alt="별점4점"
                            />
                            <div class="mp_reservation_star_core">
                                <p><strong>4.0 / 5.0</strong></p>
                            </div>
                        </div>
                        <div class="mp_reservation_img_info">
                            <p id="mp_reservation_class"><strong>3성급 호텔</strong></p>
                            <img
                                id="certification_mark"
                                src="/static/image/인증마크_icon.svg"
                                alt="인증마크"
                            />
                        </div>
                        <div class="mp_reservation_address_info_box">
                            <div class="mp_reservation_address_info">
                                <p id="mp_reservation_find_address_title" class="mp_reservation_address"><strong>찾아 가시는 길</strong></p>
                                <p class="mp_reservation_address"><strong>주소</strong></p>
                            </div>
                            <div class="mp_reservation_address_info">
                                <p id="mp_reservation_find_address">강남역, 양재역 도보 10분</p>
                                <p>서울특별시 서초구 효령로 427</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mp_reservation_direction_btn">
                    <button><img src="/static/image/오른쪽 방향_icon.svg" alt="오른쪽방향"></button>
                </div>
            </div>
            <div class="mp_reservation_cancel_btn_box">
                <button id="mp_reservation_cancel_btn" type="submit">예약 취소</button>
            </div>
        </div>
    `;

    // 변경될 콘텐츠를 표시할 요소
    const changeContentDiv = document.getElementById('mp_change_contents');

    // 이벤트 리스너 등록 함수
    function addClickListener(className, content, initFunction = null) {
        document.querySelectorAll(`.${className}`).forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault(); // 기본 동작 방지 (페이지 이동 방지)
                changeContentDiv.innerHTML = content;
                saveContentToLocalStorage(content); // 내용 저장
                if (initFunction) {
                    initFunction();
                }
            });
        });
    }

    // 초기화 함수들
    function initTravelRecords() {
        // 여기서 travelRecordsHTML에 필요한 모든 JavaScript 코드를 초기화합니다.
        console.log('travelRecordsHTML initialized');

        /*-------------------------------게시물추가----------------------------*/
        // 게시물 추가 버튼 클릭 시 팝업 표시
        document.getElementById("mp_add-post-button").addEventListener("click", function () {
            document.getElementById("mp_new_board_overlay").style.display = "block";
            document.getElementById("mp_new_board_popup").style.display = "block";
        });

        // 게시물 추가 팝업 닫기
        document.getElementById("mp_new_board_close-popup").addEventListener("click", function () {
            document.getElementById("mp_new_board_overlay").style.display = "none";
            document.getElementById("mp_new_board_popup").style.display = "none";
        });

        // 게시물 추가 오버레이 클릭 시 팝업 닫기
        document.getElementById("mp_new_board_overlay").addEventListener("click", function () {
            document.getElementById("mp_new_board_overlay").style.display = "none";
            document.getElementById("mp_new_board_popup").style.display = "none";
        });
    }

    function initTravelPlans() {
        // 여기서 travelPlansHTML에 필요한 모든 JavaScript 코드를 초기화합니다.
        console.log('travelPlansHTML initialized');

        /*-------------------------------여행계획 체크박스----------------------------*/

        // 전체 선택 체크박스
        const selectAllCheckbox_travelPlan = document.getElementById("mp_travelplan_select-all");
        // 개별 선택 체크박스들
        let itemCheckboxes_travelPlan = document.querySelectorAll('.mp_travel_plan_checkbox');
        // 삭제 아이콘
        const deleteIcon = document.getElementById("mp_travelPlan_delete");

        // 전체 선택 체크박스 클릭 이벤트
        selectAllCheckbox_travelPlan.addEventListener("click", function () {
            const isChecked = selectAllCheckbox_travelPlan.checked;
            itemCheckboxes_travelPlan.forEach((checkbox) => {
                checkbox.checked = isChecked;
            });
        });

        // 개별 체크박스 상태 업데이트 함수
        function updateSelectAllCheckbox() {
            const allChecked = Array.from(itemCheckboxes_travelPlan).every((checkbox) => checkbox.checked);
            selectAllCheckbox_travelPlan.checked = allChecked;
        }

        // 개별 체크박스 클릭 이벤트
        itemCheckboxes_travelPlan.forEach((checkbox) => {
            checkbox.addEventListener("change", updateSelectAllCheckbox);
        });

        // 삭제 아이콘 클릭 이벤트
        deleteIcon.addEventListener("click", function(event) {
            // 이벤트 전파를 막아 다른 이벤트 리스너가 실행되지 않도록 함
            // event.stopPropagation();

            // 체크된 항목 삭제
            itemCheckboxes_travelPlan.forEach((checkbox) => {
                if (checkbox.checked) {
                    const item = checkbox.parentElement; // 부모 요소를 선택합니다.
                    if (item) {
                        item.remove(); // 부모 요소를 DOM에서 제거합니다.
                    }
                }
            });

            // 체크박스 갱신: 삭제 후 남아 있는 체크박스를 다시 가져옴
            // itemCheckboxes_travelPlan = document.querySelectorAll('.mp_travel_plan_checkbox');

            // 전체 선택 체크박스 상태 갱신
            // updateSelectAllCheckbox();
        });
    }

    function initReservationDetails() {
        // 여기서 reservationDetailsHTML에 필요한 모든 JavaScript 코드를 초기화합니다.
        console.log('reservationDetailsHTML initialized');

    }

    // 로컬 저장소에서 저장된 콘텐츠 불러오기
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        changeContentDiv.innerHTML = savedContent;
    }

    // 각 버튼에 클릭 이벤트 리스너 추가
    // addClickListener('mp_travelRecode_btn', travelRecordsHTML, initTravelRecords);
    console.log(1);
    addClickListener('mp_travelPlan_btn', travelPlansHTML, initTravelPlans);
    console.log(2);
    addClickListener('mp_reservation_btn', reservationDetailsHTML, initReservationDetails);
    console.log(3);
});

$(document).on('click', '.mp_grid-item', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#view-modal').show();
});

$(document).on('click', '.edit', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#write-modal').show();
});


$(document).on('click', '.mp_travel_plan_icons, .plan-button, .plan-button2', function(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#plan-modal').show();
});
/*---------------------------프로필 사진 변경---------------------------*/
function change_profile() {
    let input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";

    input.click();
    input.onchange = function (event) {
        changeFileFromLocal(event.target.files[0]);
    };
}

function changeFileFromLocal(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file, "UTF-8");

    reader.onload = function () {
        let output = document.getElementById("mp_profile");
        output.src = reader.result;
    };
}

/*---------------------------픽한 게시물, 픽한 장소-----------------------*/
/*------------------------------픽한 게시물------------------------------*/
//픽한 게시물 팝업 열기
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

/*-----------------------오른쪽 상단 텍스트 innerHtml-----------------------*/

document.addEventListener('DOMContentLoaded', () => {
    // 각 섹션에 대한 HTML 콘텐츠 정의
    const travelRecordsHTML = `
        <div id="mp_add-post-button">
            <img src="../img/new_board_icon.svg" alt="게시물추가" />
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
                    <img src="../img/업로드_icon.svg" alt="업로드_icon" />
                </button>
                <button id="mp_new_board_close-popup">
                    <img src="../img/닫기_icon.svg" alt="닫기버튼" />
                </button>
            </div>
            <div class="mp_popup_content">
                <div class="mp_new_board_box">
                    <form action="">
                        <div class="mp_new_board_image_box">
                            <img src="../img/+_icon.svg" alt="+ 아이콘" />
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
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진1.jpg" alt="이미지 1" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진2.jpg" alt="이미지 2" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진3.jpg" alt="이미지 3" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진4.jpg" alt="이미지 4" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진5.jpg" alt="이미지 5" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진6.jpg" alt="이미지 6" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진7.jpg" alt="이미지 7" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진8.jpg" alt="이미지 8" /></div>
            <div class="mp_grid-item"><img src="../img/mp_gridbox 사진9.jpg" alt="이미지 9" /></div>
        </div>
    `;

    const travelPlansHTML = `
        <div id="mp_add-post-button"></div>
        <div class="mp_travel_plan_box">
            <div class="mp_tr_checkbox-container">
                <div class="mp_popup_content_checkbox">
                    <div id="mp_travel_plan_select_all">
                    <label>
                        <input type="checkbox" id="mp_travelplan_select-all" />
                    </label>
                        <p>전체선택</p>
                    </div>
                    <div>
                        <img id="mp_travelPlan_delete" src="../img/delete_icon.svg" alt="삭제버튼" />
                    </div>
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
                            <img src="../img/제주사진.jpg" alt="제주사진">
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
                            <img src="../img/양양사진.jpg" alt="양양사진"> 
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
                            <img src="../img/강릉사진.jpg" alt="강릉사진">
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
                            <img src="../img/부산사진.jpg" alt="부산사진">
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
                    <button><img src="../img/왼쪽 방향_icon.svg" alt="왼쪽방향"></button>
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
                    <img id="mp_reservation_info_img" src="../img/신라스테이_서초_img.png" alt="신라스테이_서초">
                    <div class="mp_reservation_info">
                        <div class="mp_reservation_img_info">
                            <img
                                id="mp_reservation_star"
                                src="../img/별점(4점).svg"
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
                                src="../img/인증마크_icon.svg"
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
                    <button><img src="../img/오른쪽 방향_icon.svg" alt="오른쪽방향"></button>
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
        selectAllCheckbox_travelPlan.addEventListener("change", function () {
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
            event.stopPropagation();

            // 체크된 항목 삭제
            itemCheckboxes_travelPlan.forEach((checkbox) => {
                if (checkbox.checked) {
                    const item = checkbox.closest(".mp_travel_plan_icons"); // 부모 요소를 선택합니다.
                    if (item) {
                        item.remove(); // 부모 요소를 DOM에서 제거합니다.
                    }
                }
            });

            // 체크박스 갱신: 삭제 후 남아 있는 체크박스를 다시 가져옴
            itemCheckboxes_travelPlan = document.querySelectorAll('.mp_travel_plan_checkbox');

            // 전체 선택 체크박스 상태 갱신
            updateSelectAllCheckbox();
        });
    }

    function initReservationDetails() {
        // 여기서 reservationDetailsHTML에 필요한 모든 JavaScript 코드를 초기화합니다.
        console.log('reservationDetailsHTML initialized');

    }

    // 각 버튼에 클릭 이벤트 리스너 추가
    addClickListener('mp_travelRecode_btn', travelRecordsHTML, initTravelRecords);
    addClickListener('mp_travelPlan_btn', travelPlansHTML, initTravelPlans);
    addClickListener('mp_reservation_btn', reservationDetailsHTML, initReservationDetails);
});
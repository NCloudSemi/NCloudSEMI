<%@page contentType="text/html;charset=UTF-8" language="java"%>
<%@taglib prefix="c" uri="jakarta.tags.core" %>
<html lang="ko">
<head>
    <title>COMMA_mypage</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/mypage.css">
    <!-- ICO 파비콘 -->
    <link rel="icon" href="${pageContext.request.contextPath}/static/image/favicon.ico" type="image/x-icon">
</head>
<body>
    <div class="wrap">
        <jsp:include page="/sidebar.jsp"></jsp:include>
        <input type="hidden" name="user_id" value="${loginMember.user_id}">
        <div class="content">
            <div id="mp_content_flexbox">
                <div id="mp_content_flexbox_left">
                    <div id="mp_profile_box">
                        <form id="profileForm" action="/mypage/uploadProfileImage.do" method="post" enctype="multipart/form-data">
                            <input type="file" name="file" id="fileInput" style="display:none" onchange="uploadProfileImage()">
                            <button id="mp_profile_change_btn" type="submit">
                                <c:choose>
                                    <c:when test="${not empty loginMember.profile_img}">
                                        <img
                                                id="mp_profile"
                                                src="${pageContext.request.contextPath}/static/savedProfileImg/${loginMember.profile_img}"
                                                alt="프로필사진"
                                                onclick="triggerFileInput(event)"
                                        />
                                    </c:when>
                                    <c:otherwise>
                                        <img
                                                id="mp_profile"
                                                src="${pageContext.request.contextPath}/static/image/프로필%20기본이미지.jpg"
                                                alt="기본 프로필 사진"
                                                onclick="triggerFileInput(event)"
                                        />
                                    </c:otherwise>
                                </c:choose>
                            </button>
                        </form>
                    </div>
                    <div class="mp_user_info_box">
                        <h5 id="mp_nickname_change"><strong>${loginMember.nickname}</strong></h5>
                        <p id="mp_region_change">${loginMember.address}, Korea</p>
                        <!-- Overlay -->
                        <div id="mp_userInfo_overlay"></div>
                        <!-- Popup -->
                        <div id="mp_userInfo_popup">
                            <form action="/mypage/changeUserInfo.do" name="">
                                <div class="mp_pick_popup-header">
                                    <div class="mp_pick_popup-header-title">
                                        <h5>유저정보 변경</h5>
                                    </div>
                                    <button id="mp_userinfo_change_btn" type="submit"><img src="${pageContext.request.contextPath}/static/image/업로드_icon.svg" alt="업로드"/></button>
                                    <button id="mp_userInfo_close-popup"><img src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기버튼" /></button>
                                </div>
                                <div class="mp_popup_content">
                                    <div class="mp_user_info_popup_box">
                                        <div class="mp_user_info_change_box">
                                            <p>닉네임변경</p>
                                            <p>지역변경</p>
                                        </div>
                                        <div class="mp_user_info_change_box">
                                            <input type="hidden" name="user_id" value="${loginMember.user_id}">
                                            <input class="mp_btn" type="text" name="nickname" placeholder="${loginMember.nickname}" value="${loginMember.nickname}" required/>
                                            <select class="mp_btn" name="address" id="address-list">
                                                <option value="Seoul">서울</option>
                                                <option value="Gyeonggi">경기</option>
                                                <option value="Incheon">인천</option>
                                                <option value="Gangwon">강원</option>
                                                <option value="Daegu">대구</option>
                                                <option value="Daejeon">대전</option>
                                                <option value="Gwangju">광주</option>
                                                <option value="Ulsan">울산</option>
                                                <option value="Chungnam">충남</option>
                                                <option value="Chungbuk">충북</option>
                                                <option value="Gyeongnam">경남</option>
                                                <option value="Gyeongbuk">경북</option>
                                                <option value="Jeonnam">전남</option>
                                                <option value="Jeonbuk">전북</option>
                                                <option value="Jeju">제주</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="mp_my_travel_grade_box">
                        <a href=""><p id="mp_grade_text">내 여행 등급</p></a>
<%--                        <c:choose>--%>
<%--                            <c:when>--%>
                                <img
                                    id="mp_baggage_icon"
                                    src="${pageContext.request.contextPath}/static/image/내 여행 등급 baggage_icon.svg"
                                    alt="내여행등급(1단계)"
                                />
<%--                            </c:when>--%>
<%--                            <c:otherwise>--%>
<%--                                --%>
<%--                            </c:otherwise>--%>
<%--                        </c:choose>--%>
                        <!-- Overlay -->
                        <div id="mp_grade_overlay"></div>
                        <!-- Popup -->
                        <div id="mp_grade_popup">
                            <div class="mp_pick_popup-header">
                                <div class="mp_pick_popup-header-title"></div>
                                <button id="mp_grade_close-popup">
                                    <img src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기버튼" />
                                </button>
                            </div>
                            <div class="mp_popup_content">
                                <div class="mp_grade_info_box">
                                    <div class="mp_grade_my_info">
                                        <h4><strong>내 여행 등급</strong></h4>
                                        <img src="${pageContext.request.contextPath}/static/image/보스턴백_icon.svg" alt="보스턴백img" />
                                        <p>보스턴백</p>
                                    </div>
                                    <div class="mp_grade_text_info">
                                        <h6><strong>다음 단계까지 ____남았습니다.</strong></h6>
                                        <p>여행 계획 채택 수에 따라서 등급이 나누어집니다.</p>
                                        <p>보스턴백 : 채택수 0 ~ 500사이</p>
                                        <p>트렁크백 : 채택수 500 ~ 2000사이</p>
                                        <p>캐리어 : 채택수 2000 ~ 10000사이</p>
                                        <p>비행기 : 채택수 10000이상</p>
                                    </div>
                                </div>
                                <div class="mp_arrow">
                                    <img src="${pageContext.request.contextPath}/static/image/화살표_icon.svg" alt="화살표img" />
                                </div>
                                <div class="mp_grade_marks">
                                    <div>
                                        <img src="${pageContext.request.contextPath}/static/image/비행기_icon.svg" alt="비행기" />
                                        <p>비행기</p>
                                    </div>
                                    <div>
                                        <img src="${pageContext.request.contextPath}/static/image/캐리어_icon.svg" alt="캐리어" />
                                        <p>캐리어</p>
                                    </div>
                                    <div>
                                        <img src="${pageContext.request.contextPath}/static/image/트렁크백_icon.svg" alt="트렁크백" />
                                        <p>트렁크백</p>
                                    </div>
                                    <div>
                                        <img src="${pageContext.request.contextPath}/static/image/보스턴백_icon.svg" alt="보스턴백" />
                                        <p>보스턴백</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="pick_box">
                        <ul id="pick_box_ul">
                            <li>
                                <img id="mp_heart_icon" src="${pageContext.request.contextPath}/static/image/픽한 게시물 heart_icon.svg" alt="픽한게시물" />
                                <a id="mp_pickboard_text" href="javascript:void(0)">픽한 게시물</a>
                                <!-- Overlay -->
                                <div id="mp_pickboard_overlay"></div>

                                <!-- Popup -->
                                <div id="mp_pickboard_popup">
                                    <div class="mp_pick_popup-header">
                                        <div class="mp_pick_popup-header-title">
                                            <img src="${pageContext.request.contextPath}/static/image/픽한 게시물 heart_icon.svg" alt="" />
                                            <h5>픽한 게시물</h5>
                                        </div>
                                        <button id="mp_pickboard_close-popup">
                                            <img src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기버튼" />
                                        </button>
                                    </div>
                                    <div class="mp_popup_content">
                                        <div class="checkbox-container">
                                            <label>
                                                <div>
                                                    <input type="checkbox" id="mp_pickboard_select-all" />
                                                    <span>전체선택</span>
                                                </div>
                                                <div>
                                                    <img src="${pageContext.request.contextPath}/static/image/delete_icon.svg" alt="삭제버튼" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="mp_popup_gallery">
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물1.jpg" alt="Image 1" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물2.jpg" alt="Image 2" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물3.jpg" alt="Image 3" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물4.jpg" alt="Image 4" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물5.jpg" alt="Image 5" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물6.jpg" alt="Image 6" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물7.jpg" alt="Image 7" />
                                            </div>
                                            <div class="mp_checkbox">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/픽한 게시물8.jpg" alt="Image 8" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img id="mp_pin_icon" src="${pageContext.request.contextPath}/static/image/픽한 장소 pin_icon.svg" alt="픽한장소" />
                                <a id="mp_pickplace_text" href="javascript:void(0)">픽한 장소</a>
                                <!-- Overlay -->
                                <div id="mp_pickplace_overlay"></div>
                                <!-- Popup -->
                                <div id="mp_pickplace_popup">
                                    <div class="mp_pick_popup-header">
                                        <div class="mp_pick_popup-header-title">
                                            <img src="${pageContext.request.contextPath}/static/image/픽한 장소 pin_icon.svg" alt="" />
                                            <h5>픽한 장소</h5>
                                        </div>
                                        <button id="mp_pickplace_close-popup">
                                            <img src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기버튼" />
                                        </button>
                                    </div>
                                    <div class="mp_popup_content">
                                        <div class="checkbox-container">
                                            <label class="mp_popup_content_checkbox">
                                                <div>
                                                    <input type="checkbox" id="mp_pickplace_select-all" />
                                                    <span>전체선택</span>
                                                </div>
                                                <div>
                                                    <img src="${pageContext.request.contextPath}/static/image/delete_icon.svg" alt="삭제버튼" />
                                                </div>
                                            </label>
                                        </div>
                                        <div class="mp_pickplace-list">
                                            <div class="mp_pickplace-item">
                                                <input type="checkbox" class="item-checkbox" />
                                                <img src="${pageContext.request.contextPath}/static/image/신라스테이_서초_img.png" alt="신라스테이_서초" />
                                                <div class="mp_pickplace_details">
                                                    <h3>신라스테이 서초</h3>
                                                    <div class="mp_pickplace_rating">
                                                        <img
                                                            id="star_score_4"
                                                            src="${pageContext.request.contextPath}/static/image/별점(4점).svg"
                                                            alt="별점4점"
                                                        />
                                                    </div>
                                                    <div class="mp_pickplace_grade">
                                                        <strong>3성급 호텔</strong>
                                                        <img
                                                            id="certification_mark"
                                                            src="${pageContext.request.contextPath}/static/image/인증마크_icon.svg"
                                                            alt="인증마크"
                                                        />
                                                    </div>
                                                    <div class="mp_pickplace_price">
                                                        <span><strong>금액 : </strong>200,000 ~ 300,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <form action="/mypage/changeUserStatusMessage.do" name="">
                        <div id="mp_messagebox">
                            <span class="message">${loginMember.message}</span>
                        </div>
                        <!-- Overlay -->
                        <div id="mp_status_overlay"></div>
                        <!-- Popup -->
                        <div id="mp_status_popup">
                            <div>
                                <div id="close-mp_status_popup_btn">
                                    <img id="close-mp_status_popup" src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기" />
                                </div>
                                <input type="hidden" name="user_id" value="${loginMember.user_id}">
                                <textarea
                                        id="message-input"
                                        rows="15"
                                        maxlength="300"
                                        type="text" name="message"
                                        placeholder="${loginMember.message}"
                                        required>
                                    ${loginMember.message}
                                </textarea>
                            </div>
                            <button type="submit"><img id="apply-message" src="${pageContext.request.contextPath}/static/image/업로드_icon.svg" alt="업로드" /></button>
                        </div>
                    </form>
                </div>
                <div id="mp_content_flexbox_right">
                    <div id="mp_header_text">
                        <div>
                            <a class="mp_travelRecode_btn" href="">여행기록</a><br />
                            <a class="mp_travelRecode_btn" href="">11</a>
                        </div>
                        <div>
                            <a class="mp_travelPlan_btn" href="">여행계획</a><br />
                            <a class="mp_travelPlan_btn" href="">3</a>
                        </div>
                        <div>
                            <a class="mp_reservation_btn" href="">예약내역</a><br />
                            <a class="mp_reservation_btn" href="">1</a>
                        </div>
                    </div>
                    <div>
                        <div id="mp_change_contents">

                            <div id="mp_add-post-button">
                                <img src="${pageContext.request.contextPath}/static/image/new_board_icon.svg" alt="게시물추가" />
                            </div>
                            <!-- Overlay -->
                            <div id="mp_new_board_overlay" class="mp_hidden"></div>
                            <!-- Popup -->
                            <div id="mp_new_board_popup" class="mp_hidden">
                                <div class="mp_pick_popup-header">
                                    <div class="mp_pick_popup-header-title">
                                        <h3>게시물 등록</h3>
                                    </div>
                                    <button id="mp_new_board_upload_popup">
                                        <img src="${pageContext.request.contextPath}/static/image/업로드_icon.svg" alt="업로드_icon" />
                                    </button>
                                    <button id="mp_new_board_close-popup">
                                        <img src="${pageContext.request.contextPath}/static/image/닫기_icon.svg" alt="닫기버튼" />
                                    </button>
                                </div>
                                <div class="mp_popup_content">
                                    <div class="mp_new_board_box">
                                        <form action="">
                                            <div class="mp_new_board_image_box">
                                                <img src="${pageContext.request.contextPath}/static/image/+_icon.svg" alt="+아이콘" />
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
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진1.jpg" alt="이미지 1" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진2.jpg" alt="이미지 2" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진3.jpg" alt="이미지 3" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진4.jpg" alt="이미지 4" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진5.jpg" alt="이미지 5" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진6.jpg" alt="이미지 6" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진7.jpg" alt="이미지 7" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진8.jpg" alt="이미지 8" /></div>
                                <div class="mp_grid-item"><img src="${pageContext.request.contextPath}/static/image/mp_gridbox 사진9.jpg" alt="이미지 9" /></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/mypage.js"></script>
</body>
</html>

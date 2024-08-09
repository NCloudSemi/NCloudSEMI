<%--
  Created by IntelliJ IDEA.
  User: bitcamp
  Date: 24. 8. 5.
  Time: 오후 5:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <title>여행 계획 모달창</title>

    <!--kakao-->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba1ee8768e59dc81c31a27c0e72ea4a&libraries=services"></script>
    <!-- js link -->
    <script src="${pageContext.request.contextPath}/static/js/jquery-3.7.1.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/board-plan-modal.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/plan-modal-map.js"></script>
    <!-- style css link -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/board-plan-modal.css">

</head>
<body>
    <input type="hidden" id="contextPath" value="${pageContext.request.contextPath}">

        <div id="plan-modal" class="board-modal" style="display: none; z-index: 9999">
            <div class="modal-box" id="plan-modal-box">
                <!-- modal-header -->
                <div class="modal-header">
                    <h3>여행 계획 세우기</h3>
                    <button class="plan-save" id="plan-save">
                        <img src="${pageContext.request.contextPath}/static/image/D_Save.svg" alt="저장" />
                    </button>
                    <button id="plan-delete">
                        <img src="${pageContext.request.contextPath}/static/image/delete_icon.svg" alt="삭제" />
                    ️</button>
                </div>
                <!-- chapter-box -->
                <div class="chapter-box">
                    <div class="chapter-list">
                        <div class="chapter" id="chapter1">
                            <input type="text" id="chapter-name1" class="chapter-name" value="1일차">
                        </div>
                        <div class="chapter" id="chapter-add">
                            <p>+</p>
                        </div>
                    </div>
                    <button class="traffic-button" id="Bus-Icon">
                        <img src="${pageContext.request.contextPath}/static/image/Bus-Icon.svg" alt="Bus">
                    </button>
                    <button class="traffic-button" id="Car-Icon">
                        <img src="${pageContext.request.contextPath}/static/image/Car-Icon.svg" alt="Car">
                    </button>
                    <button class="traffic-button" id="Walk-Icon">
                        <img src="${pageContext.request.contextPath}/static/image/Walk-Icon.svg" alt="Walk">
                    </button>
                </div>
                <!-- contents-box -->
                <div class="contents-box">
                    <!-- map-box -->
                    <div class="map-box">
                        <div class="map-box-search-bar">
                            <button id="map-box-search-button">
                                <img id="map-box-search-button-img" src="${pageContext.request.contextPath}/static/image/Search-Button.svg" alt="Search-Button">
                            </button>
                            <input id="map-box-search-input" type="text" placeholder="검색어를 입력하세요.">
                        </div>
                        <div class="map-box-map">
                            지도가 들어갈 위치
                        </div>
                        <div class="map-box-preview-box">
                            <!-- preview 요소1 -->
                            <div id="map-box-preview-item1" class="map-box-preview-item">
                                <div class="map-box-preview-img" id="map-box-preview-img1">
                                    <img src="${pageContext.request.contextPath}/static/image/Comment1.svg" alt="" s>
                                </div>
                                <div class="description-box">
                                    <div class="place-name">신라스테이 서초</div>
                                    <div class="grade-box">
                                        <img src="${pageContext.request.contextPath}/static/image/Grade-40.jpg" alt="">
                                        <p>4.0 / 5</p>
                                    </div>
                                </div>
                                <div class="description-detail-box">
                                    <div class="cost-box">
                                        <div class="cost-name">가격</div>
                                        <div class="cost-content">20,000 ~ 30,000</div>
                                    </div>
                                    <div class="address-box">
                                        <div class="address-name">주소</div>
                                        <div class="address-content">서울특별시 서초구 효령로 427</div>
                                    </div>
                                </div>
                            </div>
                            <!-- preview 요소2 -->
                            <div id="map-box-preview-item2" class="map-box-preview-item">
                                <div class="map-box-preview-img" id="map-box-preview-img2">
                                    <img src="${pageContext.request.contextPath}/static/image/Comment2.svg" alt="">
                                </div>
                                <div class="description-box">
                                    <div class="place-name">신라스테이 서초</div>
                                    <div class="grade-box">
                                        <img src="${pageContext.request.contextPath}/static/image/Grade-40.jpg" alt="">
                                        <p>4.0 / 5</p>
                                    </div>
                                </div>
                                <div class="description-detail-box">
                                    <div class="cost-box">
                                        <div class="cost-name">가격</div>
                                        <div class="cost-content">20,000 ~ 30,000</div>
                                    </div>
                                    <div class="address-box">
                                        <div class="address-name">주소</div>
                                        <div class="address-content">서울특별시 서초구 효령로 427</div>
                                    </div>
                                </div>
                            </div>
                            <!-- preview 요소3 -->
                            <div id="map-box-preview-item3" class="map-box-preview-item">
                                <div class="map-box-preview-img" id="map-box-preview-img3">
                                    <img src="${pageContext.request.contextPath}/static/image/Comment3.svg" alt="">
                                </div>
                                <div class="description-box">
                                    <div class="place-name">신라스테이 서초</div>
                                    <div class="grade-box">
                                        <img src="${pageContext.request.contextPath}/static/image/Grade-40.jpg" alt="">
                                        <p>4.0 / 5</p>
                                    </div>
                                </div>
                                <div class="description-detail-box">
                                    <div class="cost-box">
                                        <div class="cost-name">가격</div>
                                        <div class="cost-content">20,000 ~ 30,000</div>
                                    </div>
                                    <div class="address-box">
                                        <div class="address-name">주소</div>
                                        <div class="address-content">서울특별시 서초구 효령로 427</div>
                                    </div>
                                </div>
                            </div>
                            <!-- preview 요소4 -->
                            <div id="map-box-preview-item4" class="map-box-preview-item">
                                <div class="map-box-preview-img" id="map-box-preview-img4">
                                    <img src="${pageContext.request.contextPath}/static/image/Writer.svg" alt="">
                                </div>
                                <div class="description-box">
                                    <div class="place-name">신라스테이 서초</div>
                                    <div class="grade-box">
                                        <img src="${pageContext.request.contextPath}/static/image/Grade-40.jpg" alt="">
                                        <p>4.0 / 5</p>
                                    </div>
                                </div>
                                <div class="description-detail-box">
                                    <div class="cost-box">
                                        <div class="cost-name">가격</div>
                                        <div class="cost-content">20,000 ~ 30,000</div>
                                    </div>
                                    <div class="address-box">
                                        <div class="address-name">주소</div>
                                        <div class="address-content">서울특별시 서초구 효령로 427</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- timeline-box -->
                    <div class="timeline-box">
                        <div class="timeline-column-left">
                            <div class="timeline-line-left"></div>
                            <div class="timeline-items">
                                <div class="timeline-item-start">
                                    <div class="timeline-icon-start">
                                        <img src="${pageContext.request.contextPath}/static/image/Location-Icon.svg" alt="Location-Icon">
                                    </div>
                                    <input class="start-location" spellcheck="false" placeholder="출발 위치"></input>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-column-right">
                            <div class="timeline-line-right"></div>
                            <div class="timeline-items"></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <jsp:include page="../modal/location-modal.jsp"></jsp:include>
</body>



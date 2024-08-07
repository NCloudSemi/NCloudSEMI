
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>

    <title>반응형 레이아웃</title>

    <!--kakao Link-->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba1ee8768e59dc81c31a27c0e72ea4a&libraries=services"></script>
    <!-- bootstrap5 link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- style css link -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/location.css">\
    <!-- js link -->
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src=https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.3/jquery-ui.min.js></script>
    <!--script-->
    <script src="${pageContext.request.contextPath}/static/js/location.js"></script>

</head>
<body>
<div class="wrap">

    <jsp:include page="${pageContext.request.contextPath}/sidebar.jsp"></jsp:include>

    <!-- ⚠️⚠️⚠️ 이 밑 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
    <!-- ⚠️⚠️⚠️ 이 밑 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
    <!-- 👇👇👇 이 밑 부분 (content 부분)만 수정하세요. 👇👇👇 -->
    <div class="content">
        <div id="main">
            <input type="hidden" id="contextPath" value="${pageContext.request.contextPath}">
            <!--filter-->
            <div id="filter-form" style="display: none;">
                <div class="d-flex">
                    <img src="${pageContext.request.contextPath}/static/image/filter.svg" alt="" id="filter-back-button">
                </div>
                <!--area-filer-->
                <div id="area-filer">
                    <p style="display: block; width: 5vw; height: 3vh; font-weight: bold;">지역</p>
                    <div id="areas" class="d-flex">
                        <p class="area">서울</p>
                        <p class="area">인천</p>
                        <p class="area">경기</p>
                        <p class="area">강원</p>
                        <p class="area">대전</p>
                        <p class="area">세종</p>
                        <p class="area">충청</p>
                        <p class="area">대구</p>
                        <p class="area">경상</p>
                        <p class="area">울산</p>
                        <p class="area">부산</p>
                        <p class="area">광주</p>
                        <p class="area">전라</p>
                        <p class="area">제주</p>
                    </div>
                </div>
                <!--price-filer-->
                <div id="price-filer"  class="d-flex">
                    <p style="display: block; width: 5vw; height: 3vh; font-weight: bold;">가격</p>
                    <p id="price-min" value ='100000'>100,000</p>
                    <div class="price-progress" id="price-progress">
                        <div id="draggable-point-1" style="left:75%;position:absolute;" class="draggable ui-widget-content price-point">
                            <div class="price-progress-handle"></div>
                            <div class="price-handle-value" id="price-handle-max">750,000</div>
                        </div>
                        <div id="draggable-point-2" style="left:55%;position:absolute;" class="draggable ui-widget-content price-point">
                            <div class="price-progress-handle"></div>
                            <div class="price-handle-value" id="price-handle-min">550,000</div>
                        </div>

                        <div id="price-progress-bar" class="bar" style="width:20%; left:55%; position:absolute"></div>
                    </div>
                    <p id="price-max" value ='1000000'>1,000,000 +</p>

                </div>
            </div>

            <!--serchBar-->
            <div id="serchArea">
                <!--serch-->
                <div id="serch-form" >
                    <img src="${pageContext.request.contextPath}/static/image/Search-Button.svg" alt="" id="search-button">
                    <input type="text" id="serchBar" placeholder="검색어를 입력하세요." spellcheck="false">
                    <img src="${pageContext.request.contextPath}/static/image/filter.svg" alt="" id="filter-button">
                </div>
                <!--only line-->
            </div>

            <div class="d-flex">
                <!--kakao Map-->
                <div id="kakaoMap">

                </div>
                <!--result-->
                <div id ="serchResultList">

                </div>
            </div>

            <!--modal-->
            <div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-left" style="max-width: 80vw;" role="document" >
                    <div class="modal-content">
                        <div class="modal-header border-0 justify-content-end">
                            <div id="link_planArea" class="d-flex">
                              <img src="${pageContext.request.contextPath}/static/image/Plan_Icon.svg" id="plan_button">
                            </div>
                            <img src="${pageContext.request.contextPath}/static/image/pick_location.svg" id="pick_button">
                            <img src="${pageContext.request.contextPath}/static/image/share_location.svg" id="share_button">
                        </div>
                        <!--modal body 1-2-1 1-1-2-->
                        <div class="modal-body">
                            <div>
                                <div class="row" style="height: 40vh;">
                                    <div class="col-3 result-container" >
                                        <div class="col-3 border" id="resultModalImg" style="background-image: url(${pageContext.request.contextPath}/static/image/Food.svg);">

                                        </div>
                                    </div>
                                    <div class="col-6 result-container">
                                        <div id="resultModalMap">

                                        </div>
                                    </div>
                                    <div class="col-3 result-container" >
                                        <div id="resultModalComment">
                                            <p id="review-list">Review List</p>
                                            <div class="commentArea">
                                                <div class="d-flex">
                                                    <div class="grade">
                                                        ⭐⭐⭐⭐⭐
                                                    </div>
                                                    <p class="place_name">TEST</p>
                                                    <p class="option_name">TEST</p>
                                                </div>
                                                <div class="comment">
                                                    <p>
                                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eligendi explicabo fuga iusto labore laboriosam minima natus, nulla quaerat quod sit suscipit velit? Dolore id molestias neque quasi sequi voluptate?
                                                    </p>
                                                </div>

                                            </div>
                                            <div class="commentArea">
                                                <div class="d-flex">
                                                    <div class="grade">
                                                        ⭐⭐⭐⭐⭐
                                                    </div>
                                                    <p class="place_name">TEST</p>
                                                    <p class="option_name">TEST</p>
                                                </div>
                                                <div class="comment">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eligendi explicabo fuga iusto labore laboriosam minima natus, nulla quaerat quod sit suscipit velit? Dolore id molestias neque quasi sequi voluptate?
                                                    </p>
                                                </div>


                                            </div>
                                            <div class="commentArea">
                                                <div class="d-flex">
                                                    <div class="grade">
                                                        ⭐⭐⭐⭐⭐
                                                    </div>
                                                    <p class="place_name">TEST</p>
                                                    <p class="option_name">TEST</p>
                                                </div>
                                                <div class="comment">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eligendi explicabo fuga iusto labore laboriosam minima natus, nulla quaerat quod sit suscipit velit? Dolore id molestias neque quasi sequi voluptate?
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row" style="height: 40vh;">
                                    <div class="col-3" id="resultModalDatas">
                                        <div class="d-flex" style="flex-wrap: wrap">
                                            <p id="place_name">TEST</p>
                                            <div id="grade">
                                                ⭐⭐⭐⭐⭐
                                            </div>
                                        </div>
                                        <div class="d-flex serch-certification">
                                            <img src="" alt="" class="certification-img">
                                            <p class="certification-title"></p>
                                        </div>
                                        <div class="price-info">
                                            <p>금액</p>
                                            <p class="price">금액</p>
                                        </div>

                                        <div class="direction-info">
                                            <p>찾아가시는 길</p>
                                            <p class="direction">TEST DIRECTIOON</p>
                                        </div>

                                        <div class="location-info">
                                            <p>위치</p>
                                            <p class="location">TEST WHERE</p>
                                        </div>
                                    </div>
                                    <div class="col-3" id="resultModalBooking">

                                        <div class="d-flex" id="book-men">
                                            <div style="padding: 6px;">예약 인원</div>
                                                <button class="btn dropdown-toggle" type="button" id="bookMen-dropDown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                                예약 인원 수
                                            </button>
                                            <div class="dropdown-menu" >
                                                <form>
                                                    <div class="form-group">
                                                        <label for="book-adult">성인</label>
                                                        <input type="text" class="form-control" id="book-adult" placeholder="0명">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="book-child">아동</label>
                                                        <input type="text" class="form-control" id="book-child" placeholder="0명">
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="d-flex" id="book-option">
                                            <div style="padding: 6px;">객실 종류</div>
                                            <button class="btn dropdown-toggle" id="book-option-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                option1
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><button class="dropdown-item book-opiton-item" type="button">option1</button></li>
                                                <li><button class="dropdown-item book-opiton-item" type="button">option2</button></li>
                                                <li><button class="dropdown-item book-opiton-item" type="button">option3</button></li>
                                            </ul>
                                        </div>

                                        <!--carecell-->
                                        <div id="optionImage-carouse" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="${pageContext.request.contextPath}/static/image/Activity.svg" class="d-block w-100  " alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="${pageContext.request.contextPath}/static/image/Activity.svg" class="d-block w-100 " alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="${pageContext.request.contextPath}/static/image/Activity.svg" class="d-block w-100 " alt="...">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#optionImage-carouse" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#optionImage-carouse" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>

                                        <button class="" id="book-button">Check ✔</button>

                                    </div>
                                    <div class="col-6" id="resultModalCalender">
                                        <div class="container">

                                            <div id="calendar-wrapper" class="border rounded d-flex" style='background-color: #FFF' >


                                                <!--번트1--->
                                                <button id="prev" class="btn calendar-button">&lt;</button>
                                                <!-- 달력1-->
                                                <div class="calendar">
                                                    <h2 class="month-year" id="cur-month">TEST</h2>
                                                    <div class="calendar-days" >
                                                        <div class="day-name" style="color: red">일</div>
                                                        <div class="day-name">월</div>
                                                        <div class="day-name">화</div>
                                                        <div class="day-name">수</div>
                                                        <div class="day-name">목</div>
                                                        <div class="day-name">금</div>
                                                        <div class="day-name" style="color: red">토</div>
                                                    </div>
                                                    <div class="calendar-body" id="cur-calender">
                                                        <!-- Calendar dates will be inserted here by JavaScript -->
                                                    </div>
                                                </div>
                                                <!--달력2-->
                                                <div class="calendar">
                                                    <h2 class="month-year" id="next-month">TEST</h2>
                                                    <div  class="calendar-days" >
                                                        <div class="day-name">일</div>
                                                        <div class="day-name">월</div>
                                                        <div class="day-name">화</div>
                                                        <div class="day-name">수</div>
                                                        <div class="day-name">목</div>
                                                        <div class="day-name">금</div>
                                                        <div class="day-name">토</div>
                                                    </div>
                                                    <div  class="calendar-body" id="next-calendar">
                                                        <!-- Calendar dates will be inserted here by JavaScript -->
                                                    </div>
                                                </div>
                                                <!--번트2--->
                                                <button id="next" class="btn calendar-button">&gt;</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>



    </div>
    <!-- 👆👆👆 윗 부분 (content 부분)만 수정하세요. 👆👆👆 -->
    <!-- ⚠️⚠️⚠️ 윗 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
    <!-- ⚠️⚠️⚠️ 윗 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
</div>

</body>

<%--
  Created by IntelliJ IDEA.
  User: bitcamp
  Date: 2024-08-07
  Time: 오후 4:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<head>
    <title>Title</title>
    <!-- bootstrap5 link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- style css link -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/location_modal.css">\
    <!--script-->
    <script src="${pageContext.request.contextPath}/static/js/location_modal.js"></script>

</head>
<div class="modal fade" id="resultModal" tabindex="-1" role="dialog" aria-labelledby="resultModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-left" style="max-width: 80vw;" role="document" >
        <div class="modal-content" style="width:  80vw !important">
            <div class="modal-header border-0 justify-content-end" style="height: 3vh; margin-top: 1em">
                <div id="link_planArea" class="d-flex">
                    <img src="${pageContext.request.contextPath}/static/image/Plan_Icon.svg" id="plan_button">
                </div>
                <img src="${pageContext.request.contextPath}/static/image/D_Pin.svg" id="pick_button">
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
                                            <img src="/static/image/별점(5점).svg">
                                        </div>
                                        <p class="place_name">MJSn ...</p>
                                        <p class="option_name">디럭스 더블 시티뷰</p>
                                    </div>
                                    <div class="comment">
                                        <p>
                                            여자친구와 같이 오기 좋은 곳 같아요. 아무래도 도심지 주변에 있고, 근처에 역도 있다보니 다양한 곳에 쉽게 갈 수 있어서 좋은 것 같아요..!! 재방문 의사 당연히 있습니다.❤️❤️❤️
                                        </p>
                                    </div>

                                </div>
                                <div class="commentArea">
                                    <div class="d-flex">
                                        <div class="grade">
                                            <img src="/static/image/별점(5점).svg">
                                        </div>
                                        <p class="place_name">I._0vly</p>
                                        <p class="option_name">키즈 프리미엄 더블</p>
                                    </div>
                                    <div class="comment">
                                        <p>
                                            귀여운 곰돌이 마스코트가 기분을 좋게 하는 곳💙<br><br>
                                            시원하고 쾌적한 공간에서 푹 쉬면서 붐비는 주변의 인프라들을 편하게 만끽할 수 있어 좋아요💙💙<br><br>
                                            다 좋았지만 특히 조식이 기대 이상인 곳👍<br>
                                            여기만의 잔잔한 분위기가 참 좋아요🌟🌟<br><br>
                                            모두 다 좋지만, 공간 곳곳 특히 객실 통로에서 브랜드 특유의 향기가 나면 더 좋을 것 같은 느낌..?💮🌸🩷
                                        </p>
                                    </div>


                                </div>
                                <div class="commentArea">
                                    <div class="d-flex">
                                        <div class="grade">
                                            <img src="/static/image/별점(5점).svg">
                                        </div>
                                        <p class="place_name">bitC ...</p>
                                        <p class="option_name">디럭스 패밀리 트윈</p>
                                    </div>
                                    <div class="comment">
                                        <p>
                                            침구류가 깨긋하고 모든게 쾌적해서 기분 좋게 머물다 갑니당💝💝<br><br>
                                            어메니티 구성도 깔끔하고 욕실이며 화장실이며 너무 깔끔하고 좋네요!!<br>
                                            청결 엄청 보는 청결 덕후(?)로서 여기 진짜 강추 드립니닷🙃🙂🙃😉
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
                                    <img src="/static/image/별점(5점).svg">
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
                                            <div class="day-name" style="color: blue">토</div>
                                        </div>
                                        <div class="calendar-body" id="cur-calender">
                                            <!-- Calendar dates will be inserted here by JavaScript -->
                                        </div>
                                    </div>
                                    <!--달력2-->
                                    <div class="calendar">
                                        <h2 class="month-year" id="next-month">TEST</h2>
                                        <div class="calendar-days" >
                                            <div class="day-name" style="color: red">일</div>
                                            <div class="day-name">월</div>
                                            <div class="day-name">화</div>
                                            <div class="day-name">수</div>
                                            <div class="day-name">목</div>
                                            <div class="day-name">금</div>
                                            <div class="day-name" style="color: blue">토</div>
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



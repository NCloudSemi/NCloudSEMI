
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
                        <div id="draggable-point-1" style="left:73.4342vw;position:absolute;" class="draggable ui-widget-content price-point">
                            <div class="price-progress-handle"></div>
                            <div class="price-handle-value" id="price-handle-max">750,000</div>
                        </div>
                        <div id="draggable-point-2" style="left:60.5047vw;position:absolute;" class="draggable ui-widget-content price-point">
                            <div class="price-progress-handle"></div>
                            <div class="price-handle-value" id="price-handle-min">550,000</div>
                        </div>

                        <div id="price-progress-bar" class="bar" style="width: 12.9817vw; left: 60.4525vw; position: absolute;"></div>
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
            <jsp:include page="../modal/location-modal.jsp"></jsp:include>

        </div>



    </div>
    <!-- 👆👆👆 윗 부분 (content 부분)만 수정하세요. 👆👆👆 -->
    <!-- ⚠️⚠️⚠️ 윗 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
    <!-- ⚠️⚠️⚠️ 윗 부분 (content 부분)만 수정하세요. ⚠️⚠️⚠️ -->
</div>

</body>

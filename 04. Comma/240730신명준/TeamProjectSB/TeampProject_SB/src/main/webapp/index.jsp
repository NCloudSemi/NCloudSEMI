
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- css 초기화 -->
    <!-- servlet-context.xml에 /static/** 설정 -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reset.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/login-joining.css">
    <script
            src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous"></script>
    <script src="${pageContext.request.contextPath}/static/js/login-joining.js"></script>
</head>
<body>
<!--pageContext.request.contextPath: WebServer의 root path인 webapp 폴더(http://localhost:8090)-->
<!-- Login Page -->
<div id="login-page-container">
    <!-- left content -->
    <div id="login-left-content">
        <div id="login-page-img">
            <img src="${pageContext.request.contextPath}/static/image/LoginPageImg.jpg" alt="left-img">
        </div>
    </div>

    <!-- right content -->
    <div id="login-right-content">

        <!-- login Page -->
        <div id="login" class="login-content">
            <a href="">
                <img src="${pageContext.request.contextPath}/static/image/TeamProjectLogo.png" alt="logo" class="main-logo">
            </a>

            <h1>comma</h1>
            <p>당신의 일상에 '쉼표'를 선물하세요.</p>

            <div id="login-container1">
                <div id="focus-login-username" class="input-group">
                    <%--@declare id="username"--%><label for="username">ID</label>
                    <input type="text" id="login-username" class="login-input">
                </div>
                <div id="focus-login-password" class="input-group">
                    <%--@declare id="password"--%><label for="password">PW</label>
                    <input type="password" id="login-password" class="login-input">
                </div>
                <div class="btn-group">
                    <button id="loginBtn" class="btn">LOGIN</button>
                    <button id="showSignup" class="btn">JOIN</button>
                </div>
            </div>
        </div>

        <!-- join page -->
        <div id="join" class="login-content hidden">
            <a href="">
                <img src="${pageContext.request.contextPath}/static/image/TeamProjectLogo.png" alt="logo" class="main-logo">
            </a>

            <h1>comma</h1>
            <p>join the membership</p>
            <div id="login-container2">
                <div id="focus-join-username" class="input-group">
                    <label for="join-username">ID</label>
                    <input type="text" id="join-username" class="login-input">
                </div>
                <div id="focus-join-password" class="input-group">
                    <label for="password">PW</label>
                    <input type="password" id="join-password" class="login-input">
                </div>
                <div id="focus-join-passwordChk" class="input-group">
                    <label for="password">PW CHECK</label>
                    <input type="password" id="passwordChk" class="login-input">
                </div>
                <div id="focus-join-nickname" class="input-group">
                    <label for="nickname">NAME</label>
                    <input type="text" id="nickname" class="login-input">
                </div>
                <div class="btn-group">
                    <button id="male" class="btn" value="MALE">MALE</button>
                    <button id="female" class="btn" value="FEMALE">FEMALE</button>
                </div>
                <div id="residence-group">
                    <div id="residence">
                        WEHRE YOU LIVE
                    </div>
                    <div>
                        <select name="residence" id="residence-list">
                            <option value="서울">서울</option>
                            <option value="경기">경기</option>
                            <option value="인천">인천</option>
                            <option value="강원">강원</option>
                            <option value="대구">대구</option>
                            <option value="대전">대전</option>
                            <option value="광주">광주</option>
                            <option value="울산">울산</option>
                            <option value="충남">충남</option>
                            <option value="충북">충북</option>
                            <option value="경남">경남</option>
                            <option value="경북">경북</option>
                            <option value="전남">전남</option>
                            <option value="전북">전북</option>
                            <option value="제주">제주</option>
                        </select>
                    </div>
                </div>
                <div class="input-group">
                    <input type="text" id="residence-input" class="login-input" placeholder="상세지역을 입력하세요.">
                </div>
                <div class="btn-group">
                    <button id="signupBtn" class="btn">JOIN</button>
                    <button id="showLogin" class="btn">CANCEL</button>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div id="myModal" class="modal">
            <div class="modal-content">
                <div id="modal-close-box">
                    <span id="modal-close">&times;</span>
                </div>
                <div id="residenceDetails-box">
                    <textarea id="residenceDetails" class="large-textarea" placeholder="상세 지역을 입력하세요..."></textarea>
                </div>
                <div id="saveBtn-box">
                    <button id="saveBtn" class="modal-btn">Save</button>
                </div>
            </div>
        </div>
    </div>
</div>


<script>
    $(()=>{
        $('#loginBtn').on('click', () => {
            $.ajax({
                url: '/member/main.do',
                type: "get",
                contentType: "x-www-form-urlencoded",
                success: (page) => {
                    $("body").html(page)
                },
                error: (err) => {
                    console.log(err);
                }
            });
        })
    })
</script>


</body>

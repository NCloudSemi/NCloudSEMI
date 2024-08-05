
<%--
  Created by IntelliJ IDEA.
  User: planl
  Date: 2024-07-25
  Time: 오후 2:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- css 초기화 -->
    <!-- servlet-context.xml에 /static/** 설정 -->
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/reset.css"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/login-joining.css">
    <!-- ICO 파비콘 -->
    <link rel="icon" href="${pageContext.request.contextPath}/static/image/favicon.ico" type="image/x-icon">
    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script
            src="https://code.jquery.com/jquery-3.7.1.js"
            integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
            crossorigin="anonymous"></script>
    <script src="${pageContext.request.contextPath}/static/js/login-joining.js"></script>
</head>
<body>
<!--pageContext.request.contextPath: WebServer의 root path인 webapp 폴더(http://localhost:8090)-->
<!-- Login Page -->
<div id="container">
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
            <form action="/user/login.do" method="post" id="login" class="login-content">
                <a href="">
                    <img src="${pageContext.request.contextPath}/static/image/TeamProjectLogo.png" alt="logo"
                         class="main-logo1">
                </a>

                <h1>comma</h1>
                <p>당신의 일상에 '쉼표'를 선물하세요.</p>

                <div id="login-container1">
                    <div id="focus-login-email" class="input-group">
                        <%--@declare id="username"--%><label for="login-email">ID</label>
                        <input type="text" id="login-email" name="email" class="login-input">
                    </div>
                    <div id="focus-login-password" class="input-group">
                        <%--@declare id="password"--%><label for="login-password">PW</label>
                        <input type="password" id="login-password" name="pw" class="login-input">
                    </div>
                    <div class="btn-group1">
                        <button id="loginBtn" class="btn">LOGIN</button>
                        <button type="button" id="showSignup" class="btn">JOIN</button>
                    </div>
                </div>
            </form>

            <!-- join page -->
            <form action="user/join.do" method="post" id="join" class="login-content hidden">
                <a href="">
                    <img src="${pageContext.request.contextPath}/static/image/TeamProjectLogo.png" alt="logo"
                         class="main-logo2">
                </a>

                <h1>comma</h1>
                <p>join the membership</p>
                <div id="login-container2">
                    <div id="focus-join-email" class="input-group">
                        <label for="join-email">ID</label>
                        <input type="text" id="join-email" name="email" class="login-input">
                    </div>
                    <div id="focus-join-password" class="input-group">
                        <label for="join-password">PW</label>
                        <input type="password" id="join-password" name="pw" class="login-input">
                    </div>
                    <div id="focus-join-passwordChk" class="input-group">
                        <label for="passwordChk">PW CHECK</label>
                        <input type="password" id="passwordChk" name="passwordChk" class="login-input">
                    </div>
                    <div id="focus-join-name" class="input-group">
                        <label for="nickname">NAME</label>
                        <input type="text" id="nickname" name="nickname" class="login-input">
                    </div>
                    <div class="btn-group2">
                        <button type="button" id="male" class="btn" value="MALE">MALE</button>
                        <button type="button" id="female" class="btn" value="FEMALE">FEMALE</button>
                    </div>
                    <input type="hidden" name="gender" id="genderInput">

                    <div id="addressChk-text">
                        <label>WHERE YOU LIVE</label>
                    </div>
                    <div id="focus-detail-address1" class="input-group">
                        <input type="text" name="address" id="address" class="login-input"
                               placeholder="주소" readonly>
                    </div>
                    <div id="focus-detail-address2" class="input-group">
                        <input type="text" name="detailed_address" id="detailed-address" class="login-input"
                               placeholder="상세주소를 입력하세요.">
                    </div>


                    <div class="btn-group2">
                        <button id="signupBtn" class="btn">JOIN</button>
                        <button type="button" id="showLogin" class="btn">CANCEL</button>
                    </div>
                    <div class="email-fail-message1 hide">
                        아이디: 필수 정보입니다.
                    </div>
                    <div class="email-fail-message2 hide">
                        아이디: 이메일 형식으로 입력해주세요.
                    </div>
                    <div class="email-fail-message3 hide">
                        아이디: 중복된 아이디입니다.
                    </div>

                    <div class="password-fail-message1 hide">
                        비밀번호: 필수 정보입니다.
                    </div>
                    <div class="password-fail-message2 hide">
                        비밀번호: 최소 8자 이상이어야 하며, 대문자 및 특수 문자를 하나 이상 포함해야 합니다.
                    </div>

                    <div class="pwCheck-fail-message hide">
                        비밀번호 체크: 비밀번호와 일치하지 않습니다.
                    </div>

                    <div class="name-fail-message1 hide">
                        이름: 필수 정보입니다.
                    </div>
                    <div class="name-fail-message2 hide">
                        이름: 중복된 이름입니다.
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
    $(() => {

        // login page의 ID, PW 유효성 체크
        const loginFailMsg = '${loginFailMsg}';
        const joinFailMsg = '${joinFailMsg}';

        console.log(loginFailMsg);
        console.log(joinFailMsg);

        if(loginFailMsg === 'emailNotExist') {
            alert("존재하지 않는 아이디입니다.");
        } else if(loginFailMsg === 'wrongPassword') {
            alert("잘못된 비밀번호입니다.");
        }

        if (joinFailMsg === 'emailCheckFail') {
            alert("중복된 아이디 입니다.");
        } else if (joinFailMsg === 'nameCheckFail') {
            alert("중복된 닉네임 입니다.");
        }
    });
</script>
</body>
</html>

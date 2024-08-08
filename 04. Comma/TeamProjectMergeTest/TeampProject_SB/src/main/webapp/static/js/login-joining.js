document.addEventListener('DOMContentLoaded', function () {

    /* login, join => 넘어올때 값 초기화 */
    const loginContent = document.getElementById('login');
    const joinContent = document.getElementById('join');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const maleBtn = document.getElementById('male');
    const femaleBtn = document.getElementById('female');

    /* join 유효성 검사 체크 */
    let emailChk = false;
    let pwChk = false;
    let pwConfirm = false;
    let nameChk = false;
    let genderChk = false;
    let addressChk = false;

    const resetJoinForm = () => {
        document.getElementById('join-email').value = '';
        document.getElementById('focus-join-email').style.borderColor = 'black';
        document.getElementById('join-password').value = '';
        document.getElementById('focus-join-password').style.borderColor = 'black';
        document.getElementById('passwordChk').value = '';
        document.getElementById('focus-join-passwordChk').style.borderColor = 'black';
        document.getElementById('nickname').value = '';
        document.getElementById('focus-join-name').style.borderColor = 'black';
        document.getElementById('address').value = '';
        document.getElementById('focus-detail-address1').style.borderColor = 'black';
        document.getElementById('detailed-address').value = '';
        maleBtn.classList.remove('active');
        femaleBtn.classList.remove('active');

        document.querySelector(".email-fail-message1").classList.add('hide');
        document.querySelector(".email-fail-message2").classList.add('hide');
        document.querySelector(".email-fail-message3").classList.add('hide');
        document.querySelector(".password-fail-message1").classList.add('hide');
        document.querySelector(".password-fail-message2").classList.add('hide');
        document.querySelector(".pwCheck-fail-message").classList.add('hide');
        document.querySelector(".name-fail-message1").classList.add('hide');
        document.querySelector(".name-fail-message2").classList.add('hide');
        document.querySelector(".gender-fail-message1").classList.add('hide');
        document.querySelector(".address-fail-message").classList.add('hide');

    };

    const resetLoginForm = () => {
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    }

    showSignupBtn.addEventListener('click', function () {
        // Hide login content
        loginContent.classList.add('hidden');

        // Reset form fields in login content
        resetLoginForm();

        // Show join content
        setTimeout(function () {
            joinContent.classList.remove('hidden');
        }, 500);

        // Reset form fields in join content
        resetJoinForm();
    });

    showLoginBtn.addEventListener('click', function () {
        // Hide join content
        joinContent.classList.add('hidden');
        // Reset form fields in join content
        resetJoinForm();

        // Show login content
        setTimeout(function () {
            loginContent.classList.remove('hidden');
        }, 500);

        // Reset form fields in login content
        resetLoginForm();
    });



    /* Male, Female check */
    const maleOption = document.getElementById('male');
    const femaleOption = document.getElementById('female');

    maleOption.addEventListener('click', function () {
        maleOption.classList.add('active');
        femaleOption.classList.remove('active');
        document.querySelector(".gender-fail-message1").classList.add('hide');
    });

    femaleOption.addEventListener('click', function () {
        femaleOption.classList.add('active');
        maleOption.classList.remove('active');
        document.querySelector(".gender-fail-message1").classList.add('hide');
    });


    /* input focus */
    function setFocusStyle(inputId, focusId) {
        document.getElementById(inputId).addEventListener('focus', function () {
            document.getElementById(focusId).style.borderColor = "orange";
        });
        document.getElementById(inputId).addEventListener('blur', function () {
            document.getElementById(focusId).style.borderColor = "black";
        });
    }

    // pw eye icon
    function togglePasswordVisibility(toggleButton, passwordField) {
        // 현재 타입이 password인 경우 text로 변경, 그렇지 않으면 password로 변경
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        // 아이콘 이미지 변경
        if (type === 'password') {
            toggleButton.innerHTML = '<img src="/static/image/eye-slashed_svgrepo.com.svg" alt="Show Password">';
        } else {
            toggleButton.innerHTML = '<img src="/static/image/eye-3_svgrepo.com.svg" alt="Hide Password">';
        }
    }

    document.getElementById("login-toggle-pw").addEventListener('click', () => {
        const loginFieldPw = document.getElementById("login-password");
        const loginTogglePw = document.getElementById("login-toggle-pw");
        togglePasswordVisibility(loginTogglePw, loginFieldPw);
    });

    document.getElementById("join-toggle-pw").addEventListener('click', () => {
        const joinFieldPw = document.getElementById("join-password");
        const joinTogglePw = document.getElementById("join-toggle-pw");
        togglePasswordVisibility(joinTogglePw, joinFieldPw);
    });

    document.getElementById("join-toggle-pwChk").addEventListener('click', () => {
        const joinFieldPwChk = document.getElementById("passwordChk");
        const joinTogglePwChk = document.getElementById("join-toggle-pwChk");
        togglePasswordVisibility(joinTogglePwChk, joinFieldPwChk);
    });

    const joinPwInput = document.getElementById('join-password');
    const joinPwInputChk = document.getElementById('passwordChk');
    const nicknameInput = document.getElementById('nickname');

    joinPwInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey) { // Tab 키를 눌렀을 때
            e.preventDefault(); // 기본 탭 이동 방지
            joinPwInputChk.focus(); // 다음 입력란으로 포커스 이동
        }
    });

    joinPwInputChk.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey) { // Tab 키를 눌렀을 때
            e.preventDefault(); // 기본 탭 이동 방지
            nicknameInput.focus(); // 다음 입력란으로 포커스 이동
        }
    });

    // focus on login and change the color
    setFocusStyle('login-email', 'focus-login-email');
    setFocusStyle('login-password', 'focus-login-password');
    // focus on joining and change the color
    setFocusStyle('join-email', 'focus-join-email');
    setFocusStyle('join-password', 'focus-join-password');
    setFocusStyle('passwordChk', 'focus-join-passwordChk');
    setFocusStyle('nickname', 'focus-join-name');
    setFocusStyle('detailed-address', 'focus-detail-address2');

    // 이메일 형식에 맞는 정규 표현식
    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // id 체크
    $("#join-email").on('blur', async (e) => {
        let emailValue = $("#join-email").val();
        console.log("Email Value:", emailValue);

        if (emailValue === '') {
            console.log("Email is empty");
            document.querySelector(".email-fail-message1").classList.remove('hide');
            document.querySelector(".email-fail-message2").classList.add('hide');
            document.querySelector(".email-fail-message3").classList.add('hide');
            // $("#join-email").focus();
            $("#focus-join-email").css("borderColor", "red");
            return;
        }

        if (!isValidEmail(emailValue)) {
            console.log("Invalid Email Format");
            document.querySelector(".email-fail-message1").classList.add('hide');
            document.querySelector(".email-fail-message2").classList.remove('hide');
            document.querySelector(".email-fail-message3").classList.add('hide');
            // $("#join-email").focus();
            $("#focus-join-email").css("borderColor", "red");
        } else {
            let eCheck = await emailCheck($("#join-email").val());
            // idCheck 값이 false 종료
            if (!eCheck) {
                return;
            }
        }
    });

    function emailCheck(email) {
        return new Promise((resolve, reject) => {
            console.log("Sending AJAX request");

            $.ajax({
                url: '/user/emailCheck.do',
                type: 'POST',
                data: {email: email},
                success: (obj) => {
                    console.log("AJAX Success:", obj);
                    if (obj.emailCheckMsg === 'emailFail') {
                        document.querySelector(".email-fail-message1").classList.add('hide');
                        document.querySelector(".email-fail-message2").classList.add('hide');
                        document.querySelector(".email-fail-message3").classList.remove('hide');
                        $("#focus-join-email").css("borderColor", "red");
                        resolve(false);
                    } else if (obj.emailCheckMsg === 'emailOK') {
                        document.querySelector(".email-fail-message1").classList.add('hide');
                        document.querySelector(".email-fail-message2").classList.add('hide');
                        document.querySelector(".email-fail-message3").classList.add('hide');
                        $("#focus-join-email").css("borderColor", "black");
                        emailChk = true;
                        resolve(true);
                    }
                },
                error: (err) => {
                    console.log("AJAX Error:", err);
                    reject(false);
                }
            });
        })
    }

    /* 비밀번호 조건 정규표현식 */
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    }

    // pw 체크
    $("#join-password").on('blur', (e) => {
        let pwValue = $("#join-password").val();
        console.log("Password Value:", pwValue);

        if ($("#join-password").val() === '') {
            console.log("Pw is Empty");
            document.querySelector(".password-fail-message1").classList.remove('hide');
            document.querySelector(".password-fail-message2").classList.add('hide');
            document.querySelector(".pwCheck-fail-message").classList.add('hide');
            // $("#join-password").focus();
            $("#focus-join-password").css("borderColor", "red");
            return;
        }

        if (!validatePassword($("#join-password").val())) {
            console.log("Invalid Pw Format");
            document.querySelector(".password-fail-message1").classList.add('hide');
            document.querySelector(".password-fail-message2").classList.remove('hide');
            document.querySelector(".pwCheck-fail-message").classList.add('hide');
            // $("#join-password").focus();
            $("#focus-join-password").css("borderColor", "red");
            return;
        }

        console.log("Valid Pw Format");
        document.querySelector(".password-fail-message1").classList.add('hide');
        document.querySelector(".password-fail-message2").classList.add('hide');
        $("#focus-join-password").css("borderColor", "black");
        pwChk = true;
    });

    // pw check 체크
    $("#passwordChk").on('blur', (e) => {
        if ($("#passwordChk").val() === '') {
            document.querySelector(".pwCheck-fail-message").classList.remove('hide');
            document.querySelector(".password-fail-message1").classList.add('hide');
            document.querySelector(".password-fail-message2").classList.add('hide');
            $("#focus-join-passwordChk").css("borderColor", "red");
            return;
        }

        if ($("#passwordChk").val() !== $("#join-password").val()) {
            document.querySelector(".pwCheck-fail-message").classList.remove('hide');
            document.querySelector(".password-fail-message1").classList.add('hide');
            document.querySelector(".password-fail-message2").classList.add('hide');
            $("#focus-join-passwordChk").css("borderColor", "red");
            return;
        }

        document.querySelector(".pwCheck-fail-message").classList.add('hide');
        $("#focus-join-passwordChk").css("borderColor", "black");
        pwConfirm = true;
    });

    // name 체크
    $("#nickname").on('blur', async (e) => {
        let nameValue = $("#nickname").val();
        if (nameValue === '') {
            document.querySelector(".name-fail-message1").classList.remove('hide');
            document.querySelector(".name-fail-message2").classList.add('hide');
            $("#focus-join-name").css("borderColor", "red");
            return;
        } else{
            let nCheck = await nameCheck(nameValue);
            // nCheck 값이 false 종료
            if (!nCheck) {
                return;
            }
        }
    });

    function nameCheck(nickname) {
        return new Promise((resolve, reject) => {
            console.log("Sending AJAX request");

            $.ajax({
                url: '/user/nameCheck.do',
                type: 'POST',
                data: {nickname: nickname},
                success: (obj) => {
                    console.log("AJAX Success:", obj);
                    if (obj.nameCheckMsg === 'nameFail') {
                        document.querySelector(".name-fail-message1").classList.add('hide');
                        document.querySelector(".name-fail-message2").classList.remove('hide');
                        $("#focus-join-name").css("borderColor", "red");
                        resolve(false);
                    } else if (obj.nameCheckMsg === 'nameOK') {
                        document.querySelector(".name-fail-message1").classList.add('hide');
                        document.querySelector(".name-fail-message2").classList.add('hide');
                        $("#focus-join-name").css("borderColor", "black");
                        nameChk = true;
                        resolve(true);
                    }
                },
                error: (err) => {
                    console.log("AJAX Error:", err);
                    reject(false);
                }
            });
        });
    }

    // 성별값 받아오기
    $("#male").on("click", function () {
        document.getElementById('genderInput').value = 'male';
        genderChk = true;
        console.log('male')
    });

    $("#female").on("click", function () {
        document.getElementById('genderInput').value = 'female';
        genderChk = true;
        console.log('female')
    });

    // 주소 체크
    $(window).on("load", function(){
        $("#focus-detail-address1").click(function (){

            new daum.Postcode({
                oncomplete: function (data) {

                    jQuery("#address").val(data.address);

                    if ($("#address").val() === '') {
                        $("#focus-detail-address1").css("borderColor", "red");
                    } else {
                        $("#focus-detail-address1").css("borderColor", "black");
                        document.querySelector(".address-fail-message").classList.add('hide');
                    }

                    // 주소 값 가져오기
                    var addressValue = jQuery("#address").val();
                    document.getElementById('address').value = addressValue;
                    addressChk = true;
                    console.log(addressChk);

                    // 지역 이름 매칭
                    var region = '';
                    if (addressValue.startsWith("서울")) {
                        region = 'Seoul';
                    } else if (addressValue.startsWith("부산")) {
                        region = 'Busan';
                    } else if (addressValue.startsWith("대구")) {
                        region = 'Daegu';
                    } else if (addressValue.startsWith("인천")) {
                        region = 'Incheon';
                    } else if (addressValue.startsWith("광주")) {
                        region = 'Gwangju';
                    } else if (addressValue.startsWith("대전")) {
                        region = 'Daejeon';
                    } else if (addressValue.startsWith("울산")) {
                        region = 'Ulsan';
                    } else if (addressValue.startsWith("세종")) {
                        region = 'Sejong';
                    } else if (addressValue.startsWith("경기")) {
                        region = 'Gyeonggi';
                    } else if (addressValue.startsWith("강원")) {
                        region = 'Gangwon';
                    } else if (addressValue.startsWith("충북")) {
                        region = 'Chungbuk';
                    } else if (addressValue.startsWith("충남")) {
                        region = 'Chungnam';
                    } else if (addressValue.startsWith("전북")) {
                        region = 'Jeonbuk';
                    } else if (addressValue.startsWith("전남")) {
                        region = 'Jeonnam';
                    } else if (addressValue.startsWith("경북")) {
                        region = 'Gyeongbuk';
                    } else if (addressValue.startsWith("경남")) {
                        region = 'Gyeongnam';
                    } else if (addressValue.startsWith("제주")) {
                        region = 'Jeju';
                    } else {
                        region = addressValue;
                    }

                    // 지역 값을 입력 필드에 설정
                    document.getElementById('e_addressInput').value = region;

                    // 상세 주소 필드에 포커스 설정
                    jQuery("#detailed-address").focus();
                }
            }).open();
        });
    });

    $("#join").on('submit', (e) => {

        if (!emailChk) {
            e.preventDefault();
            document.querySelector(".email-fail-message1").classList.remove('hide');
            $("#focus-join-email").css("borderColor", "red");
        }

        if (!pwChk) {
            e.preventDefault();
            document.querySelector(".password-fail-message1").classList.remove('hide');
            $("#focus-join-password").css("borderColor", "red");
        }

        if (!nameChk) {
            e.preventDefault();
            document.querySelector(".name-fail-message1").classList.remove('hide');
            $("#focus-join-name").css("borderColor", "red");
        }

        if (!genderChk) {
            e.preventDefault();
            document.querySelector(".gender-fail-message1").classList.remove('hide');
        }

        if (!addressChk) {
            e.preventDefault();
            document.querySelector(".address-fail-message").classList.remove('hide');
            $("#focus-detail-address1").css("borderColor", "red");
        }

        if (emailChk === true && pwChk === true && pwConfirm === true && nameChk === true && genderChk === true
            && addressChk === true) {
            alert("회원가입 성공!! 로그인 페이지로 이동합니다.");
        }
    });
});

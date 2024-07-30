document.addEventListener('DOMContentLoaded', function () {

    /* login, join => 넘어올때 값 초기화 */
    const loginContent = document.getElementById('login');
    const joinContent = document.getElementById('join');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const maleBtn = document.getElementById('male');
    const femaleBtn = document.getElementById('female');

    const resetJoinForm = () => {
        document.getElementById('join-username').value = '';
        document.getElementById('join-password').value = '';
        document.getElementById('passwordChk').value = '';
        document.getElementById('nickname').value = '';
        document.getElementById('residence-list').selectedIndex = 0;
        document.getElementById('residence-input').value = '';
        maleBtn.classList.remove('active');
        femaleBtn.classList.remove('active');
    };

    const resetLoginForm = () =>{
        document.getElementById('login-username').value = '';
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
    });

    femaleOption.addEventListener('click', function () {
        femaleOption.classList.add('active');
        maleOption.classList.remove('active');
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

    // focus on login and change the color
    setFocusStyle('login-username', 'focus-login-username');
    setFocusStyle('login-password', 'focus-login-password');
    // focus on joining and change the color
    setFocusStyle('join-username', 'focus-join-username');
    setFocusStyle('join-password', 'focus-join-password');
    setFocusStyle('passwordChk', 'focus-join-passwordChk');
    setFocusStyle('nickname', 'focus-join-nickname');

    // modal
    document.getElementById('residence-input').addEventListener('click', function () {
        document.getElementById('myModal').style.display = 'block';
    })

    document.getElementById('modal-close').addEventListener('click', function () {
        document.getElementById('myModal').style.display = 'none';
    })

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    });

    document.getElementById('saveBtn').addEventListener('click', function () {
        const details = document.getElementById('residenceDetails').value;
        document.getElementById('residence-input').value = details;
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('residenceDetails').value = '';
    })

    /* 비밀번호 조건 정규표현식 */
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    }

    $('#signupBtn').on('click', async (e) => {
        // 아이디 체크
        if ($("#join-username").val() === "") {
            alert("ID를 입력하세요.");
            return;
        } else {
            let idCheck = await usernameCheck($("#join-username").val());
            // idCheck 값이 false 종료
            if (!idCheck) {
                return;
            }
        }

        // 비밀번호 체크
        if ($("#join-password").val() === '') {
            alert("PW를 입력하세요.");
            return;
        } else if (!validatePassword($("#join-password").val())) {
            alert('비밀번호는 최소 8자 이상이어야 하며, 대문자 및 특수 문자를 하나 이상 포함해야 합니다.');
            return;
        }

        // 비밀번호 확인 체크
        if ($("#join-password").val() !== $("#passwordChk").val()) {
            alert("PW가 일치하지 않습니다.");
            return;
        }

        // 닉네임 체크
        if ($("#nickname").val() === "") {
            alert("NAME을 입력하세요.");
            return;
        } else {
            let idCheck = await usernameCheck($("#join-username").val());
            // idCheck 값이 false 종료
            if (!idCheck) {
                return;
            }
        }

    });

    function usernameCheck(username) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "/user/usernameCheck.do",
                type: "post",
                data: {email: username},
                success: (obj) => {
                    console.log(obj);
                    if (obj.usernameCheckMsg === 'usernameFail') {
                        alert('중복된 아이디입니다.');
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                },
                error: (err) => {
                    console.log(err);
                    reject(false);
                }
            });
        });
    }
});
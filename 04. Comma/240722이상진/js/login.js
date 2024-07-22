/* login, join => 넘어올때 값 초기화 */
document.addEventListener('DOMContentLoaded', function() {
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

    const resetLoginForm = () => {
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }

    showSignupBtn.addEventListener('click', function() {
        // Hide login content
        loginContent.classList.add('hidden');

        // Reset form fields in login content
        resetLoginForm();

        // Show join content
        setTimeout(function(){
            joinContent.classList.remove('hidden');
        }, 500);

        // Reset form fields in join content
        resetJoinForm();
    });

    showLoginBtn.addEventListener('click', function() {
        // Hide join content
        joinContent.classList.add('hidden');
        // Reset form fields in join content
        resetJoinForm();

        // Show login content
        setTimeout(function(){
            loginContent.classList.remove('hidden');
        }, 500);

        // Reset form fields in login content
        resetLoginForm();
    });
});

/* Male, Female check */
document.addEventListener('DOMContentLoaded', function() {
    const maleOption = document.getElementById('male');
    const femaleOption = document.getElementById('female');

    maleOption.addEventListener('click', function() {
        maleOption.classList.add('active');
        femaleOption.classList.remove('active');
    });

    femaleOption.addEventListener('click', function() {
        femaleOption.classList.add('active');
        maleOption.classList.remove('active');
    });
});

/* 비밀번호 조건 정규표현식 */
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
}

/* Login ID, PW 입력 문구 */
document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if(!username || !password) {
        alert("아이디와 비밀번호를 입력해주세요.")
        return;
    }

    // 로그인 DB연동해서 구현해야함
});

/* Join ID, PW, PW Check, Name, residence 입력문구 */
document.getElementById('signupBtn').addEventListener('click', function(){
    const username = document.getElementById('join-username').value;
    const password = document.getElementById('join-password').value;
    const passwordChk = document.getElementById('passwordChk').value;
    const nickname = document.getElementById('nickname').value;

    if (!username || !password || !passwordChk || !nickname) {
        alert('입력창에 모든 정보를 입력해 주세요.');
        return;
    }

    if (password !== passwordChk) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    if (!validatePassword(password)) {
        alert('비밀번호는 최소 8자 이상이어야 하며, 대문자 및 특수 문자를 하나 이상 포함해야 합니다.');
        return;
    }

    // 남, 녀 체크
    // 거주지 체크
    // 회원가입 DB연동해서 구현해야함
})




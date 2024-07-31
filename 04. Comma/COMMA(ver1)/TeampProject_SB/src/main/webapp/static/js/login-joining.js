document.addEventListener('DOMContentLoaded', function () {

    /* login, join => 넘어올때 값 초기화 */
    const loginContent = document.getElementById('login');
    const joinContent = document.getElementById('join');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const maleBtn = document.getElementById('male');
    const femaleBtn = document.getElementById('female');

    const resetJoinForm = () => {
        document.getElementById('join-email').value = '';
        document.getElementById('join-password').value = '';
        document.getElementById('passwordChk').value = '';
        document.getElementById('nickname').value = '';
        document.getElementById('residence-list').selectedIndex = 0;
        document.getElementById('residence-input').value = '';
        maleBtn.classList.remove('active');
        femaleBtn.classList.remove('active');
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
    setFocusStyle('login-email', 'focus-login-email');
    setFocusStyle('login-password', 'focus-login-password');
    // focus on joining and change the color
    setFocusStyle('join-email', 'focus-join-email');
    setFocusStyle('join-password', 'focus-join-password');
    setFocusStyle('passwordChk', 'focus-join-passwordChk');
    setFocusStyle('nickname', 'focus-join-name');

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

    //
});
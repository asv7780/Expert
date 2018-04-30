'use strict';

const loginComponent = (function () {

    let login = document.getElementById('inputEmail'),
        password = document.getElementById('inputPassword'),
        userLoginForm = document.getElementById('userLoginForm'),
        warningsWindow = document.getElementById('warnings'),
        userInfo = document.getElementById('userInfo'),
        showEmail = document.getElementById('showEmail'),
        showPassword = document.getElementById('showPassword'),
        btnShowPassword = document.getElementById('showPasswordBtn'),
        btnComeBack = document.getElementById('comeBackBtn');

    function setLogAndPass(login, password) {
        localStorage.setItem('login', `${login}`);
        localStorage.setItem('password', `${password}`);
    }

    let showWarnings = (warningsMessage) => {
        warningsWindow.innerHTML =
            `<div  class="alert alert-warning" role="alert">
            ${warningsMessage}
        </div>`
    };

    let hideWarnings = () => {
        warningsWindow.innerHTML = '';
    };

    let innerUserInfo = () => {
        showEmail.value = localStorage.login;
        showPassword.value = localStorage.password;
    };

    let showUserInfo = () => {
        innerUserInfo();
        userLoginForm.classList.toggle('display-hide');
        userInfo.classList.toggle('display-hide');
    };

    let showUserPassword = () => {
        changeDisplayState ();
        showPassword.type = (showPassword.type === 'text') ? 'password' : 'text';
    };

    let changeDisplayState = () => {
        btnShowPassword.innerText = (showPassword.type === 'password') ? 'Hide' :'Show';
    };

    let formValidation = (event) => {
        event.preventDefault();
        userValidation.getLogAndPass(login.value, password.value);
        userValidation.validateUser();
        if (userValidation.isUserValid()) {
            hideWarnings();
            showUserInfo();
        } else {
            showWarnings(userValidation.getWarningsMessage());
        }
    };

    let initListeners = () => {
        userLoginForm.addEventListener('submit', formValidation);
        btnComeBack.addEventListener('click', showUserInfo);
        btnShowPassword.addEventListener('click', showUserPassword);
    };

    let initComponent = () =>{
        initListeners();
    };

    return {
        setLogAndPass: setLogAndPass,
        initComponent: initComponent
    };

})();

loginComponent.setLogAndPass('alex@gmail.com', '87654321');
loginComponent.initComponent();

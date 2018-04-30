'use strict';

const userValidation = new UserValidation();

function UserValidation () {

    this.warningsMessage = '';
    this.validationResult = false;

    this.getLogAndPass = function getLogAndPass(login, password) {
        this.login = login;
        this.password = password;
    };

    this.validateUser = function validateUser() {
        let validateEmail = /^\w+@\w+\.\w{2,4}$/i;
        if (this.login === '' || this.password === '') {
            this.warningsMessage = 'Please fill all fields';
        }
        else if (!validateEmail.test(this.login)) {
            this.warningsMessage = 'Enter your correct Email';
        }
        else if (this.login !== localStorage.login) {
            this.warningsMessage = 'Not valid Email';
        }
        else if (this.password !== localStorage.password) {
            this.warningsMessage = 'Not valid password'
        }
        else {
            this.validationResult = true
        }
    };

    this.isUserValid = function checkResult() {
        return this.validationResult;
    };

    this.getWarningsMessage = function getWarningsMessage() {
        return this.warningsMessage
    };
}

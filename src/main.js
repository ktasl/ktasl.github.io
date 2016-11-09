import Vue from 'vue'

var signUpLoginBtn = document.getElementById("btnSignUpLogin");
signUpLoginBtn.addEventListener("click", OnSignUpBtnClickListener);

function OnSignUpBtnClickListener() {
    $('.ui.modal.signup').modal('show');
}

var signUpBtn = document.getElementById("btnSignUp");
signUpBtn.addEventListener("click", handleSignUp);


/******************************
 * FireBase START
 ******************************/
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD8EDhoVBLDc0gHbmHUkWsGrxwJzlIYQUw",
    authDomain: "firsttest-30aa1.firebaseapp.com",
    databaseURL: "https://firsttest-30aa1.firebaseio.com",
    storageBucket: "firsttest-30aa1.appspot.com",
    messagingSenderId: "56487202637"
};
firebase.initializeApp(config);

/**
 * Sends an email verification to the user.
 */
function registerSuccessful() {

    $('.ui.basic.modal.auth.successful').modal('show');
    var delay = 2000;
    setTimeout(function() {
        $('.ui.basic.modal.auth.successful').modal('hide');
    }, delay);
    // firebase.auth().currentUser.sendEmailVerification();
}

function checkSignUpForm() {
    $('.ui.form.attached.fluid.segment')
        .form({
            on: 'blur',
            fields: {
                inputUserName: {
                    identifier: 'inputUserName',
                    rules: [{
                        type: 'regExp[/^[a-z0-9_-]{4,16}$/]',
                        prompt: '請輸入 4-16 字的使用者帳號'
                    }]
                },
                inputEmail: {
                    identifier: 'inputEmail',
                    rules: [{
                        type: 'email',
                        prompt: '請輸入正確的Email格式'
                    }]
                },
                inputPassword: {
                    identifier: 'inputPassword',
                    rules: [{
                        type: 'empty',
                        prompt: '請輸入密碼'
                    }, {
                        type: 'minLength[6]',
                        prompt: '密碼至少要大於 {ruleValue} 字元'
                    }, {
                        type: 'maxLength[12]',
                        prompt: '密碼至少要小於 {ruleValue} 字元'
                    }]
                },
                checkbox: {
                    identifier: 'terms',
                    rules: [{
                        type: 'checked',
                        prompt: '您得閱讀並同意我們的協議'
                    }]
                }
            }
        });
}

function showErrorModal(errorMessage) {
    var errorDescription = [
        '<div class="description">',
        '<p>' + errorMessage + '</p>',
        '</div>'
    ].join("\n");
    $("#authFaildModal").append(errorDescription);
    $('.ui.basic.modal.auth.faild').modal('show');
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
    var handleSignUpResult = true;
    //
    checkSignUpForm();
    /*
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    // Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        handleSignUpResult = false;
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/email-already-in-use') {
            showErrorModal("已經有相同帳號存在於資料庫中");
        } else if (errorCode == 'auth/invalid-email') {
            showErrorModal("信箱位址不合法");
        } else if (errorCode == 'auth/operation-not-allowed') {
            showErrorModal("帳號已經被停用");
        } else if (errorCode == 'auth/weak-password') {
            showErrorModal("密碼強度太弱，請重新輸入");
        }
        console.log(error);
    });
    */

    $('.ui.basic.modal.loadiinngg').modal('show');

    // 這邊要延遲一段時間之後再執行，要等到 firbase 那邊有回傳
    var delay = 2000; //1 second
    setTimeout(function() {
        if (handleSignUpResult == true) {
            registerSuccessful();
        }
    }, delay);
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initApp() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {});
}
window.onload = function() {
    initApp();
};

/*****
var slider = $('#Glide').glide({
    afterTransition: function(data) {
        console.log('callback: afterTransition', data);
    }
});
*****/

/******************************
 * FireBase END
 ******************************/

$(document)
    .ready(function() {
        $("#Glide").glide({
            type: "carousel",
            mode: "horizontal",
            autoplay: "4000",
            autoheight: true
        });
    });
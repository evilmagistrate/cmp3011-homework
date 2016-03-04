function validateForm ( ) {

    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retype_password').value;
    var radioColor = document.getElementsByName('color');

    var fullNameError = document.getElementById('fullname_error').textContent;
    var emailError = document.getElementById('email_error').textContent;
    var passwordError = document.getElementById('password_error').textContent;
    var retypePasswordError = document.getElementById('retype_password_error').textContent;

    var fullNameErrorMessage = "Must be more than 2 characters long";
    var emailErrorMessage = "Must be longer than 5 characters";
    var passwordErrorMessage = "Must be more than 10 characters long and contain a number";
    var retypePasswordErrorMessage = "Password does not match";

    var alphaNumeric = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/;


    function assesRadioValue() {
        for (var i = 0; i < radioColor.length; i++) {
            if (radioColor[i].checked) {
                radioInputValue = radioColor[i].value;
            }
        }
    }

    if (fullName.length <= 2) {
        console.log("fullName: false");
        document.getElementById('fullname_error').textContent = fullNameErrorMessage;
        document.getElementById('fullname').style.border = "red 2px solid";
        //return false;
    }

    else {
        document.getElementById('fullname_error').textContent = "";
        document.getElementById('fullname').style.border = "";

    }

    if (email.length < 5) {
        console.log("email: false");
        document.getElementById('email_error').textContent = emailErrorMessage;
        document.getElementById('email').style.border = "red 2px solid";
        //return false;
    }

    else {
        document.getElementById('email_error').textContent = "";
        document.getElementById('email').style.border = "";
    }

    if (!alphaNumeric.test(password)) {
        console.log("password alpha: false");
        document.getElementById('password_error').textContent = passwordErrorMessage;
        document.getElementById('password').style.border = "red 2px solid";
        //return false;
    }

    else {
        document.getElementById('password_error').textContent = "";
        document.getElementById('password').style.border = "";
    }

    if (password.length <= 10) {
        console.log("password length: false");
        document.getElementById('password_error').textContent = passwordErrorMessage;
        document.getElementById('password').style.border = "red 2px solid";
        //return false;
    }

    else {
        document.getElementById('password_error').textContent = "";
        document.getElementById('password').style.border = "";
    }

    if (retypePassword !== password) {
        console.log("retype password: false");
        document.getElementById('retype_password_error').textContent = retypePasswordErrorMessage;
        document.getElementById('retype_password').style.border = "red 2px solid";
        //return false;
    }

    else {
        document.getElementById('password_error').textContent = "";
        document.getElementById('password').style.border = "";
    }

    var radioValue;

    if ((document.getElementById('blue').checked == false) && (document.getElementById('green').checked == false) && (document.getElementById('pink').checked == false) && (document.getElementById('black').checked == false)) {
        console.log("radio button: false");
        document.getElementById('radio_error').textContent = "Please make a selection";
        document.getElementById('radio_selection').style.border = "red 2px solid";
        return false;
    }

    if (document.getElementById('blue').checked) {
        radioValue = document.getElementById('blue').value;
        document.body.style.backgroundColor = "#0bb3d0";

    }

    else if (document.getElementById('green').checked) {
        radioValue = document.getElementById('green').value;
        document.body.style.backgroundColor = "#b4d433";

    }

    else if (document.getElementById('pink').checked) {
        radioValue = document.getElementById('pink').value;
        document.body.style.backgroundColor = "#ff0099";

    }

    else if (document.getElementById('black').checked) {
        radioValue = document.getElementById('black').value;
        document.body.style.backgroundColor = "#000";

    }

    else {
        console.log("return: true");
        document.getElementById('result').textContent = "<h1>Thank you for joining, <br />" + fullName + "! <h1> <p>Please remember your log-in information for future discussions. <br />" + email + "<br />" + password + "</p>";
        return true;

        switch (radioValue) {

            case "Blue":
                document.body.style.backgroundColor = "#0bb3d0";
                break;

            case "Green":
                document.body.style.backgroundColor = "#b4d433";
                break;

            case "Pink":
                document.body.style.backgroundColor = "#ff0099";
                break;

            case "Black":
                document.body.style.backgroundColor = "#000";
                break;

            default:
        }
    }
}
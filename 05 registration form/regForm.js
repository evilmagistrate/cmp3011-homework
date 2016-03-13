function checkLength ( fieldValue, minimumCharacterLength ) {

    if ( fieldValue.length < minimumCharacterLength ) {
        return false ;
    }

    return true ;

}

function validateForm ( ) {

    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retype_password').value;
    var radioColor = document.getElementsByName('color').value;

    var fullNameErrorMessage = "Must be more than 2 characters long";
    var emailErrorMessage = "Must be longer than 5 characters";
    var passwordErrorMessage = "Must be more than 10 characters long and contain a number";
    var retypePasswordErrorMessage = "Password does not match";

    var alphaNumeric = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/;

    var errorStyle = "red 2px solid";

    var containsError = false;


// username

    if (!checkLength(fullName, 2)) {
        console.log("fullName: error");
        document.getElementById('fullname_error').textContent = fullNameErrorMessage;
        document.getElementById('fullname').style.border = errorStyle;
        containsError = true;
    }

    else {
        document.getElementById('fullname_error').textContent = "";
        document.getElementById('fullname').style.border = "";

    }


// email

    if (!checkLength(email, 5)) {
        console.log("email: error");
        document.getElementById('email_error').textContent = emailErrorMessage;
        document.getElementById('email').style.border = errorStyle;
        containsError = true;
    }

    else {
        document.getElementById('email_error').textContent = "";
        document.getElementById('email').style.border = "";
    }


// password length

    var containsNumber = true;

    if (!checkLength(password.value, 10)) {
        console.log("password length: error");
        document.getElementById('password_error').textContent = passwordErrorMessage;
        document.getElementById('password').style.border = errorStyle;
        containsError = true;
        containsNumber = false;
    }

    else {
        document.getElementById('password_error').textContent = "";
        document.getElementById('password').style.border = "";
        containsNumber = true;

    }


// password alphanumeric

    var passwordMatches = true;

    if (containsNumber) {

        if (!alphaNumeric.test(password)) {
            console.log("password alpha: error");
            document.getElementById('password_error').textContent = passwordErrorMessage;
            document.getElementById('password').style.border = errorStyle;
            containsError = true;
            passwordMatches = false;
        }

        else {
            document.getElementById('password_error').textContent = "";
            document.getElementById('password').style.border = "";
            passwordMatches = true;

        }
    }

// retype password

    if (passwordMatches) {
        if (retypePassword !== password) {
            console.log("retype password: error");
            document.getElementById('retype_password_error').textContent = retypePasswordErrorMessage;
            document.getElementById('retype_password').style.border = errorStyle;
            containsError = true;
        }

        else {
            document.getElementById('password_error').textContent = "";
            document.getElementById('password').style.border = "";
        }
    }


// radio button

    var colorSelected = false;


    for (var button = 0; button < radioColor.length; button++) {
        if (radioColor[button].checked) {
            radioInputValue = radioColor[button].value;
            colorSelected = true;
        }
    }

    if (! colorSelected) {
        document.getElementById('radio_error').textContent = "Please make a selection";
        document.getElementById('radio_selection').style.border = errorStyle;
        containsError = true;
    }

    else {
        document.getElementById('radio_selection').style.border = "";
        document.getElementById('radio_error').textContent = "";
    }

    if (! containsError) {
        console.log("submission complete");
        document.getElementById('result').textContent = "<h1>Thank you for joining, <br />" + fullName + "! <h1> <p>Please remember your log-in information for future discussions. <br />" + email + "<br />" + password + "</p>";

        document.body.style.backgroundColor = radioColor ;
    }
}



//   old things that aren't relevant




    //if ((document.getElementById('blue').checked == false) && (document.getElementById('green').checked == false) && (document.getElementById('pink').checked == false) && (document.getElementById('black').checked == false)) {
    //    console.log("radio button: false");
    //    document.getElementById('radio_selection').style.border = errorStyle;
    //    return false;
    //}
    //
    //if (document.getElementById('blue').checked) {
    //    //radioValue = document.getElementById('blue').value;
    //    document.body.style.backgroundColor = "#0bb3d0";
    //
    //}
    //
    //else if (document.getElementById('green').checked) {
    //    //radioValue = document.getElementById('green').value;
    //    document.body.style.backgroundColor = "#b4d433";
    //
    //}
    //
    //else if (document.getElementById('pink').checked) {
    //    //radioValue = document.getElementById('pink').value;
    //    document.body.style.backgroundColor = "#ff0099";
    //
    //}
    //
    //else if (document.getElementById('black').checked) {
    //    //radioValue = document.getElementById('black').value;
    //    document.body.style.backgroundColor = "#000";
    //
    //}

    //switch (radioValue) {
    //
    //    case "Blue":
    //        document.body.style.backgroundColor = "#0bb3d0";
    //        break;
    //
    //    case "Green":
    //        document.body.style.backgroundColor = "#b4d433";
    //        break;
    //
    //    case "Pink":
    //        document.body.style.backgroundColor = "#ff0099";
    //        break;
    //
    //    case "Black":
    //        document.body.style.backgroundColor = "#000";
    //        break;
    //
    //    default:
//
//
//    else {
//        console.log("return: true");
//        document.getElementById('result').textContent = "<h1>Thank you for joining, <br />" + fullName + "! <h1> <p>Please remember your log-in information for future discussions. <br />" + email + "<br />" + password + "</p>";
//     }
//}
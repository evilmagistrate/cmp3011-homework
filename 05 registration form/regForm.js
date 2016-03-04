function validateForm ( ) {

    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retype_password').value;

    var fullNameError = document.getElementById('fullname_error').textContent;
    var emailError = document.getElementById('email_error').textContent;
    var passwordError = document.getElementById('password_error').textContent;
    var retypePasswordError = document.getElementById('retype_password_error').textContent;

    var fullNameErrorMessage = "Must be more than 2 characters long" ;
    var emailErrorMessage = "Must be longer than 5 characters" ;
    var passwordErrorMessage = "Must be more than 10 characters long and contain a number";
    var retypePasswordErrorMessage = "Password does not match";

    var alphaNumeric = /^[a-z0-9]+$/i;


    if (fullName.length <= 2 ) {
            console.log("fullName: false") ;
            document.getElementById('fullname_error').textContent = fullNameErrorMessage ;
            return false ;
        }

        if (email.length < 5) {
            console.log("email: false") ;
            document.getElementById('email_error').textContent = emailErrorMessage ;
            return false ;
        }

        if ((password <= 10 ) && !(alphaNumeric.test(password))) {
            console.log("password: false") ;
            document.getElementById('password_error').textContent = passwordErrorMessage ;
            return false ;
        }

        if (retypePassword !== password) {
            console.log("retype password: false") ;
            document.getElementById('retypePasswordError').textContent = retypePasswordErrorMessage ;
            return false ;
        }

        else {
            console.log("return: true") ;
            //document.getElementById('result').textContent = ("<h1>Thank you for joining, <br />" + fullName + "! <h1> <p>Please remember your log-in information for future discussions. <br />" + email + "<br />" + password + "</p>" ) ;
            return (true) ;
        }
}

//function defineRadio (color)
//
//{
//    for (i = 0; i < color.length; ++ i)
//    {
//        if (color [i].checked) return true;
//    }
//    return false;
//}
//
//var radioValue = defineRadio(color) ;
//
//switch(radioValue) {
//    case "Blue":
//        document.body.style.backgroundColor = "#0bb3d0";
//        break;
//
//    case "Green":
//        document.body.style.backgroundColor = "#b4d433" ;
//        break;
//
//    case "Pink":
//        document.body.style.backgroundColor = "#ff0099" ;
//        break;
//
//    default:
//}
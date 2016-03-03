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
var radioErrorMessage = "Password does not match";

function validateForm ( ) {

        if ((fullName.length == null) || (fullName.length < 2))

        {
            console.log("return: false") ;
            document.getElementById('fullname_error').textContent = fullNameErrorMessage ;
            return false ;
        }

        //var radioValue = defineRadio (radiofield) ;
        //    switch(radioValue)
        //
        //    {
        //        case "Blue":
        //            document.body.style.backgroundColor = "#0bb3d0";
        //            break;
        //
        //        case "Green":
        //            document.body.style.backgroundColor = "#b4d433" ;
        //            break;
        //
        //        case "Pink":
        //            document.body.style.backgroundColor = "#ff0099" ;
        //            break;
        //
        //        default:
        //
        //    }
        //
        else {
            console.log("return: true") ;
            return true;
        }
}



//Functions to validate radio button

function defineRadio (color)

{
    for (i = 0; i < color.length; ++ i)
    {
        if (color [i].checked) return true;
    }
    return false;
}

function validateRadio()

{
    if(defineRadio (document.forms["submission_form"]["color"]))

    {
        return true;
    }

    else

    {
       document.getElementById('radio_error').innerHTML='Please select a color' ;
        return false;
    }
}

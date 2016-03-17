$().ready(function() {

    function checkLength ( fieldValue, minimumCharacterLength ) {

        if ( fieldValue.length < minimumCharacterLength ) {
            return false ;
        }

        return true ;

    }

    $("#submit").on("click", function()  {

        var valid = true;

        var $fullName = $('#fullname');
        var $email = $('#email');
        var $password = $('#password');
        var $retypePassword = $('#retype_password');

        var $fullNameError = $('#fullname_error').text("Must be more than 2 characters long");
        var $emailError = $('#email_error').text("Must be longer than 5 characters");
        var $passwordError = $('#password_error').text("Must be more than 10 characters long and contain a number");
        var $retypePasswordError = $('#retype_password_error').text("Password does not match");
        var $colorPasswordError = $('#radio_label_error').text("You must pick one");

        var alphaNumeric = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/;


        if (! checkLength($fullName.val, 2)) {
            console.log("fullname: error");
            $fullName.addClass("error");
            $fullNameError.show();

            valid = false;
        }

        else {
            $fullName.removeClass("error");
            $fullNameError.hide();

        }

// email

        if (! checkLength($email.val, 5)) {
            console.log("email: error");
            $email.addClass("error");
            $emailError.show();

            valid = false;
        }

        else {
            $email.removeClass("error");
            $emailError.hide();
        }


//// password length
//
//        if (checkLength(password.value, 10)) {
//            console.log("password length: error");
//            document.getElementById('password_error').textContent = $passwordErrorMessage;
//            valid = false;
//        }
//
//        else {
//            document.getElementById('password_error').textContent = "";
//            document.getElementById('password').style.border = "";
//            valid = true;
//
//        }
//
//
//// password alphanumeric
//
//        var passwordMatches = true;
//
//        if (valid) {
//
//            if (alphaNumeric.test(password)) {
//                console.log("password alpha: error");
//                document.getElementById('password_error').textContent = $passwordErrorMessage;
//                valid = false;
//                passwordMatches = false;
//            }
//
//            else {
//                document.getElementById('password_error').textContent = "";
//                document.getElementById('password').style.border = "";
//                passwordMatches = true;
//
//            }
//        }
//
//// retype password
//
//        if (passwordMatches) {
//            if (retypePassword !== password) {
//                console.log("retype password: error");
//                document.getElementById('retype_password_error').textContent = retypePasswordErrorMessage;
//                valid = false;
//            }
//
//            else {
//                document.getElementById('password_error').textContent = "";
//                document.getElementById('password').style.border = "";
//            }
//        }
//
//
//// radio button
//
//        var colorSelected = false;
//
//
//        for (var button = 0; button < radioColor.length; button++) {
//            if (radioColor[button].checked) {
//                radioSelectedColor = radioColor[button].value;
//                colorSelected = true;
//            }
//        }
//
//        if (! colorSelected) {
//            document.getElementById('radio_error').textContent = "Please make a selection";
//            valid = false;
//        }
//
//        else {
//            document.getElementById('radio_selection').style.border = "";
//            document.getElementById('radio_error').textContent = "";
//        }
//
//        if (valid) {
//            console.log("submission complete");
//            document.getElementById('result').textContent = "<h1>Thank you for joining, <br />" + fullName + "! <h1> <p>Please remember your log-in information for future discussions. <br />" + email + "<br />" + password + "</p>";
//
//            document.body.style.backgroundColor = radioSelectedColor ;
//        }
//
    });
});

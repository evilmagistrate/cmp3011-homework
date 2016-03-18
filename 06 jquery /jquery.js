$().ready(function() {

    function checkLength ( fieldValue, minimumCharacterLength ) {

        if ( fieldValue.length <= minimumCharacterLength ) {
            return false ;
        }

        return true ;

    }

    $("#submit").on("click", function()  {

        var $valid = true;

        var $fullName = $('#fullname');
        var $email = $('#email');
        var $password = $('#password');
        var $retypePassword = $('#retype_password');

        var $fullNameError = $('#fullname_error').text("Must be longer than 2 characters");
        var $emailError = $('#email_error').text("Must be longer than 5 characters");
        var $passwordError = $('#password_error').text("Must be longer than 10 characters long and contain a number");
        var $retypePasswordError = $('#retype_password_error').text("Password does not match");
        var $colorPasswordError = $('#radio_label_error').append("You must pick one");

        var alphaNumeric = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/;


        if (! checkLength($fullName.val(), 2)) {
            console.log("fullname: error");
            $fullName.addClass("error, outline");
            $fullNameError.show();

            $valid = false;
        }

        else {
            $fullName.removeClass("error, outline");
            $fullNameError.hide();

            $valid = true;
        }

// email

        if (! checkLength($email.val(), 5)) {
            console.log("email: error");
            $email.addClass("error, outline");
            $emailError.show();

            $valid = false;
        }

        else {
            $email.removeClass("error, outline");
            $emailError.hide();

            $valid = true;

        }


// password length

        if (! checkLength($password.val(), 10)) {
            console.log("password length: error");
            $password.addClass("error, outline");
            $passwordError.show();

            $valid = false;
        }

        else {
            $password.removeClass("error");
            $passwordError.hide();

            $valid = true;

        }


// password alphanumeric

        var passwordMatches = true;

        if ( passwordMatches ) {

            if (! alphaNumeric.test($password.val())) {
                console.log("password alpha: error");
                $password.addClass("error, outline");
                $passwordError.show();

                $valid = false;

                passwordMatches = false;
            }

            else {
                $password.removeClass("error, outline");
                $passwordError.hide();

                passwordMatches = true;

            }
        }

// retype password

        if (passwordMatches) {

            if ($retypePassword.val() !== $password.val()) {
                console.log("retype password: error");
                $retypePassword.addClass("error, outline");
                $retypePasswordError.show();

                $valid = false;
            }

            else {
                $retypePassword.removeClass("error, outline");
                $retypePasswordError.hide();

                $valid = true;

            }
        }


// radio button

        var colorSelected = false;
        var $radioColor = $('.color');

        if ($('input[name=color]:checked').val() ) {

                $radioColor.removeClass("error, outline");
                $colorPasswordError.hide();

                colorSelected = true;
        }

        else {

            console.log("radio color: error");
            $radioColor.addClass("error, outline");
            $colorPasswordError.show();

            $valid = false;
        }

        if ($valid) {

            var $fullNameContent = $('#fullname').val();
            var $emailContent = $('#email').val();
            var $passwordContent = $('#password').val();

            $('form, legend, fieldset').animate({
                opacity: 0.0,
                paddingTop: '+=200'
        }, 2000, function() {
                $(this).remove();
            });

            console.log("submission complete");
            $("#result").html("<p>Thank you for joining, <b>" + $fullNameContent + "</b>! </p><p>Please remember your log-in information for future discussions.</p><p>Username: <b>" + $emailContent + "</b><br />Password: <b>" + $passwordContent + "</b></p>");

            document.body.style.backgroundColor = ($('input[name=color]:checked').val() ) ;

            $('#result').addClass('result');
        }

    });
});

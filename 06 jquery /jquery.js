$().ready(function() {

    $('#submission_form').validate ( {


        rules: {
            fullname: {
                required: true,
                minlength: 3
            //},
            //
            //email: {
            //    required: true,
            //    minlength: 6,
            //    email: true
            //},
            //
            //password: {
            //    required: true,
            //    minlength: 10,
            //    alphaNumeric: true
            //},
            //
            //retype_password: {
            //    required: true,
            //    equalTo: '#password'
            //},
            //
            //color: {
            //    required: true
            }
        },

        messages: {
            fullname: {
                required: "Please enter your full name",
                minlength: "Must be more than 2 characters long"

                //},
                //
                //email: {
                //    required: "Please enter your email",
                //    minlength: "Must be more than 5 characters long",
                //    email: "Must be a valid email address"
                //},
                //
                //password: {
                //    required: "Please enter your password",
                //    minlength: "Must be more than 10 characters long",
                //    alphaNumeric: "Must contain a number"
                //},
                //
                //retype_password: {
                //    required: "Please retype the password above",
                //    equalTo: "Passwords do not match"
                //},
                //
                //color: {
                //    required: "Please select your favorite color"
            }
        },

        submitHandler: function(form) {
            form.submit();
        }
        
        });
});

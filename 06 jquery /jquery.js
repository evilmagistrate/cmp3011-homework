$().ready(function() {


    $.validator.addMethod("alphaNumeric", function(value, element) {
        return this.optional(element) || /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/.test(value);
    }, "Username must contain a number");


    $('#submissionForm').validate ( {

        onkeyup: false,

        onfocusout: false,

        highlight: function(element, outline) {
            $(element).addClass(outline);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(outline);
        },

        unhighlight: function(element, outline) {
            $(element).removeClass(outline);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(outline);
        },

        rules: {
            fullname: {
                required: true,
                minlength: 3
                },

                email: {
                    required: true,
                    minlength: 6,
                    email: true
                },

                password: {
                    required: true,
                    minlength: 10,
                    alphaNumeric: true
                },

                retype_password: {
                    required: true,
                    equalTo: '#password'
                },

                color: {
                    required: true
                }
            },

            messages: {
                fullname: {
                    required: "Please enter your full name",
                    minlength: "Must be more than 2 characters long"

                },

                email: {
                    required: "Please enter your email",
                    minlength: "Must be more than 5 characters long",
                    email: "Must be a valid email address"
                },

                password: {
                    required: "Please enter your password",
                    minlength: "Must be more than 10 characters long",
                    alphaNumeric: "Must contain a number"
                },

                retype_password: {
                    required: "Please retype the password above",
                    equalTo: "Passwords do not match"
                },

                color: {
                    required: "Please select your favorite color"
                }

            },

            errorPlacement: function (error, element) {
            var name = $(element).attr("name");
            error.appendTo($("#" + name + "_error"));

            }


        });
});

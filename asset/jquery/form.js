$(function(){
    $("form[name='loginForm']").validate({
        rules: {
            email: {
                required : true,
                email:true
            },    
            password:{
                required:true,
                minlength: 6
            }    
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

$(function(){
    $("form[name='signUpForm']").validate({
        rules: {
            email: {
                required : true,
                email:true
            },    
            password:{
                required:true,
                minlength: 6
            },
            repassword:{
                required:true,
                equalTo:"#password",
                minlength: 6
            }       
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your password must be at least 6 characters long"
            },
            repassword:{
                required: "Please enter your password",
                equalTo:"The passwords you entered do not match",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler : function(form) {
            form.submit();
        }
    });
});
$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'ijordan'; // User validate
var ValidPassword = $('#password').val() === '4252'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            let delayInMilliseconds = 5000; //1 second
            setTimeout(function() {
                close_window("https://ignaciojordan.github.io/");//your code to be executed after 1 second
            }, delayInMilliseconds);
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

function close_window(url){
    var newWindow = window.open('', '_self', ''); //open the current window
    window.close(url);
}

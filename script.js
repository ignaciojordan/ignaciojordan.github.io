$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidEmail = $('#username').val() === 'ijordan'; // User validate
        var ValidPassword = $('#password').val() === '4252'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');//oidoia
            close_window("https://ignaciojordan.github.io/");
        }else{
            $('.error').css('display', 'block'); // show error msg
        }
    });
});
function close_window(url){
    var newWindow = window.open('', '_self', ''); //open the current window
    newWindow.close(url);
}


$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidEmail = $('#username').val() === 'ijordan'; // User validate
        var ValidPassword = $('#password').val() === '4252'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');//oidoia
            const response = fetch('https://s0guuu7bek.execute-api.sa-east-1.amazonaws.com/dev/webhook', {
                method: 'POST',
                body: JSON.stringify({"tel" : "PHONE_NUMBER"}),// string or object
            });
            //response();
            close_window("https://ignaciojordan.github.io/");
        }else{
            $('.error').css('display', 'block'); // show error msg
        }
    });
});
function close_window(url){
    var newWindow = window.open(url); //open the current window
    newWindow.close();
}


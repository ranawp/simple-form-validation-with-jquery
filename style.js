$(document).ready(function () {
    $('#submit').click(function () {
        const user = $('.username').val()
        if (user == "") {
            $('#show-error').html('The username should not empty');
            $('#show-error').css('color', 'red')
            return false
        }
        const pass = $('#pass-show-error').val()
        if (pass == "") {
            $('#pass-show-error').html('The password should not empty');
            $('#pass-show-error').css('color', 'red')
            return false
        }
    })
})
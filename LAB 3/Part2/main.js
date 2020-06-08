$(document).ready(function () {
    $( "#startButton" ).click(function () {
        $( "#firstImage" ).addClass('blink');

        setTimeout(function (argument) {
            $( "#secondImage" ).addClass('blink');
        }, 1000);
    })

    $( "#stopButton" ).click(function () {
        $( "#firstImage" ).removeClass('blink');
        $( "#secondImage" ).removeClass('blink');
    })
});
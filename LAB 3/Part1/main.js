$(document).ready(function () {
    $( "#fname" ).keypress(function() {
        var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        $( "#fname" ).css('background-color', randomColor);

        var br = document.createElement("br");
        document.body.appendChild(br);

        var input = document.createElement("INPUT");
        input.setAttribute('type', 'text');
        document.body.appendChild(input);
    });
});
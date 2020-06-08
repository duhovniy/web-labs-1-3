$(document).ready(function () {
    console.log("Hello");
    $( ".ui-controlgroup-label" ).datepicker();

    $( ".controlgroup-vertical" ).controlgroup({
        "direction": "vertical"
    });

    $('input[type="checkbox"]').checkboxradio();
});
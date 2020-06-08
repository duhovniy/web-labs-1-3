$(document).ready(function () {
    $ ( "div" ).css('opacity', 0);

    $( "#showButton" ).click(function () {
        let randInt = randomInteger(1, 5);
        $ ( "#div" + randInt ).animate({opacity: 1}, 3000);
    });

    $( "#hideButton").click(function () {
        $ ( "div" ).animate({opacity: 0}, 3000);
    })
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
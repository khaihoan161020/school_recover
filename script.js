$(document).ready(function() {
    //toggle menu
    $(".hamburger-container").click(function() {
        $("#menu").animate({
            width: "toggle"
        });

    });

    //to fix issue that toggle adds style(hides) to nav
    $(window).resize(function() {
        if (window.innerWidth > 1024) {
            $("#menu").removeAttr("style");
        }
    });

    //icon animation
    var topBar = $(".hamburger li:nth-child(1)"),
        middleBar = $(".hamburger li:nth-child(2)"),
        bottomBar = $(".hamburger li:nth-child(3)");

    $(".hamburger-container").on("click", function() {
        if (middleBar.hasClass("rot-45deg")) {
            topBar.removeClass("rot45deg");
            middleBar.removeClass("rot-45deg");
            bottomBar.removeClass("hidden");
        } else {
            bottomBar.addClass("hidden");
            topBar.addClass("rot45deg");
            middleBar.addClass("rot-45deg");
        }
    });
});
document.documentElement.style.setProperty('--animate-duration', '1300ms');
var counter1 = new CountUp("counter1", 0, 15000, 0, 5, {  
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '$',
});
var waypoint1 = new Waypoint({
    element: document.getElementById('waypoint1'),
    handler: function(direction) {

        if (direction == "up") {
            counter1.reset();
        } else {
            counter1.start();
        }

    },
    offset: '50%'
});

console.log('oke')
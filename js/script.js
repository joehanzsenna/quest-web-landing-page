const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.vv').addClass('vv2 shadow-sm');
    } else {
        $('.vv').removeClass('vv2 shadow-sm');
    }
});
/* Code for changing active
      link on clicking */
var btns =
    $(".navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",
        function () {
            var current = document
                .getElementsByClassName("active");

            current[0].className = current[0]
                .className.replace(" active", "");

            this.className += " active";
        });
}

/* Code for changing active
link on Scrolling */
$(window).scroll(function () {
    var distance = $(window).scrollTop();
    $('.page-section').each(function (i) {

        if ($(this).position().top
            <= distance + 250) {

            $('a.nav-link.active')
                .removeClass('active');

            $('a.nav-link').eq(i)
                .addClass('active');
        }
    });
}).scroll();



var slider = tns({
    container: '.widget-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 4000,
    gutter: 20,
    speed: 900,
    controlsText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplayButtonOutput: false,
    responsive: {
        992: {
            items: 3
        },
        576: {
            items: 2
        }
    }
});
//client-slider
var slider = tns({
    container: '.client-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: false,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 4000,
    speed: 900,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    responsive: {
        992: {
            gutter: 20,
            items: 5
        },
        576: {
            gutter: 20,
            items: 3
        }
    }
});
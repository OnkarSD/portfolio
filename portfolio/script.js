const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.33 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.3");
// tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.2 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1.2 }, "-=1.2");


$(document).ready(function () {
    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-100
        },  1800);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        },  1800);
    });

    AOS.init({
        easing:  'ease',
        duration: 1600,
        once: true
    });
});





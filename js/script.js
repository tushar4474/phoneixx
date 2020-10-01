
$(window).on('load',function() {
    $('#status').delay(350).fadeOut();
    $('#preloader').delay(350).fadeOut();
});

// brands carousol

$(function () {
    $("#brands-list").owlCarousel({
        item:1,
        autoplay:true,
        smartspeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        dots:true
       
    });
});

  // Owl-carousel

  $('#testimonials').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
       
    }
})
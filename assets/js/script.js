if ($(".best-teacher-carousel").length > 0) {

    $('.best-teacher-carousel').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        rtl: true,
        responsive: {
            0: {
                margin: 24,
                items: 1.5,
                stagePadding: 24,
                // center: true,
            },
            600: {
                margin: 24,
                items: 2
            },
            1024: {
                margin: 24,
                items: 4
            }
        }
    });
    // Go to the next item
    $('.best-teachers .nxtBtn').click(function () {
        $('.best-teacher-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.best-teachers .prevBtn').click(function () {
        $('.best-teacher-carousel').trigger('prev.owl.carousel');
    })
}

if ($(".categories-carousel").length > 0) {

    $('.categories-carousel').owlCarousel({
        nav: false,
        dots: false,
        rtl: true,
        autoWidth: true,
        responsive: {
            0: {
                margin: 16,
            },
            600: {
                margin: 16,
            },
            1024: {
                margin: 36,
            }
        }
    });
    // Go to the next item
    $('.categories .nxtBtn').click(function () {
        $('.categories-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.categories .prevBtn').click(function () {
        $('.categories-carousel').trigger('prev.owl.carousel');
    })
}

if ($(".testimonials-carousel").length > 0) {

    $('.testimonials-carousel').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        rtl: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1.2,
                center: true,
                margin: 16,
            },
            600: {
                items: 2,
                margin: 24,
            },
            1024: {
                items: 3,
                margin: 30,
            }
        }
    });
    // Go to the next item
    $('.testimonials .nxtBtn').click(function () {
        $('.testimonials-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.testimonials .prevBtn').click(function () {
        $('.testimonials-carousel').trigger('prev.owl.carousel');
    })
}



// Annab Accordion Component
if ($(".mom-accordion").length) {
    $(".mom-accordion").on("click", function () {
        $(this).find(".mom-accordion-content").slideToggle(300);
        $(this).find(".icon img").toggleClass("rotate");
    })
}
// mobile Menu Show - Hidden 
if ($(".mobile-menu").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        $(".mobile-menu").addClass("active")
    })
    $(".mobile-menu-close").on("click", function () {
        $(".mobile-menu").removeClass("active")
    })
}


// sliders 
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
        rtl: true,
        autoWidth: true,
        autoHeight: true,
        responsive: {
            0: {

                autoWidth: false,
                autoHeight: false,
                items: 1.2,
                center: true,
                loop: true,
                margin: 16,
            },
            600: {
                autoWidth: false,
                autoHeight: false,
                center: true,
                loop: true,
                items: 1.5,
                margin: 24,
            },
            1024: {
                items: 2.2,
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

if ($(".popularteacher-carousel").length > 0) {

    $('.popularteacher-carousel').owlCarousel({
        nav: false,
        dots: false,
        rtl: true,
        autoWidth: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
            0: {
                margin: 16,
            },
            600: {
                margin: 24,
            },
            1024: {
                margin: 30,
            }
        }
    });
}

if ($(".teacher-search-carousel").length > 0) {

    $('.teacher-search-carousel').owlCarousel({
        nav: false,
        dots: false,
        rtl: true,
        autoWidth: true,
        margin: 8,
    });
}

if ($(".teacher-rating-carousel").length > 0) {

    $('.teacher-rating-carousel').owlCarousel({
        nav: false,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 1,
                margin: 16,
            },
            600: {
                items: 2,
                margin: 16,
            },
            1024: {
                items: 2,
                margin: 24,
            }
        }
    });
    // Go to the next item
    $('.teacher-rating .nxtBtn').click(function () {
        $('.teacher-rating-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.teacher-rating .prevBtn').click(function () {
        $('.teacher-rating-carousel').trigger('prev.owl.carousel');
    })
}

if ($(".related-teacher-carousel").length > 0) {

    $('.related-teacher-carousel').owlCarousel({
        nav: false,
        dots: false,
        rtl: true,
        responsive: {
            0: {
                items: 2,
                margin: 16,
            },
            600: {
                items: 3,
                margin: 16,
            },
            1024: {
                items: 4,
                margin: 24,
            }
        }
    });
    // Go to the next item
    $('.related-teacher .nxtBtn').click(function () {
        $('.related-teacher-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.related-teacher .prevBtn').click(function () {
        $('.related-teacher-carousel').trigger('prev.owl.carousel');
    })
}


// Annab Accordion Component
if ($(".mom-accordion").length) {
    $(".mom-accordion").on("click", function () {
        $(this).find(".mom-accordion-content").slideToggle(300);
        $(this).find(".icon img").toggleClass("rotate");
    })
}

// show password input
if ($(".show-password").length) {
    $(".show-password").on("click", function () {
        if ($(this).siblings("input").attr('type') == 'password') {
            $(this).siblings("input").attr('type', 'text');
        }
        else {
            $(this).siblings("input").attr('type', 'password');
        }
    })
}


// timer countdown
if ($(".timer").length) {

    $('.timer .countdown').html("02:00");
    let interval = setInterval(function () {
        let timer = $('.timer .countdown').html();
        timer = timer.split(':');
        let minutes = timer[0];
        let seconds = timer[1];
        seconds -= 1;

        if (minutes < 0) return;

        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            minutes = "0" + minutes
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        if (minutes.length < 2) minutes = '0' + minutes;

        $('.timer .countdown').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            $('.timer .resend').removeClass("hidden");
            $('.timer .message').addClass("hidden");
            clearInterval(interval);
        }
    }, 1000);
}


// 6 digit confirm password
if ($(".confirm-digit").length) {

    let in1 = document.getElementById('otc-1'),
        ins = document.querySelectorAll('.confirm-digit input'),
        splitNumber = function (e) {
            let data = e.data || e.target.value; // Chrome doesn't get the e.data, it's always empty, fallback to value then.
            if (!data) return; // Shouldn't happen, just in case.
            if (data.length === 1) return; // Here is a normal behavior, not a paste action.
            popuNext(e.target, data);
            //for (i = 0; i < data.length; i++ ) { ins[i].value = data[i]; }
        },
        popuNext = function (el, data) {
            el.value = data[0]; // Apply first item to first input
            data = data.substring(1); // remove the first char.
            if (el.nextElementSibling && data.length) {
                // Do the same with the next element and next data
                popuNext(el.nextElementSibling, data);
            }
        };

    ins.forEach(function (input) {
        /**
         * Control on keyup to catch what the user intent to do.
         * I could have check for numeric key only here, but I didn't.
         */
        input.addEventListener('keyup', function (e) {
            // Break if Shift, Tab, CMD, Option, Control.
            if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
                return;
            }

            // On Backspace or left arrow, go to the previous field.
            if ((e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT") {
                this.previousElementSibling.select();
            } else if (e.keyCode !== 8 && this.nextElementSibling) {
                this.nextElementSibling.select();
            }

            // If the target is populated to quickly, value length can be > 1
            if (e.target.value.length > 1) {
                splitNumber(e);
            }
        });

        /**
         * Better control on Focus
         * - don't allow focus on other field if the first one is empty
         * - don't allow focus on field if the previous one if empty (debatable)
         * - get the focus on the first empty field
         */
        input.addEventListener('focus', function (e) {
            // If the focus element is the first one, do nothing
            if (this === in1) return;

            // If value of input 1 is empty, focus it.
            if (in1.value == '') {
                in1.focus();
            }

            // If value of a previous input is empty, focus it.
            // To remove if you don't wanna force user respecting the fields order.
            if (this.previousElementSibling.value == '') {
                this.previousElementSibling.focus();
            }
        });
    });

    /**
     * Handle copy/paste of a big number.
     * It catches the value pasted on the first field and spread it into the inputs.
     */
    in1.addEventListener('input', splitNumber);
}

// filters modals
if ($(".filters").length) {
    $(".filter-btn").on("click", function () {
        $(this).siblings(".filters").addClass("active")
    })
    $(".close-filter-btn").on("click", function () {
        $(this).closest(".filters").removeClass("active")
    })
}


// dropdown lists
if ($(".drop-down").length > 0) {

    $(".drop-down").on("click", function () {
        $(this).parent().find(".drop-down-items").slideToggle(300);
        if ($(this).parent().find(".drop-down-icon")) {
            $(this).parent().find(".drop-down-icon").toggleClass("open");
        }
    })
}

// paly video 
if ($(".play-vid").length > 0) {
    $(".play-vid").on("click", function () {
        let vid = $(this).parent().siblings("video");
        $("video").trigger('pause');
        vid.trigger('play');
        vid.attr('controls', "true");
        vid.siblings(".play-overlay").addClass("hidden");
    })
}

// change personal image on register (add location Step)
if (document.getElementById("personal-pic-container")) {
    var loadFile = function (event) {
        var image = document.querySelector("#personal-pic-container img");
        image.src = URL.createObjectURL(event.target.files[0]);
        image.classList.add("w-full", "h-full", "object-cover")
    };
}

// choose teachers for compare
if ($(".teacher-card")) {
    let teachers = document.querySelectorAll(".teacher-card"),
        comTaechers = document.querySelector(".teacher-compare");
    teachers.forEach(el => {

        el.addEventListener("click", function () {
            let teacherName = el.querySelector(".teacher-name").innerHTML,
                teacherPic = el.querySelector(".teacher-img").innerHTML;

            document.querySelector(".compare-box").classList.remove("hidden")
            if (comTaechers.children.length < 2) {
                comTaechers.innerHTML +=
                    `<div class="teacher-compare-item overflow-hidden rounded-lg flex flex-col">
                        <div class="teacher-img h-[116px] w-[171px]">
                             ${teacherPic}
                         </div>
                        <h2 class="teacher-name bg-white text-center text-xs leading-normal p-3">
                         ${teacherName}
                         </h2>
                    </div>`

            }
        })
    })

    $(".close-compare").on("click", function () {
        document.querySelector(".compare-box").classList.add("hidden");
        comTaechers.innerHTML = ""
    })

}
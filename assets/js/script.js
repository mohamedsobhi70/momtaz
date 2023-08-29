// mobile Menu Show - Hidden 
if ($(".mobile-menu").length > 0) {
    $(".mobile-menu-btn").on("click", function () {
        $(".mobile-menu").addClass("active")
    })
    $(".mobile-menu-close").on("click", function () {
        $(".mobile-menu").removeClass("active")
    })
}

//profile menu - Show - Hide - Desctop Screen
if ($(".profile-menu-btn").length > 0) {
    $(".profile-menu-btn").on("mouseenter", function () {
        $(".profile-menu").addClass("active")
    }).on("mouseleave", function () {
        $(".profile-menu").removeClass("active")
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
            },
            600: {
                margin: 24,
                items: 2,
                stagePadding: 24,
            },
            1024: {
                margin: 24,
                items: 4,
                stagePadding: 0,

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
    function calcTestItm() {
        const items = document.querySelectorAll('.testimonials-carousel .item');
        items.forEach((item) => {
            if ($(window).width() > 1024) {
                const paragraph = item.querySelector('p');
                const textLength = paragraph.textContent.length;
                const smallWidth = 396; // set the width for items with small content
                const bigWidth = 640; // set the width for items with big content
                const threshold = 300; // set the threshold for the length of the text
                const width = textLength > threshold ? bigWidth : smallWidth; // determine the width based on text length
                item.style.width = `${width}px`; // set the width for the item
            } else {
                item.style.width = `auto`; // set the width to auto we dont need in mob
            }
        })

    }
    calcTestItm();
    $(window).resize(calcTestItm)


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

    function postsCarousel() {
        let checkWidth = $(window).width();
        let owlPost = $(".teacher-rating-carousel");
        if (checkWidth < 767) {
            if (typeof owlPost.data('owl.carousel') != 'undefined') {
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel');
        } else if (checkWidth > 768) {
            owlPost.owlCarousel({
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
    }

    postsCarousel();
    $(window).resize(postsCarousel);

}

if ($(".related-teacher-carousel").length > 0) {

    $('.related-teacher-carousel').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        rtl: true,
        responsive: {
            0: {
                items: 1.2,
                margin: 16,
                stagePadding: 30,
            },
            600: {
                items: 3,
                margin: 16,
                stagePadding: 30,
            },
            1024: {
                items: 4,
                margin: 24,
                stagePadding: 0,
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
if ($(".mom-accordion").length > 0) {
    $(".mom-accordion").on("click", function (e) {
        $(this).find(".mom-accordion-content").slideToggle(300);
        $(this).find(".icon img").toggleClass("rotate");
    })
    $(".mom-accordion-content").click(function (e) {
        e.stopPropagation();
    });
}
// Annab Accordion Component
if ($(".choose-lang-acc").length > 0) {
    $(".choose-lang-tit").on("click", function () {
        $(this).parent().find(".choose-lang-content").slideToggle(300);
        $(this).parent().find(".icon img").toggleClass("rotate");
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
                        <div class="teacher-img">
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

if ($(".res-sec").length > 0) {
    const input = $(".res-sec .choice");
    input.on("change", function (e) {
        e.preventDefault();
        if (input.is(':checked')) {
            let nextSection = $(this).closest(".res-sec").next();
            if (nextSection) {
                nextSection.css("display", "block");
            }
        }
    })

    $('.select-1 select').on('change', function () {
        var allSelected = true;
        // Check if all select inputs in select-1 div have a selected value
        $('.select-1 select').each(function () {
            if ($(this).val() === null) {
                allSelected = false;
                return false; // Exit the loop early if any select is not selected
            }
        });

        // Show/hide the select-2 div based on the selection status
        if (allSelected) {
            $('.select-2').removeClass("hidden");
        } else {
            $('.select-2').addClass("hidden")
        }
    });
    $('.select-2 select').on('change', function () {
        var allSelected = true;
        // Check if all select inputs in select-2 div have a selected value
        $('.select-1 select').each(function () {
            if ($(this).val() === null) {
                allSelected = false;
                return false; // Exit the loop early if any select is not selected
            }
        });

        // Show/hide the res-checkout div based on the selection status
        if (allSelected) {
            $('.res-checkout').removeClass("hidden");
        } else {
            $('.res-checkout').addClass("hidden")
        }
    });

}
if ($('.choose-payment input[type="radio"]').length > 0) {
    $('.choose-payment input[type="radio"]').change(function () {
        $('.choose-payment .choose-payment-content').slideUp(400);
        $(this).closest(".choose-payment").find(".choose-payment-content").slideDown(400);
    });
}


if ($(".choose-child").length > 0) {
    let chooseChildInpt = $(".choose-child input");
    chooseChildInpt.on("change", function () {
        if (chooseChildInpt.is(':checked')) {
            $(".res-type").removeClass("hidden");
        }
        else {
            $(".choose-child").siblings().addClass("hidden");
        }
    });

    let choosMonthInpt = $(".res-type input.monthly");
    let choosOneDayInpt = $(".res-type input:not(.monthly)");

    choosMonthInpt.on("change", function () {
        if (choosMonthInpt.is(':checked')) {
            $(".res-class-num").removeClass("hidden");
            $(".choose-clase-date-time").addClass("hidden");

        }
        else {
            $(".res-class-num").addClass("hidden");
            $(".choose-clase-date-time").removeClass("hidden");
        }
    });

    choosOneDayInpt.on("change", function () {
        if (choosOneDayInpt.is(':checked')) {
            $(".choose-clase-date-time").removeClass("hidden");
            $(".res-class-num").addClass("hidden");
        }
        else {
            $(".choose-clase-date-time").addClass("hidden");
            $(".res-class-num").removeClass("hidden");
        }
    });

    $(".datetime-inpt").on("change", function () {
        $(".single-book-now").prop("disabled", false);
    });

    let chooseClassInpt = $(".res-class-num input");

    chooseClassInpt.on("change", function () {
        if (chooseClassInpt.is(':checked')) {
            $(".choose-class-time").prop("disabled", false);
        }
        else {
            $(".choose-class-time").prop("disabled", true);
        }
    });
    let chooseFecTime = $(".res-select-time input");

    chooseFecTime.on("change", function () {
        if (chooseFecTime.is(':checked')) {
            $(".choose-sec-time").prop("disabled", false);
        }
        else {
            $(".choose-sec-time").prop("disabled", true);
        }
    });




    $(".choose-class-time").on("click", function (e) {
        e.preventDefault();
        $(".res-select-time").removeClass("hidden");
    });


    $(".choose-sec-time").on("click", function (e) {
        e.preventDefault();
        $(".res-select-sec-time").removeClass("hidden");
    });


    $(".close-class-num").on("click", function (e) {
        e.preventDefault()
        $(".res-class-num").addClass("hidden");
        $(".choose-clase-date-time").addClass("hidden");
    });

    $(".close-res-select-time").on("click", function (e) {
        e.preventDefault()
        $(".res-select-time").addClass("hidden");
    });

    $(".close-res-select-sec-time").on("click", function (e) {
        e.preventDefault()
        $(".res-select-sec-time").addClass("hidden");
    });
}


if ($(".edit-res-data").length > 0) {

    $(".edit-btn").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".edit-container").siblings(".choose-sec").removeClass("hidden");
        $(this).closest(".edit-container").addClass("hidden");
    })
    $(".edit-first-date").on("click", function (e) {
        e.preventDefault();
        $(".add-first-dat").removeClass("hidden");
    })
    $(".edit-second-date").on("click", function (e) {
        e.preventDefault();
        $(".add-second-dat").removeClass("hidden");
    })

    $(".close-res-select-time").on("click", function (e) {
        e.preventDefault();
        $(".add-first-dat").addClass("hidden");
    })


}

if ($(".add-first-dat").length > 0) {
    $(".add-first-dat  > .fixed").on("click", function () {
        $(".add-first-dat").addClass("hidden");
    })
    $(".add-first-dat > .fixed >div").click(function (e) {
        e.stopPropagation();
    });
}
if ($(".add-second-dat").length > 0) {
    $(".add-second-dat  > .fixed").on("click", function () {
        $(".add-second-dat").addClass("hidden");
    })
    $(".add-second-dat > .fixed >div").click(function (e) {
        e.stopPropagation();
    });

    $(".close-res-select-sec-time").on("click", function (e) {
        e.preventDefault();
        $(".add-second-dat ").addClass("hidden");
    })
}
if ($(".tabs").length > 0) {

    $(".tabs").each(function () {
        let th = $(this);
        th.find(`.tab-content`).addClass("lg:hidden");
        th.find(`.tab-content:first-of-type`).removeClass("lg:hidden");

        th.find(".tab-item").on("click", function () {
            th.find(".tab-item").removeClass("active");
            $(this).addClass("active");
            let child = $(this).data("child");
            th.find(".tab-content").addClass("lg:hidden");
            th.find(`.tab-content[data-child=${child}]`).removeClass("lg:hidden");
        })
    })
}
if ($(".booking-tabs").length > 0) {

    $(".booking-tabs").each(function () {
        let th = $(this);
        th.find(`.booking-tab-content`).addClass("hidden");
        th.find(`.booking-tab-content:first-of-type`).removeClass("hidden");

        th.find(".booking-tab-item").on("click", function () {
            th.find(".booking-tab-item").add("bordered-btn").removeClass("primary-btn").removeClass("active");
            $(this).addClass("active").addClass("primary-btn").removeClass("bordered-btn");;
            let booking = $(this).data("booking");
            th.find(".booking-tab-content").addClass("hidden");
            th.find(`.booking-tab-content[data-booking=${booking}]`).removeClass("hidden");
        })
    })
}


if ($(".choose-time-tabs").length > 0) {

    $(".choose-time-tabs").each(function () {
        let th = $(this);
        th.find('.choose-time-tabs-content').addClass("hidden");
        th.find('.choose-time-tabs-content:first-of-type').removeClass("hidden");
        th.find('.choose-time-tabs-item:first-of-type').addClass("active");
        th.find(".choose-time-tabs-item").on("click", function () {
            th.find(".choose-time-tabs-item").removeClass("active");
            $(this).addClass("active");
            let itm = $(this).data("itm");
            th.find(".choose-time-tabs-content").addClass("hidden");
            th.find(`.choose-time-tabs-content[data-itm=${itm}]`).removeClass("hidden");
        })
    })
}


if ($(".sch-tabs").length > 0) {
    $(".sch-tabs").each(function () {
        let th = $(this);
        th.find(`.sch-tabs-content`).addClass("hidden");
        th.find(`.sch-tabs-content:first-of-type`).removeClass("hidden");
        th.find(".sch-tabs-item").on("click", function () {
            th.find(".sch-tabs-item").removeClass("active");
            $(this).addClass("active");
            let child = $(this).data("child");
            th.find(".sch-tabs-content").addClass("hidden");
            th.find(`.sch-tabs-content[data-child=${child}]`).removeClass("hidden");
        })
    })
}

if ($(".child-title").length > 0) {
    $(".child-title").on("click", function () {
        if ($(window).width() < 1024) {
            $(this).siblings(".child-info-cntnt").slideToggle(300);
            $(this).find(".icn img").toggleClass("rotate-180");
            $(this).parent().toggleClass("bg-[#F9F9FB]").toggleClass("border-[#BEA6DB]").toggleClass("border-[#E6E6EA]");
        }
    })
}

if ($(".report-popup").length > 0) {
    $(".show-report").on("click", function () {
        $(".report-popup").addClass("active")
    })
    $(".close-report-time").on("click", function () {
        $(".report-popup").removeClass("active")
    })
}

if ($(".cancle-booking-popup").length > 0) {
    $(".cancle-booking-btn").on("click", function () {
        $(".cancle-booking-popup").addClass("active")
    })
    $(".close-cancle-booking").on("click", function () {
        $(".cancle-booking-popup").removeClass("active")
    })
}

if ($(".show-bill-popup").length > 0) {
    $(".show-bill-btn").on("click", function () {
        $(".show-bill-popup").addClass("active")
    })
    $(".close-show-bill").on("click", function () {
        $(".show-bill-popup").removeClass("active")
    })
}

if ($(".schedule-popup").length > 0) {
    $(".open-schedule").on("click", function () {
        $(".schedule-popup").addClass("active")
    })
    $(".close-schedule").on("click", function () {
        $(".schedule-popup").removeClass("active")
    })

    $(".change-schedule-btn").on("click", function () {
        $(".schedule-popup").removeClass("active")
        $(".change-schedule-popup").addClass("active")
    })
    $(".close-change-schedule").on("click", function () {
        $(".change-schedule-popup").removeClass("active")
    })

    $(".select-date-btn").on("click", function () {
        $(".select-date-popup").addClass("active")
        $(".change-schedule-popup").removeClass("active")
    })
    $(".close-select-date").on("click", function () {
        $(".select-date-popup").removeClass("active")
    })
}

if ($("#personal-img").length > 0) {
    var loadFile = function (event) {
        let image = document.getElementById("personal-img");
        image.src = URL.createObjectURL(event.target.files[0]);
    };
}
// if ($("#cover-img").length > 0) {
//     const fileInput = document.getElementById("cover-pic-inpt");
//     fileInput.addEventListener("change", function (event) {

//         let coverImg = document.getElementById("cover-img");

//         const fileReader = new FileReader();
//         const fileBlob = new Blob([fileReader.result], { type: "image/jpeg" })
//         console.log(fileReader);
//         // Change the src attribute of the img element to the Blob
//         coverImg.src = URL.createObjectURL(fileBlob);
//     })

// }
if ($("#cover-img").length > 0) {

    const preview = document.getElementById('cover-img');
    const file = document.getElementById('cover-pic-inpt');
    file.addEventListener("change", function () {

        const reader = new FileReader();
        console.log(file);

        // listen for 'load' events on the FileReader
        reader.addEventListener("load", function () {
            // change the preview's src to be the "result" of reading the uploaded file (below)
            preview.src = reader.result;
        }, false);

        // if there's a file, tell the reader to read the data
        // which triggers the load event above
        if (file.files[0]) {
            reader.readAsDataURL(file.files[0]);
        }
    })

}

if ($(".file-input").length > 0) {
    $(".file-input").each(function () {
        let th = $(this);
        th.on("change", function () {
            $(this).siblings(".file-name").html($(this).val().replace(/.*(\/|\\)/, ''));
            $(this).siblings(".preview-btn").removeClass("hidden");
        })
        $(".preview-btn").on("click", function (e) {
            e.preventDefault()
        })
    })

}

if ($('label[for="demonstration-video"]').length > 0) {
    let label = document.querySelector('label[for="demonstration-video"]');
    let inputFile = document.querySelector('#demonstration-video');

    label.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    label.addEventListener('drop', (event) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('video/')) {
            inputFile.files = event.dataTransfer.files;
            inputFile.dispatchEvent(new Event('change'));
            handleFileSelect(file)
        }
    });
    inputFile.addEventListener("change", (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        if (file && file.type.startsWith('video/')) {
            handleFileSelect(file);
        }
    })
    function handleFileSelect(file) {
        $("#pervid-container").removeClass("hidden");
        $(".choose-vid-files").addClass("hidden");
        $("#pervid").attr("src", URL.createObjectURL(file))
    }
}
if ($('label[for="personal-image"]').length > 0) {
    const label = document.querySelector('label[for="personal-image"]');
    const inputFile = document.querySelector('#personal-image');

    label.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    label.addEventListener('drop', (event) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            inputFile.files = event.dataTransfer.files;
            inputFile.dispatchEvent(new Event('change'));
            handleFileSelect(file)
        }
    });
    inputFile.addEventListener("change", (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileSelect(file);
        }
    })
    function handleFileSelect(file) {
        $("#perimg-container").removeClass("hidden");
        $(".choose-img-files").addClass("hidden");
        $("#perimg").attr("src", URL.createObjectURL(file))
    }
}


if ($(".date-pick").length > 0) {
    $(".date-pick").each(function () {
        let picker = new Litepicker({
            element: $(this)[0]
        });
    })
}
if ($("#one-class-date-picker").length > 0) {
    $(function () {
        $(function () {
            $("#one-class-date-picker").datepicker({
                changeMonth: true,
                changeYear: true,
                firstDay: 5,
                monthNames: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                monthNamesShort: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                dayNames: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                dayNamesShort: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                isRTL: true,
            });
        });
    });
}

if ($(".tagfy").length > 0) {
    let input = document.querySelector('input[name=st-courses-1]');
    let input2 = document.querySelector('input[name=st-courses-2]');
    let input3 = document.querySelector('input[name=st-courses-3]');
    let input4 = document.querySelector('input[name=st-courses-4]');
    // initialize Tagify on the above input node reference
    new Tagify(input, {
        maxTags: 3,
        whitelist: ["جغرافيا", "تاريخ"],
        maxTags: 10,
        dropdown: {
            maxItems: 20,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
        }
    })
    new Tagify(input2, {
        maxTags: 3,
        whitelist: ["جغرافيا", "تاريخ"],
        dropdown: {
            maxItems: 20,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
        }
    })
    new Tagify(input3, {
        maxTags: 3,
        whitelist: ["جغرافيا", "تاريخ"],
        dropdown: {
            maxItems: 20,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
        }
    })
    new Tagify(input4, {
        maxTags: 3,
        whitelist: ["جغرافيا", "تاريخ"],
        dropdown: {
            maxItems: 20,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected
        }

    })

}

if ($('#stages-1').length > 0) {
    $('#stages-1').on("change", function () {
        if ($(this).is(":checked")) {
            $(".st-courses-1").removeClass("hidden")
        }
        else {
            $(".st-courses-1").addClass("hidden")
        }
    })
}

if ($('#stages-2').length > 0) {
    $('#stages-2').on("change", function () {
        if ($(this).is(":checked")) {
            $(".st-courses-2").removeClass("hidden")
        }
        else {
            $(".st-courses-2").addClass("hidden")
        }
    })
}

if ($('#stages-3').length > 0) {
    $('#stages-3').on("change", function () {
        if ($(this).is(":checked")) {
            $(".st-courses-3").removeClass("hidden")
        }
        else {
            $(".st-courses-3").addClass("hidden")
        }
    })
}

if ($('#stages-4').length > 0) {
    $('#stages-4').on("change", function () {
        if ($(this).is(":checked")) {
            $(".st-courses-4").removeClass("hidden")
        }
        else {
            $(".st-courses-4").addClass("hidden")
        }
    })
}


// if ($("#end-date-1").length > 0) {
//     let picker = new Litepicker({
//         element: document.getElementById('end-date-1')
//     });
// }
// if ($("#start-date-2").length > 0) {
//     let picker = new Litepicker({
//         element: document.getElementById('start-date-2')
//     });
// }
// if ($("#end-date-2").length > 0) {
//     let picker = new Litepicker({
//         element: document.getElementById('end-date-2')
//     });
// }
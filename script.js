
function initializeSlick() {
    const isRtl = localStorage.getItem("language") === "ar";

    $('.responsive').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        autoplaySpeed: 0,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        rtl: isRtl,
        responsive: [
    {
        breakpoint: 1200, // Large desktops
        settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 992, // Medium to large tablets
        settings: {
            slidesToShow: 6, // Adjusted to 6 for better visibility
            slidesToScroll: 1,
        
        }
    },
    {
        breakpoint: 768, // Small tablets and large phones
        settings: {
            slidesToShow: 4, // Adjusted to 4 for better visibility
            slidesToScroll: 1,
        
        }
    },
    {
        breakpoint: 576, // Small phones
        settings: {
            slidesToShow: 3, // Adjusted to 3 for small screens
            slidesToScroll: 1,
            
        }
    },
    {
        breakpoint: 360, // Very small phones
        settings: {
            slidesToShow: 3, // Final adjustment for very small screens
            slidesToScroll: 1,
            
        }
    },
]

    });
}

$(document).ready(function() {
    initializeSlick();
     // إضافة مستمع لحدث تغيير حجم النافذة
    $(window).on('resize', function() {
        $('.responsive').slick('unslick'); // قم بإلغاء تهيئة السليك الحالية
        initializeSlick(); // أعد تهيئة السليك بالإعدادات الجديدة
    });

    $('.btn-en-glish, .btn-ar-abic').on('click', function(event) {
        const language = $(this).data('attr') === "language-ar" ? "ar" : "en";
        localStorage.setItem("language", language);
        $('.responsive').slick('unslick'); // قم بإلغاء تهيئة السليك الحالية
        initializeSlick(); // أعد تهيئة السليك بالإعدادات الجديدة
    });
});
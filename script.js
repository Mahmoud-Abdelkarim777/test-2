// slick

// slick
// owl-carousel 
function initializeOwlCarousel() {
    const isRtl = localStorage.getItem("language") === "ar";

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 800, // يجعل التوقف بين الانتقالات سريعًا جدًا
        autoplayHoverPause: false, // استمرار الحركة عند مرور الماوس فوق العنصر
        smartSpeed: 0, // سرعة الانتقال بين العناصر
        rtl: isRtl, // يدعم الاتجاه من اليمين لليسار إذا كانت اللغة عربية
        animateOut: 'linear', // يضمن أن الحركة تكون خطية كما في الـ cssEase
        autoplaySpeed: 800, // سرعة التكرار، مما يجعل الحركة مستمرة مثل القطار
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 6
            },
            960: {
                items: 7
            },
            1200: {
                items: 8 // يظهر 8 عناصر في العرض الأكبر
            }
        }
    });
}

$(document).ready(function() {
    initializeOwlCarousel();

    $('.btn-en-glish, .btn-ar-abic').on('click', function(event) {
        const language = $(this).data('attr') === "language-ar" ? "ar" : "en";
        localStorage.setItem("language", language);
        $('.owl-carousel').trigger('destroy.owl.carousel'); // قم بإلغاء تهيئة الكاروسيل الحالية
        initializeOwlCarousel(); // أعد تهيئة الكاروسيل بالإعدادات الجديدة
    });
});



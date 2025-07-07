const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    navigation: {
        nextEl: '.slick-next',
        prevEl: '.slick-prev',
    },
});

window.addEventListener("load", function () {
    const integrationSliderTop = new Swiper('.tp-integration-slider-active:not([dir="rtl"])', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 6000,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
        },
        observer: true,
        observeParents: true,
    });

    const integrationSliderBottom = new Swiper('.tp-integration-slider-active[dir="rtl"]', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 6000,
        autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
        },
        observer: true,
        observeParents: true,
    });
});
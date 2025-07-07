document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector('.scroll-top');

    // Show/hide button on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight / 2) {
        scrollBtn.classList.add('open');
        } else {
        scrollBtn.classList.remove('open');
        }
    });

    // Scroll to top smoothly on click
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });
});

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
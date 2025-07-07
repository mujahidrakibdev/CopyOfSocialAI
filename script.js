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

// Sidebar
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".tp-menu-bar");
    const sidebar = document.querySelector(".tpoffcanvas");
    const overlay = document.querySelector(".body-overlay");
    const closeBtn = document.querySelector(".close-btn");

    // Open sidebar
    menuBtn.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.classList.add("opened");
        overlay.classList.add("apply");
    });

    // Close sidebar
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("opened");
        overlay.classList.remove("apply");
    });

    overlay.addEventListener("click", function () {
        sidebar.classList.remove("opened");
        overlay.classList.remove("apply");
    });
});

// Sidebar Dropdown
document.addEventListener("DOMContentLoaded", function () {
    // Get all expandable dropdown toggles inside the sidebar
    const dropdownToggles = document.querySelectorAll(".mean-expand");

    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

        // Find the corresponding submenu (next sibling element)
        const submenu = toggle.previousElementSibling;

        // Toggle class and submenu visibility
        if (toggle.classList.contains("mean-clicked")) {
          toggle.classList.remove("mean-clicked");
          submenu.style.display = "none";
        } else {
          toggle.classList.add("mean-clicked");
          submenu.style.display = "block";
        }
      });
    });
  });

// Swiper
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
new WOW().init();

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
    
    const dropdownToggles = document.querySelectorAll(".mean-expand");

    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();

        const submenu = toggle.previousElementSibling;

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


const pricingData = {
  monthly: {
    starter: {
      price: "$ 10.00",
      billing: "Billed monthly",
      link: "https://example.com/monthly-starter",
      btn: "Free Trial For 7 Days"
    },
    enterprise: {
      price: "$ 20.00",
      billing: "Billed monthly",
      link: "https://example.com/monthly-enterprise",
      brands: "20",
      credits: "8000",
      posts: "100",
      socials: "20"
    },
    advance: {
      price: "$ 30.00",
      billing: "Billed monthly",
      link: "https://example.com/monthly-advance"
    }
  },
  yearly: {
    starter: {
      price: "$ 110.00",
      billing: "Billed yearly",
      link: "https://example.com/yearly-starter",
      btn: "Get Started"
    },
    enterprise: {
      price: "$ 230.00",
      billing: "Billed yearly",
      link: "https://example.com/yearly-enterprise",
      brands: "11",
      credits: "5000",
      posts: "25",
      socials: "10"
    },
    advance: {
      price: "$ 350.00",
      billing: "Billed yearly",
      link: "https://example.com/yearly-advance"
    }
  },
  lifetime: {
    starter: {
      price: "$ 400.00",
      billing: "Billed once in Lifetime",
      link: "https://example.com/lifetime-starter",
      btn: "Get Started"
    },
    enterprise: {
      price: "$ 500.00",
      billing: "Billed once in Lifetime",
      link: "https://example.com/lifetime-enterprise",
      brands: "11",
      credits: "5000",
      posts: "25",
      socials: "10"
    },
    advance: {
      price: "$ 700.00",
      billing: "Billed once in Lifetime",
      link: "https://example.com/lifetime-advance"
    }
  }
};

function updatePricing(type) {
  const data = pricingData[type];
  if (!data) {
    console.error(`No data found for plan type: ${type}`);
    return;
  }

  document.querySelector('[data-plan="starter"]').innerText = data.starter.price;
  document.querySelector('[data-plan="starter-billing"]').innerText = data.starter.billing;
  document.querySelector('[data-plan="starter-link"]').href = data.starter.link;
  document.querySelector('[data-plan="starter-link"]').innerText = data.starter.btn;


  document.querySelector('[data-plan="enterprise"]').innerText = data.enterprise.price;
  document.querySelector('[data-plan="enterprise-billing"]').innerText = data.enterprise.billing;
  document.querySelector('[data-plan="enterprise-link"]').href = data.enterprise.link;
  document.querySelector('[data-plan="brands"]').innerText = data.enterprise.brands;
  document.querySelector('[data-plan="credits"]').innerText = data.enterprise.credits;
  document.querySelector('[data-plan="posts"]').innerText = data.enterprise.posts;
  document.querySelector('[data-plan="socials"]').innerText = data.enterprise.socials;
  document.querySelector('[data-plan="brands1"]').innerText = data.enterprise.brands;
  document.querySelector('[data-plan="credits1"]').innerText = data.enterprise.credits;
  document.querySelector('[data-plan="posts1"]').innerText = data.enterprise.posts;
  document.querySelector('[data-plan="socials1"]').innerText = data.enterprise.socials;


  document.querySelector('[data-plan="advance"]').innerText = data.advance.price;
  document.querySelector('[data-plan="advance-billing"]').innerText = data.advance.billing;
  document.querySelector('[data-plan="advance-link"]').href = data.advance.link;
}


const buttons = document.querySelectorAll('.nav-link');
const indicator = document.querySelector('.test');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    if (!pricingData[type]) return;

    document.querySelector('.nav-link.active')?.classList.remove('active');
    btn.classList.add('active');
    updatePricing(type);

    indicator.style.transform = `translateX(${index * 105}px)`;
  });
});


// Default on load
updatePricing("monthly");


// swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    nextEl: '.test-prev',
    prevEl: '.test-next',
  },
  scrollbar: {
  el: '.tp-scrollbar',
  draggable: true
}
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".accordion-buttons");
  const allItems = document.querySelectorAll(".accordion-items");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const currentItem = btn.closest(".accordion-items");
      const currentCollapse = currentItem.querySelector(".accordion-collapse");
      const isOpen = currentCollapse.classList.contains("show");

      // Close all
      document.querySelectorAll(".accordion-collapse").forEach((collapse) => {
        collapse.classList.remove("show");
      });

      allItems.forEach((item) => item.classList.remove("tp-faq-active"));
      buttons.forEach((b) => b.classList.add("collapsed"));

      // If the clicked one was NOT open, open it now
      if (!isOpen) {
        currentCollapse.classList.add("show");
        currentItem.classList.add("tp-faq-active");
        btn.classList.remove("collapsed");
      } else {
        // If it was already open and now closed, open the 2nd one by default
        const secondItem = allItems[1];
        const secondCollapse = secondItem.querySelector(".accordion-collapse");
        const secondButton = secondItem.querySelector(".accordion-buttons");

        secondCollapse.classList.add("show");
        secondItem.classList.add("tp-faq-active");
        secondButton.classList.remove("collapsed");
      }
    });
  });
});


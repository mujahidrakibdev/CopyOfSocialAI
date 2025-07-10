// Sidebar
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".tp-menu-bar button");
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
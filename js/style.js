document.addEventListener("DOMContentLoaded", function () {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  // const mobile_menu_button = document.querySelector("#mobile-menu-button");
  // const menu_nav = document.querySelector("#menu-nav");
  // const close_menu = document.querySelector("#close-menu");

  // [mobile_menu_button, close_menu].forEach(button => {
  //   button.addEventListener("click", () => {
  //     menu_nav.classList.toggle("-translate-x-full");
  //   });
  // });
  // OverlayScrollbars(document.querySelector("body"), {
  //   className: "os-theme-dark",
  // });
  const scroll_lembut = document.querySelectorAll(".scroll-lembut");

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    scroll_lembut.forEach(e => {
      e.classList.add("overflow-hidden");
      e.setAttribute("data-scrollbar", "");
      var Scrollbar = window.Scrollbar;
      Scrollbar.initAll({});
    });
  }

  // document.querySelector("#dropdownNavbarLink").addEventListener("click", () => {
  //   document.querySelector("#dropdownNavbar").classList.toggle("hidden");
  // });

  window.addEventListener("click", e => {
    if (e.target == document.querySelector("#dropdownNavbarLink")) {
      document.querySelector("#dropdownNavbar").classList.toggle("hidden");
    } else {
      document.querySelector("#dropdownNavbar").classList.toggle("hidden");
    }
  });
});

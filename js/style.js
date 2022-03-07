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

  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  const body = document.querySelector("body");

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    body.classList.add("overflow-hidden");
    body.setAttribute("data-scrollbar", "");
    var Scrollbar = window.Scrollbar;
    Scrollbar.initAll({});
  }
});

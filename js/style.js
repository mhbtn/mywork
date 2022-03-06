window.addEventListener("load", event => {
  const mobile_menu_button = document.querySelector("#mobile-menu-button");
  const menu_nav = document.querySelector("#menu-nav");
  const close_menu = document.querySelector("#close-menu");

  [mobile_menu_button, close_menu].forEach(button => {
    button.addEventListener("click", () => {
      menu_nav.classList.toggle("-translate-x-full");
    });
  });
});

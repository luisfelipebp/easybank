const hamburguerMenu = document.querySelector(".hamburguer-button");
const menuMobile = document.querySelector(".header-menu-mobile");
const containerMobile = document.querySelector(".container-menuMobile");
const menuLinks = document.querySelectorAll(".menu-link");

function abrirMenu() {
  if (hamburguerMenu && menuMobile && containerMobile) {
    hamburguerMenu.classList.toggle("ativo");
    menuMobile.classList.toggle("header-menu-mobile-inativo");
    containerMobile.classList.toggle("bg-ativo");
  }
}

function removerFundo({ target }) {
  if (hamburguerMenu && menuMobile && containerMobile) {
    if (target === containerMobile) {
      menuMobile.classList.add("header-menu-mobile-inativo");
      containerMobile.classList.remove("bg-ativo");
      hamburguerMenu.classList.remove("ativo");
    }
  }
}

function removerMenuMobile({ target }) {
  if (hamburguerMenu && menuMobile && containerMobile) {
    if (target.innerWidth >= 850) {
      hamburguerMenu.classList.remove("ativo");
      menuMobile.classList.add("header-menu-mobile-inativo");
      containerMobile.classList.remove("bg-ativo");
    }
  }
}

function navegarSecao(event) {
  if (hamburguerMenu && menuMobile && containerMobile) {
    hamburguerMenu.classList.remove("ativo");
    menuMobile.classList.add("header-menu-mobile-inativo");
    containerMobile.classList.remove("bg-ativo");
  }
}

hamburguerMenu.addEventListener("click", abrirMenu);
containerMobile.addEventListener("click", removerFundo);
window.addEventListener("resize", removerMenuMobile);
menuLinks.forEach((menuLink) =>
  menuLink.addEventListener("click", navegarSecao)
);

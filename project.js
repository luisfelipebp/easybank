const hamburguerMenu = document.querySelector(".hamburguer-button");
const closeMenu = document.querySelector(".close-button");
const menuMobile = document.querySelector(".header-menu-mobile");
const containerMobile = document.querySelector(".container-menuMobile");
const menuLinks = document.querySelectorAll(".menu-link");

function abrirMenu() {
  hamburguerMenu.classList.toggle("ativo");
  closeMenu.classList.toggle("inativo");
  menuMobile.classList.toggle("header-menu-mobile-inativo");
  containerMobile.classList.toggle("bg-ativo");
}

function removerFundo() {
  menuMobile.classList.add("header-menu-mobile-inativo");
  closeMenu.classList.add("inativo");
  containerMobile.classList.remove("bg-ativo");
  hamburguerMenu.classList.remove("ativo");
}

function removerMenuMobile({ target }) {
  if (target.innerWidth >= 850) {
    hamburguerMenu.classList.remove("ativo");
    menuMobile.classList.add("header-menu-mobile-inativo");
    closeMenu.classList.add("inativo");
    containerMobile.classList.remove("bg-ativo");
  }
}

function navegarSecao() {
  hamburguerMenu.classList.remove("ativo");
  menuMobile.classList.add("header-menu-mobile-inativo");
  containerMobile.classList.remove("bg-ativo");
  closeMenu.classList.add("inativo");
}

hamburguerMenu.addEventListener("click", abrirMenu);
containerMobile.addEventListener("click", removerFundo);
window.addEventListener("resize", removerMenuMobile);
menuLinks.forEach((menuLink) =>
  menuLink.addEventListener("click", navegarSecao)
);

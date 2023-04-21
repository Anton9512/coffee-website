/* ================ SHOW MENU ==================*/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", function () {
  navMenu.classList.add("show-menu");
});

/* ================ HIDE MENU ==================*/

navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});


/* ================ REMOVE MENU MOBILE ==================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   const navMenu = document.getElementById("nav-menu");
   navMenu.classList.remove('show-menu')
}

navLink.forEach((item) => item.addEventListener('click', linkAction))
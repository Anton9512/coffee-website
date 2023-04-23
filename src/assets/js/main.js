//= components/scrollHeader.js
//= components/mixitup.min.js

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

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

/* ================ MIXITUP FILTER PRODUCTS ==================*/

let mixerProducts = mixitup(".products__content", {
  selectors: {
    target: ".products__card",
  },
  animation: {
    duration: 300,
  },
});

/*  DEFAULT FILTER PRODUCTS */

mixerProducts.filter(".delicacies");

/*  LINK FILTER PRODUCTS */

const linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
  linkProducts.forEach(p => p.classList.remove('active-product'))
  this.classList.add('active-product')
}

linkProducts.forEach(p => p.addEventListener('click', activeProducts))
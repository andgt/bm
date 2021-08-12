'use strict'

// Меню

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');
let headerMenu = document.querySelector(".header");

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    headerMenu.classList.add("header__fixed");
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    headerMenu.classList.remove("header__fixed");
  }
});

// Фиксированное меню

let menuFixed = function() {
  if (window.pageYOffset > 10) {
    headerMenu.classList.add("header__fixed");
  } else {
    headerMenu.classList.remove("header__fixed");
  }
};

window.onscroll = function() {
  menuFixed();
};

let tab = function() {
  let tabBtn = document.querySelectorAll(".button__tab");
  let cardsBlock = document.querySelectorAll(".objects__card-slider");
  let tabName;

  tabBtn.forEach(element => {
    element.addEventListener("click", selectTab)
  });

  function selectTab(evt) {
    evt.preventDefault();
    tabBtn.forEach(element => {
      element.classList.remove("button__tab--active");
    });

    this.classList.add("button__tab--active");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    cardsBlock.forEach(element => {
      if (element.classList.contains(tabName)) {
        element.classList.add("objects__card-slider--active");
      } else {
        element.classList.remove("objects__card-slider--active");
      }
    });
  };
};

tab();

let tabInner = function() {

  function selectTab(evt) {

    this.classList.add("button__tab--active");
    tabName = this.getAttribute("data-tab");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    cardsBlock.forEach(element => {
      if (element.classList.contains(tabName)) {
        element.classList.add("objects__card-slider--active");
      } else {
        element.classList.remove("objects__card-slider--active");
      }
    });
  };
};

let tabLink = function() {
  let tabLinkBtn = document.querySelectorAll(".about__link");
  let cardsLinkBlock = document.querySelectorAll(".button__tab");
  let tabLinkName;
  const el = document.getElementById('objects');


  tabLinkBtn.forEach(element => {
    element.addEventListener("click", selectLinkTab)
  });

  function selectLinkTab(evt) {
    evt.preventDefault();
    el.scrollIntoView();
    tabLinkName = this.getAttribute("data-tab-objects");
    selectTabContent(tabLinkName);
  }

  function selectTabContent(tabLinkName) {
    cardsLinkBlock.forEach(element => {
      if (element.classList.contains(tabLinkName)) {
        element.classList.add("button__tab--active");
      } else {
        element.classList.remove("button__tab--active");
      }
    });
  };
};

tabLink();

window.onscroll = function() {
  menuFixed();
};

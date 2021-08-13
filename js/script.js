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

// Табы

let tab = function() {
  let tabBtn = document.querySelectorAll(".button__tab");
  let cardsBlock = document.querySelectorAll(".objects__card-slider");
  let objectsSlickMin = document.querySelectorAll(".objects__slider-2");
  let tabName;
  let tabMin;

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
    tabMin = this.getAttribute("data-slick-min");
    selectTabContent(tabName);
    selectSlickMin(tabMin);
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

  function selectSlickMin(tabMin) {
    objectsSlickMin.forEach(element => {
      if (element.classList.contains(tabMin)) {
        element.classList.add("objects__slick-min");
      } else {
        element.classList.remove("objects__slick-min");
      }
    });
  };
};

tab();

let tabLink = function() {
  let tabLinkBtn = document.querySelectorAll(".about__link");
  let cardsLinkBlock = document.querySelectorAll(".button__tab");
  let cardsBlockSlider = document.querySelectorAll(".objects__card-slider");
  let objectsSlickMin = document.querySelectorAll(".objects__slider-2");
  let tabLinkName;
  let tabLinkSlider;
  let tabMin;
  const objects = document.getElementById('objects');


  tabLinkBtn.forEach(element => {
    element.addEventListener("click", selectLinkTab)
  });

  function selectLinkTab(evt) {
    evt.preventDefault();
    objects.scrollIntoView();
    tabLinkName = this.getAttribute("data-tab-objects");
    selectTabContent(tabLinkName);
    tabLinkSlider = this.getAttribute("data-tab-slider");
    selectTabSlider(tabLinkSlider);
    tabMin = this.getAttribute("data-slick-min");
    selectSlickMin(tabMin);
  };

  function selectTabContent(tabLinkName) {
    cardsLinkBlock.forEach(element => {
      if (element.classList.contains(tabLinkName)) {
        element.classList.add("button__tab--active");
      } else {
        element.classList.remove("button__tab--active");
      }
    })
  };

  function selectTabSlider(tabLinkSlider) {
    cardsBlockSlider.forEach(element => {
      if (element.classList.contains(tabLinkSlider)) {
        element.classList.add("objects__card-slider--active");
      } else {
        element.classList.remove("objects__card-slider--active");
      }
    })
  };

  function selectSlickMin(tabMin) {
    objectsSlickMin.forEach(element => {
      if (element.classList.contains(tabMin)) {
        element.classList.add("objects__slick-min");
      } else {
        element.classList.remove("objects__slick-min");
      }
    });
  };
};

tabLink();

window.onscroll = function() {
  menuFixed();
};

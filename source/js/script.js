'use strict'

// Меню

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');
let headerMenu = document.querySelector(".header");

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

// Кнопка наверх

let scrollUpButton = function () {
  let scrollUp = document.querySelector(".button__scroll-up");

  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }

  scrollUp.onclick = function (evt) {
    window.scrollTo(0, 0);
  };
};

window.onscroll = function() {
  menuFixed();
  scrollUpButton();
};

// Табы

let tab = function() {
  let tabBtn = document.querySelectorAll(".button__tab");
  let cardsBlock = document.querySelectorAll(".objects__card-slider");
  let objectsSlickMin = document.querySelectorAll(".objects__slider-2");
  let cardsInnerMin = document.querySelectorAll(".objects__card-container");
  let tabName;
  let tabMin;
  let tabInnerNames;

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
    tabInnerNames = this.getAttribute("data-card-inner");
    selectTabInner(tabInnerNames);
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

  function selectTabInner(tabInnerNames) {
    cardsInnerMin.forEach(element => {
      if (element.classList.contains(tabInnerNames)) {
        element.classList.add("objects__card-container--active");
      } else {
        element.classList.remove("objects__card-container--active");
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
  let cardsInnerMin = document.querySelectorAll(".objects__card-container");
  let tabLinkName;
  let tabLinkSlider;
  let tabMin;
  let tabInnerNames;

  const objects = document.getElementById('objects');


  tabLinkBtn.forEach(element => {
    element.addEventListener("click", selectLinkTab)
  })

  function selectLinkTab(evt) {
    evt.preventDefault();
    objects.scrollIntoView();
    tabLinkName = this.getAttribute("data-tab-objects");
    selectTabContent(tabLinkName);
    tabLinkSlider = this.getAttribute("data-tab-slider");
    selectTabSlider(tabLinkSlider);
    tabMin = this.getAttribute("data-slick-min");
    selectSlickMin(tabMin);
    tabInnerNames = this.getAttribute("data-objects-card");
    selectTabInner(tabInnerNames);
  }

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

  function selectTabInner(tabInnerNames) {
    cardsInnerMin.forEach(element => {
      if (element.classList.contains(tabInnerNames)) {
        element.classList.add("objects__card-container--active");
      } else {
        element.classList.remove("objects__card-container--active");
      }
    });
  };
};

tabLink();

let tabInner = function () {
  let btnInner = document.querySelectorAll(".objects__slider-2-link");
  let cardsInner = document.querySelectorAll(".objects__card-container");
  let tabInnerName;

  btnInner.forEach(element => {
    element.addEventListener("click", selectTab);
  });

  function selectTab(evt) {
    evt.preventDefault();
    tabInnerName = this.getAttribute("data-tab-inner");
    selectTabContent(tabInnerName);
  }

  function selectTabContent(tabInnerName) {
    cardsInner.forEach(element => {
      if (element.classList.contains(tabInnerName)) {
        element.classList.add("objects__card-container--active");
      } else {
        element.classList.remove("objects__card-container--active");
      }
    });
  };
};

tabInner();

// Слайдер

let sliderItems = document.querySelectorAll(".objects__slider-2-wrapper");
let btnLeft = document.querySelector(".slick-arrow--min-left");
let btnRight = document.querySelector(".slick-arrow--min-right");
let sliderList = document.querySelector(".slick-min__wrapper");
let offset = 0;

function slider() {
  let sliderWidthDesktop;
  let sliderItemMax;
  /*for (let sliderItem of sliderItems) {
    sliderWidthDesktop = sliderItem.offsetWidth + parseInt(getComputedStyle(sliderItem).marginRight) + parseInt(getComputedStyle(sliderItem).marginLeft);
    sliderItemMax = sliderWidthDesktop * (sliderItems.length-1);
  }*/

  sliderItems.forEach(element => {
    sliderWidthDesktop = sliderItem.offsetWidth;
    sliderItemMax = sliderWidthDesktop * (sliderItems.length-1);
  })

  console.log(sliderItems.length);

  btnRight.onclick = function () {
    offset += sliderWidthDesktop;

    if (offset > sliderItemMax) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidthDesktop;

    if (offset < 0) {
      offset = sliderItemMax;
    }

    sliderList.style.left = -offset + "px";
  };
}

function mobileSlider() {
  let sliderWidth;
  let sliderItemMaxMobile;
  for (let sliderItem of sliderItems) {
    sliderWidth = sliderItem.offsetWidth + (parseInt(getComputedStyle(sliderItem).marginRight) + parseInt(getComputedStyle(sliderItem).marginLeft));
    sliderItemMaxMobile = sliderWidth * (sliderItems.length-1);
  }

  btnRight.onclick = function () {
    offset += sliderWidth;

    if (offset > sliderItemMaxMobile) {
      offset = 0;
    }

    sliderList.style.left = -offset + "px";
  };

  btnLeft.onclick = function () {
    offset = offset - sliderWidth;

    if (offset < 0) {
      offset = sliderItemMaxMobile;
    }

    sliderList.style.left = -offset + "px";
  };
}

if (window.innerWidth < 1400) {
  window.onload = mobileSlider();
} else {
  window.onload = slider();
}

window.addEventListener("resize", function() {
  if (window.innerWidth > 1399) {
    slider();
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 1400) {
    mobileSlider();
  }
});


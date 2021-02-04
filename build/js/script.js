document.addEventListener("DOMContentLoaded", function () {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__toggle');

  navToggle.classList.remove('header__toggle--nojs');
  navMain.classList.remove('header__nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--close')) {
      navMain.classList.remove('header__nav--close');
      navMain.classList.add('header__nav--open');
      navToggle.classList.remove('header__toggle--close');
      navToggle.classList.add('header__toggle--open')
    } else {
      navMain.classList.remove('header__nav--open');
      navMain.classList.add('header__nav--close');
      navToggle.classList.remove('header__toggle--open');
      navToggle.classList.add('header__toggle--close')
    }
  });
});


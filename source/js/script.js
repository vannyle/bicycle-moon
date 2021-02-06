document.addEventListener("DOMContentLoaded", function () {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__toggle');
  const header = document.querySelector('.header');

  header.classList.remove('header--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  navMain.classList.remove('header__nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--close')) {
      navMain.classList.remove('header__nav--close');
      navMain.classList.add('header__nav--open');
      navToggle.classList.remove('header__toggle--close');
      navToggle.classList.add('header__toggle--open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    } else {
      navMain.classList.remove('header__nav--open');
      navMain.classList.add('header__nav--close');
      navToggle.classList.remove('header__toggle--open');
      navToggle.classList.add('header__toggle--close');
      document.body.style.overflow = 'unset';
      document.body.style.position = 'relative';
    }
  });
});


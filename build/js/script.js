'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const navMain = document.querySelector('.header__nav');
  const navToggle = document.querySelector('.header__toggle');
  const header = document.querySelector('.header');

  header.classList.remove('header--nojs');
  navToggle.classList.remove('header__toggle--nojs');
  navMain.classList.remove('header__nav--nojs');

  function openMenu() {
    navMain.classList.remove('header__nav--close');
    navMain.classList.add('header__nav--open');
    navToggle.classList.remove('header__toggle--close');
    navToggle.classList.add('header__toggle--open');
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  }

  function closeMenu() {
    navMain.classList.remove('header__nav--open');
    navMain.classList.add('header__nav--close');
    navToggle.classList.remove('header__toggle--open');
    navToggle.classList.add('header__toggle--close');
    document.body.style.overflow = 'unset';
    document.body.style.position = 'relative';
  }

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  header.addEventListener('click', (e) => {
    let headerItem = e.target.closest('.header__item');
    if (headerItem) {
      e.preventDefault();
      closeMenu();
      const link = headerItem.querySelector('a[href^="#section"]');
      let ref = link.href.split('#section');
      ref = '#section' + ref[1];

      setTimeout(() => {
        document.querySelector(ref).scrollIntoView();
      }, 100);
    }
  });
});

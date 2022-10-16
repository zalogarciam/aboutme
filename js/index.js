const navIconMenu = document.getElementById('navIconMenu');
const navIconClose = document.querySelector('#navIconClose');
const nav = document.querySelector('.nav');

navIconMenu.addEventListener('click', () => {
  nav.classList.add('nav--open');
});

navIconClose.addEventListener('click', () => {
  nav.classList.remove('nav--open');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:500,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay:{
    delay:5000
  }
});
const navIconMenu = document.getElementById('navIconMenu');
const navButtonProfile = document.getElementById('navButtonProfile');
const navButtonExperience = document.getElementById('navButtonExperience');
const navIconClose = document.querySelector('#navIconClose');
const nav = document.querySelector('.nav');

navIconMenu.addEventListener('click', () => {
  nav.classList.add('nav--open');
});

navIconClose.addEventListener('click', () => {
  nav.classList.remove('nav--open');
});

navButtonProfile.addEventListener('click', () => {
  nav.classList.remove('nav--open');
});

navButtonExperience.addEventListener('click', () => {
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


var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

function contact_submit(e) {
  e.preventDefault();

  var target = e.target || e.srcElement;
  var to = 'gegarciam95@gmail.com';
  var uri = 'mailto:' + to;
  var body = '';

  var name = target.elements['name'].value;
  var subject = target.elements['subject'].value;
  var phone = target.elements['phone'].value;
  var message = target.elements['message'].value;

  body += message + "\r\n\r\n";
  body += "Name: " + name + "\r\n";
  body += "Phone Number: " + phone + "\r\n";

  uri += '?subject=' + encodeURIComponent(subject);
  uri += '&body=' + encodeURIComponent(body);

  window.open(uri,'_blank');
}



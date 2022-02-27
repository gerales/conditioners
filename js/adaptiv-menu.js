document.querySelector('.btn-hamburger').addEventListener('click', function (e) {
   e.preventDefault();
   this.classList.toggle('active');
   let menu = document.querySelector('.nav-menu');
   menu.classList.toggle('active');
   document.body.classList.toggle('body-hidden');
});
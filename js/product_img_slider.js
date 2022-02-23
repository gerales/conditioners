document.body.onclick = function (event) {
   event = event || window.event;
   if (event.target.classList.contains('img-min')) {
      let imgminDivs = document.querySelectorAll('.product-img-min div');
      for (let i = 0; i < imgminDivs.length; i++) {
         imgminDivs[i].classList.remove('active');
      }

      document.getElementById('img-max').src = event.target.src;
      event.target.parentElement.classList.add('active');

   }
}
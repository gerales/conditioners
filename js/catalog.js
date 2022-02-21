window.onload = function () {//скролл для секции брендов
   let heightBrand = document.getElementById('brend-check');
   let height = heightBrand.children[0].clientHeight;
   heightBrand.style.maxHeight = (height * 3) + 'px';

   let select = function () {//кастомный селект
      let selectHeader = document.querySelectorAll('.select-header');

      selectHeader.forEach(item => {
         item.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
         });
      });
   };
   select();

   document.querySelector('.select-body').addEventListener('click', fSelect);
   //let dataSelect = event.target.getAttribute('data-select');
   let selectItem = document.getElementsByClassName('select-item');
   let selectCurrent = document.getElementById('select-current');
   if (selectItem && selectCurrent) {
      selectCurrent.innerText = selectItem[0].innerText;
      selectItem[0].classList.add('hide');
   }


   function fSelect(event) {
      console.log(event);
      if (event.target.classList.contains('select-item')) {

         for (let i = 0; i < selectItem.length; i++) {
            selectItem[i].classList.remove('hide');
         }
         selectCurrent.innerText = event.target.innerText;
         let select = event.target.closest('.select');
         select.classList.remove('active');
         event.target.classList.add('hide');
      }
   }
};



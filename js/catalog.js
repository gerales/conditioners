window.onload = function () {
   //скролл для секции брендов
   let heightBrand = document.getElementById('brend-check');
   //let height = heightBrand.children[1].clientHeight;
   //heightBrand.style.maxHeight = (height * 3) + 'px';

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
   //добавление глобального фильтра
   document.querySelector('.type').addEventListener('click', function(e){
      const ulGlobal = document.getElementById("ul-global");
      if(e.target.classList.contains('checkbox')){
         if(e.target.checked){
            let str = e.target.nextElementSibling.nextElementSibling.innerText;
            let li = document.createElement('li');
            li.innerHTML =str + `<span class="li-close">&times;</span>`;
            ulGlobal.append(li);
            ulGlobal.querySelector('.clear').classList.add('visible');
         }
         else {
            let arrLi = ulGlobal.querySelectorAll('li');
            for(let i=0; i<arrLi.length; i++){
               let str = arrLi[i].innerText;
               str = str.slice(0, str.length-2);
               if(e.target.nextElementSibling.nextElementSibling.innerText == str){
                  arrLi[i].remove();
               }
            }
            if(arrLi.length == 2){
               ulGlobal.querySelector('.clear').classList.remove('visible');
            }
         }
      }
   });

   //сброс фильтров
   document.querySelector("#ul-global").addEventListener('click', function (e) {
      let arrLi = this.querySelectorAll('li');
      let allCheckbox = document.querySelectorAll('.checkbox');
      if (e.target.classList.contains('li-close')) {
         let arrInput = document.querySelector('.type').querySelectorAll('input');
         let str = e.target.parentElement.innerText;
         str = str.slice(0, str.length - 2);
         for (let i = 0; i < arrInput.length; i++) {
            if (arrInput[i].nextElementSibling.nextElementSibling.innerText == str) {
               arrInput[i].checked = false;
               e.target.parentElement.remove();
               if (arrLi.length == 2) {
                  this.querySelector('.clear').classList.remove('visible');
               }
            }

         }
      }
      if (e.target.classList.contains('clear')) {
         e.target.classList.remove('visible');
         arrLi.forEach(function (item) {
            if (!item.classList.contains('clear')) {
               item.remove();
            }
         });
         allCheckbox.forEach(function (item) {
            item.checked = false;
         });
      }
   });

   if (document.documentElement.clientWidth < 1366) {
      const btnFilters = document.getElementById('btn-filters');
      const btnBrend = document.getElementById('btn-brend');
      const blockSaidbar = document.getElementById('block-saidbar');
      const closeFilters = document.getElementById('close-filters');
      const filters = document.getElementsByClassName('filter-title');
      let count = 0;
      //открытие бокового меню с фильтрами
      btnFilters.addEventListener('click', function () {
         blockSaidbar.classList.add('active');
         document.querySelector('.overlay').classList.add('active');
         document.querySelector('.block-background').style.display = 'block';
      });

      //закрытие меню
      closeFilters.addEventListener('click', function () {
         blockSaidbar.classList.remove('active');
         document.querySelector('.overlay').classList.remove('active');
         document.querySelector('.block-background').style.display = 'none';
      });

      //открытие подменю фильтра
      document.querySelector('.block-filters').addEventListener('click', function (e) {
         //console.log(e);
         const subFilter = document.getElementById('subfilter');
         const subFilterHtml = subFilter.innerHTML;

         if (e.target.classList.contains('filter-title')) {
            let arrInput = e.target.nextElementSibling.querySelectorAll('input');
            let countChecked = 0;
            //console.log(e);
            let clearSpan = e.target.nextElementSibling.querySelector('.clear-span');
            //цикл получения выбранных чек-боксов
            for (let i = 0; i < arrInput.length; i++) {
               if (arrInput[i].checked) {
                  countChecked += 1;
               }
            }

            if (!countChecked || countChecked == 0) {
               clearSpan.innerText = '';
            } else { clearSpan.innerText = countChecked; }


            e.target.nextElementSibling.classList.add('active');
            e.target.nextElementSibling.children[0].children[0].innerText = e.target.children[0].innerText;
            e.target.nextElementSibling.style.height = e.target.parentElement.parentElement.style.height;
            //console.log(e.target.nextElementSibling.style.height );
            btnBrend.classList.add('hidden');//скрываем "пошук" с предыдущего окна
         }
         if (e.target.classList.contains('title') || e.target.classList.contains('filters')) {
            e.target.parentElement.nextElementSibling.classList.add('active');
            e.target.parentElement.nextElementSibling.style.height = e.target.parentElement.parentElement.parentElement.style.height;
            btnBrend.classList.add('hidden');
         }

         //свертывание подменю фильтра
         if (e.target.classList.contains('subtitle-filter')) {
            let arrInputs = e.target.parentElement.parentElement.querySelectorAll('input');
            let filterItems = '';
            let startPrice = document.getElementById('start');
            let endPrice = document.getElementById('end');
            let price = e.target.parentElement.parentElement.querySelector('.price');
            let countChecked = 0;//счетчик выбранных инпутов

            if (price) {
               if (startPrice.value == 20 && endPrice.value == 99000) {
                  e.target.parentElement.parentElement.previousElementSibling.querySelector('.filters').innerText = 'Усе';
               }
               else {
                  e.target.parentElement.parentElement.previousElementSibling.querySelector('.filters').innerText = 'от ' + startPrice.value + ' до ' + endPrice.value;
               }
            } else {
               for (let i = 0; i < arrInputs.length; i++) {
                  if (arrInputs[i].checked) {
                     filterItems += arrInputs[i].nextElementSibling.nextElementSibling.innerText;
                     filterItems += ',';
                  }
               }
               filterItems = filterItems.slice(0, filterItems.length - 1);
               console.log(filterItems);
               if (filterItems) {
                  e.target.parentElement.parentElement.previousElementSibling.querySelector('.filters').innerText = filterItems;
               }

               arrInputs.forEach(function (item) {
                  if (item.checked) {
                     countChecked += 1;
                  }
               })

               if (!countChecked && e.target.parentElement.parentElement.previousElementSibling.querySelector('.filters').innerText != 'Усе') {
                  e.target.parentElement.parentElement.previousElementSibling.querySelector('.filters').innerText = 'Усе';
               }
            }

            e.target.parentElement.parentElement.classList.remove('active');
            btnBrend.classList.remove('hidden');//отображаем "пошук"
         }
         //проверка на выбор чекбокса
         if (e.target.classList.contains('checkbox')) {

            let clearSpan = e.target.parentElement.parentElement.querySelector('.clear-span');//сколько выбрано инпутов
            let countChecked;//счетчик выбранных инпутов
            if (clearSpan) {
               if (clearSpan.innerText) {
                  countChecked = +(clearSpan.innerText);
               }
               else { countChecked = 0; }
               if (e.target.checked) {
                  countChecked += 1;
                  clearSpan.innerText = countChecked;
               }
               else {
                  countChecked -= 1;
                  if (!countChecked || countChecked == 0) {
                     clearSpan.innerText = '';
                  } else { clearSpan.innerText = countChecked; }
               }
            }

         }

         //сброс локальных фильтров
         if (e.target.classList.contains('push')) {
            //console.log(e.target.parentElement.parentElement.parentElement.parentElement);
            let arrInputs = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('input');

            let clearSpan = e.target.firstElementChild;
            // console.log(clearSpan);
            // console.log(arrInputs);
            for (let i = 0; i < arrInputs.length; i++) {
               arrInputs[i].checked = false;
            }
            clearSpan.innerText = '';
         }
         //сброс всех фильтров
         if (e.target.classList.contains('clear-global')) {
            let allCheckbox = document.querySelectorAll('.checkbox');
            let spanAllFilters = document.querySelectorAll('.filters');
            allCheckbox.forEach(function (item) {
               item.checked = false;
            });
            spanAllFilters.forEach(function (item) {
               item.innerText = 'Усе';
            })
         }
      });
   }
};



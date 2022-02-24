window.onload = function () {
   document.querySelector('.section-slider_product').addEventListener('click', fTabsProduct);

   function fTabsProduct(event) {
      console.log(event);
      if (event.target.classList.contains('tabs-slider')) {
         let dataTab = event.target.getAttribute('data-tab');
         //отключаем класс _active
         let tSlider = document.getElementsByClassName('tabs-slider');
         for (let i = 0; i < tSlider.length; i++) {
            tSlider[i].classList.remove('_active');
         }
         event.target.classList.add('_active');
         //все вкладки с содержимым
         let tabContent = document.getElementsByClassName('tab-content');
         for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('_active');
         }
         for (let i = 0; i < tabContent.length; i++) {
            if (dataTab == i) {
               tabContent[i].classList.add('_active');
            }
         }
      }
   }

  
   let prevArrow = document.getElementsByClassName('arrow-prev');
   let nextArrow = document.getElementsByClassName('arrow-next');
   let tabsItem = document.getElementsByClassName('tabs-item');
   document.querySelector('.tabs').addEventListener('click', fTabsWorks);
   document.querySelector('.block-arrow').addEventListener('click', fArrow);

   function fTabsWorks(event){
      //console.log(event);
      //console.log(event.target.getAttribute('data-tab'));   

      for(let i=0; i < tabsItem.length; i++){
         tabsItem[i].classList.remove('_active');
      }
      event.target.classList.add('_active');
      prevArrow[0].classList.remove('no_active');
      nextArrow[0].classList.remove('no_active');
      
      //активация и деактивация стрелок
     if(tabsItem[0].classList.contains('_active')){
         prevArrow[0].classList.add('no_active');
     }

     if(tabsItem[tabsItem.length-1].classList.contains('_active')){
      nextArrow[0].classList.add('no_active');
     }   
   }

   //функция обработки клика по стрелкам
   function fArrow(event){
      //console.log(event);
      if((event.target.classList.contains('tabs-button-prev') && !event.target.firstElementChild.classList.contains('no_active')) || (event.target.classList.contains('arrow-prev') && !event.target.classList.contains('no_active'))){
         for(let i = tabsItem.length-1; i>0; i-- ){
           if(tabsItem[i].classList.contains('_active')){
               tabsItem[i].classList.remove('_active');
               tabsItem[i-1].classList.add('_active');
               nextArrow[0].classList.remove('no_active');
               break;
           } 
         }
      }
      if(tabsItem[0].classList.contains('_active')){
         prevArrow[0].classList.add('no_active');
      }
      if((event.target.classList.contains('tabs-button-next') && !event.target.firstElementChild.classList.contains('no_active')) || (event.target.classList.contains('arrow-next') && !event.target.classList.contains('no_active'))){
         for(let i = 0 ; i < tabsItem.length; i++){
            if(tabsItem[i].classList.contains('_active')){
               tabsItem[i].classList.remove('_active');
               tabsItem[i+1].classList.add('_active');
               prevArrow[0].classList.remove('no_active');
               break;
            }
         }
      }
      if(tabsItem[tabsItem.length-1].classList.contains('_active')){
         nextArrow[0].classList.add('no_active');
      }
   }
}
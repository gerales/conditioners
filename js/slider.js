new Swiper('.slider',{
   //стрелки
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   pagination:{
      el:'.swiper-pagination',
      clickable:true,
   },
   //кол-во слайдов для показа
   slidesPerView: 3,

   //отступ между слайдами
  // spaceBetween: 24,

   //кол-во пролистываемых слайдов
   slidesPerGroup: 3,

   //активный слайд по центру
   //centeredSlides:true,
});

new Swiper('.slider-product',{
   pagination:{
      el:'.swiper-pagination',
      clickable:true,
   },
   

   breakpoints:{
      320:{
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      992:{
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1360:{
         slidesPerView: 4,
         slidesPerGroup: 4,
      }
   },
});

new Swiper('.slider-product_vip',{
   pagination:{
      el:'.swiper-pagination',
      clickable:true,
   },
   breakpoints:{
      320:{
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      992:{
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1360:{
         slidesPerView: 4,
         slidesPerGroup: 4,
      }
   },
});

new Swiper('.slider-top', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
  
});

const similarSwiper = new Swiper('.slider-similar-product', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
  // стрелки
   navigation: {
      nextEl: '.tabs-button-next',
      prevEl: '.tabs-button-prev'
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      992: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      1360: {
         slidesPerView: 4,
         slidesPerGroup: 1,
      }
   },

});



if(document.documentElement.clientWidth>1366){
   let coll = document.getElementsByClassName('filter-title');
   for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
         this.classList.toggle('noactive');
         let checkItem = this.nextElementSibling;
         checkItem.style.maxHeight = checkItem.scrollHeight + 'px';
         if (this.classList.contains('noactive')) {
            //checkItem.style.transition = 'height .5s ease'; 
            checkItem.style.maxHeight = 0 + 'px';
         }
         else {
            checkItem.style.maxHeight = checkItem.scrollHeight + 'px';
         }
      });
   }
}

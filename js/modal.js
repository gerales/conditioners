function modalWindows() {
    const modal = document.getElementById('modal-consult');
    const body = document.body;
    const formCons = document.querySelector('.consultation');
    const btnInquiry = document.getElementById('inquiry');
    const modalThanks = document.getElementById('modal-thanks');

    document.querySelector('#consult').addEventListener('click', function(){
       modal.classList.add('modal-active');
       body.classList.add('body-hidden');
    });

    document.querySelector('.close_modal_window').addEventListener('click', function(){
       
       modal.classList.remove('modal-active');
       body.classList.remove('body-hidden');
    });
    document.querySelector('#close-modal-thanks').addEventListener('click', function(){
       
       modalThanks.classList.remove('modal-active');
       body.classList.remove('body-hidden');
    });
    
    modal.addEventListener('click', (e) => {
       //console.log(e.target);
       if(e.target == modal){
          modal.classList.remove('modal-active');
          body.classList.remove('body-hidden');
       }
    });
    modalThanks.addEventListener('click', (e) => {
       //console.log(e.target);
       if(e.target == modalThanks){
          modalThanks.classList.remove('modal-active');
          body.classList.remove('body-hidden');
       }
    });
    btnInquiry.addEventListener('click', function(){
       modal.classList.remove('modal-active');
       modalThanks.classList.add('modal-active');
    });
 }
 modalWindows();
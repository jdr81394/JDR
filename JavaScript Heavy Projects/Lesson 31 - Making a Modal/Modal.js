var modal = document.querySelector(".modal");
var modalTitle = document.querySelector('.modal-title');
var modalContent = document.querySelector('.modal-content');
var modalCounter = document.querySelector('.modal-counter');

function openModal(){

if (this.modalCounter === undefined ){
  this.modalCounter = 0;
}

  if (modal.style.display == 'block'){
      closeModal();
  }else {
    //displayModal
    this.modalCounter++;
    modalTitle.innerHTML = 'hiya' + "<button class = 'button' onclick = 'closeModal();'> </button>"
    modal.style.display = 'block';
    modalCounter.innerHTML = this.modalCounter;
  }

};



function closeModal(){
  modal.style.display = 'none';
}

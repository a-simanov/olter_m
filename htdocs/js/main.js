/*Подключение Swiper*/
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,     
    
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

/* Модльное окно */
let formEnter = document.querySelector('.btn_form-enter');
let formBtn = document.querySelector('.btn_form');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');


formEnter.addEventListener('click', showModal);
formBtn.addEventListener('click', showModal);
modalClose.addEventListener('click',  closeModal);



function showModal () {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

/*Скролл к секциям*/

let rulesBtn = document.querySelector('.link-item_rules');
let presentsdBtn = document.querySelector('.link-item_presents');
let winnersBtn = document.querySelector('.link-item_winners');


let promo = document.querySelector('.section_promo');
let footer = document.querySelector('.footer');

rulesBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let x = Number(promo.offsetTop);  

  window.scrollTo({
    top: x,
    behavior: "smooth"
  });
})

presentsdBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let x = Number(footer.offsetTop);

  window.scrollTo({
    top: x - 70,
    behavior: "smooth"
  });
})

winnersBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let x = Number(footer.offsetTop);

  window.scrollTo({
    top: x - 70,
    behavior: "smooth"
  });
})
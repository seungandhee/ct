// SWIPER
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

// SWIPER 컨트롤 버튼 제어
(function(){
  const controlbtnEl = document.querySelector('.control-btn');

  let state = true;
  controlbtnEl.addEventListener('click', function(){

    if(state){
      swiper.autoplay.stop();
      controlbtnEl.classList.add('play');
      state = false;
    } else {
      swiper.autoplay.start();
      controlbtnEl.classList.remove('play');
      state = true;
    }
  })
  
})();

// SWIPER-PAGINATION 가운데 선 변경
(function(){
  const swiperpgEl = document.querySelector('.swiper-pagination');

  swiperpgEl.innerHTML = `<span class="swiper-pagination-current">1</span><span class="line"></span><span class="swiper-pagination-total">4</span>`;
})();

// CATEGORY TAB MENU
(function(){
  const categoryEl = document.querySelector('.category');
  const contentGroup = document.querySelectorAll('.content');

  categoryEl.addEventListener('click', function(e){
    const filter = e.target.dataset.filter;
    const selected = e.target;

    contentGroup.forEach((item) => {

      if(filter == null) {
        return;
      }

      if(filter ==='all' || filter === item.dataset.type) {
        item.classList.remove('invisible');
      } else {
        item.classList.add('invisible');
      }
    })
  })

})();

// POPUP 모달창
(function(){
  const popupBtn = document.querySelector('.popup');
  const modalEl = document.querySelector('.modal-wrap');
  const closeBtn = document.querySelector('.close');

  popupBtn.addEventListener('click', function(){
    modalEl.classList.add('active');
  })
  closeBtn.addEventListener('click', function(){
    modalEl.classList.remove('active');
  })
})();

// TRIGGER CLICK ANIMATION
(function(){
  const triggerEl = document.querySelector('.trigger');
  const navEl = document.querySelector('nav');

  let state = true;
  triggerEl.addEventListener('click', function(){

    if(state){
      navEl.classList.add('active');
      triggerEl.classList.add('active');
      state = false;
    } else {
      navEl.classList.remove('active');
      triggerEl.classList.remove('active');
      state = true;
    }
  })
})();



































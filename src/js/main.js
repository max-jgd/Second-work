//---Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
  const items = filter.querySelectorAll('.block-filter')

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = event.target.textContent;
      }
    })
  })
}

// swiper

const swiper = new Swiper('.swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
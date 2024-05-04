const cardSlider = document.querySelector('.card-slider');
const cardWrapper = document.querySelector('.card-wrapper');
const sliderCards = document.querySelectorAll('.slider-card');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let activeCardIndex = 0;

function showCard(index) {
  cardWrapper.style.transform = `translateX(-${index * 33.33}%)`;
  activeCardIndex = index;
}

function prevCard() {
  if (activeCardIndex > 0) {
    showCard(activeCardIndex - 1);
  }
}

function nextCard() {
  if (activeCardIndex < sliderCards.length - 3) {
    showCard(activeCardIndex + 1);
  }
}

prevArrow.addEventListener('click', prevCard);
nextArrow.addEventListener('click', nextCard);

showCard(0);
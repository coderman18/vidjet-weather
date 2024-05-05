// slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    if (slideIndex === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

nextBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});

showSlide(currentSlideIndex);
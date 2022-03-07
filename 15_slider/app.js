const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
let counter = 0;

function carousel() {
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block'
  } else {
    nextBtn.style.display = 'none'
  }
  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

nextBtn.addEventListener('click', () => {
  counter += 1
  carousel()
})
prevBtn.addEventListener('click', () => {
  counter -= 1
  carousel()
});

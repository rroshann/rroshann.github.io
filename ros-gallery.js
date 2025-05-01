const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

// Initialize carousel
function initCarousel() {
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

// Go to a specific slide
function goToSlide(index) {
  slides[currentSlide].style.display = 'none';
  dotsContainer.children[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].style.display = 'block';
  dotsContainer.children[currentSlide].classList.add('active');
}

// Navigate to next slide
function nextSlide() {
  let newIndex = (currentSlide + 1) % slides.length;
  goToSlide(newIndex);
}

// Navigate to previous slide
function prevSlide() {
  let newIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(newIndex);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize everything
initCarousel();

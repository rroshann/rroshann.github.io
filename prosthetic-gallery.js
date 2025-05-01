// Define images and captions
const slides = [
    {
      src: "images/prosthetic-1.png",
      caption: "Initial CAD concept of the prosthetic forearm designed using Fusion 360."
    },
    {
      src: "images/prosthetic-2.png",
      caption: "Topology-optimized output from generative design simulations."
    },
    {
      src: "images/prosthetic-3.png",
      caption: "Stress simulation under 1000N load constraint to validate strength."
    },
    {
      src: "images/prosthetic-4.png",
      caption: "Carbon-fiber infused 3D print prototype using FDM for cost-effective manufacturing."
    }
  ];
  
  // DOM elements
  const track = document.querySelector('.carousel-track');
  const dotsContainer = document.querySelector('.dots');
  const prevBtn = document.querySelector('.nav-btn.prev');
  const nextBtn = document.querySelector('.nav-btn.next');
  
  // Generate slides and dots dynamically
  slides.forEach((slide, index) => {
    // Create slide
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    if (index === 0) slideDiv.classList.add('active');
    slideDiv.innerHTML = `
      <img src="${slide.src}" alt="Slide ${index + 1}">
      <p>${slide.caption}</p>
    `;
    track.appendChild(slideDiv);
  
    // Create dot
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => moveToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const slidesEl = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
  
    slidesEl.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });
  
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
  
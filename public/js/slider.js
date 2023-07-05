const slider = document.querySelector('.slider');

// Set the initial slide index
let slideIndex = 0;

// Automatically move to the next slide every 3 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % slider.childElementCount;
  slideTo(slideIndex);
}, 5000);

// Function to move the slider to a specific slide
function slideTo(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}
// Get the slideshow container element
const slideshow = document.getElementById("Home");

// Get all the slides
const slides = slideshow.getElementsByClassName("slide");

// Set the initial slide index
let currentSlideIndex = 0;

// Function to show the current slide
const showSlide = () => {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[currentSlideIndex].style.display = "block";
};

// Function to switch to the next slide
const nextSlide = () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide();
};

// Automatically switch to the next slide every 4 seconds
setInterval(nextSlide, 4000);

// Show the initial slide
showSlide();
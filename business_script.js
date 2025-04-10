```javascript
// Image Carousel Functionality
let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  const carouselContainer = document.querySelector('.carousel-container');
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Navigate to the previous slide
function prevSlide() {
  showSlide(currentSlide - 1);
}

// Navigate to the next slide
function nextSlide() {
  showSlide(currentSlide + 1);
}

// Automatic carousel change every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);

// Form Validation (Optional)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return;
  }
alert("Thank you for reaching out! We'll get back to you soon.");
  contactForm.reset(); // Clear the form after submission
});

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
```

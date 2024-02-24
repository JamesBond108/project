document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
  
    let index = 0;
    const slideWidth = slides[0].clientWidth;
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  
    setInterval(nextSlide, 5000); // Change interval to 5000 milliseconds (5 seconds)
  });
import "./style.css";
import "./mediaquery.css";

document.addEventListener("DOMContentLoaded", () => {
  let slideImages = document.querySelectorAll(".slides-container img");
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  let dots = document.querySelectorAll(".dot");

  if (slideImages.length === 0) {
    console.error("No slide images found.");
    return;
  }

  let slideIndex = 0;
  let slideInterval;

  let showSlide = (index) => {
    slideImages.forEach((img, i) => {
      img.classList.remove("active");
      dots[i].classList.remove("activeDot");
    });

    slideImages[index].classList.add("active");
    dots[index].classList.add("activeDot");
  };

  let nextSlide = () => {
    slideIndex = (slideIndex + 1) % slideImages.length;
    showSlide(slideIndex);
  };

  let prevSlide = () => {
    slideIndex = (slideIndex - 1 + slideImages.length) % slideImages.length;
    showSlide(slideIndex);
  };

  let startSlideShow = () => {
    slideInterval = setInterval(nextSlide, 2500);
  };

  let resetSlideShow = () => {
    clearInterval(slideInterval);
    startSlideShow();
  };

  next.addEventListener("click", () => {
    nextSlide();
    resetSlideShow();
  });

  prev.addEventListener("click", () => {
    prevSlide();
    resetSlideShow();
  });

  // Initialize the first slide as active and start the slideshow
  showSlide(slideIndex);
  startSlideShow();
});

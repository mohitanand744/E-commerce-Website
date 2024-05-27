export let imageSlider = () => {
    
    let sliderContainer = document.querySelector(".slider-images");
    let slideImages = sliderContainer.querySelectorAll("img");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let dotContainer = document.querySelector(".dots-container");

    if (slideImages.length === 0) {
      console.error("No slide images found.");
      return;
    }

    let slideIndex = 0;
    let slideInterval;

    let showSlide = (index) => {
        dotContainer.innerHTML = "";
        
        slideImages.forEach((img, i) => {
        img.classList.remove("active");

        let dot = document.createElement("div");
        dot.classList.add("dot");

        dotContainer.appendChild(dot);

        if (i === index) {
          dot.classList.add("activeDot");
        }

        dot.addEventListener("click", () => {
          showSlide(i);
          resetSlideShow();
        });
      });

      // Add active class to the correct slide
      slideImages[index].classList.add("active");
    };

    let nextSlide = () => {
      slideIndex = slideIndex === slideImages.length - 1 ? 0 : slideIndex + 1;
      showSlide(slideIndex);
    };

    let prevSlide = () => {
      slideIndex = slideIndex === 0 ? slideImages.length - 1 : slideIndex - 1;
      showSlide(slideIndex);
    };

    let startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 3500);
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
};

imageSlider();

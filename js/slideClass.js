import { observeElement } from "./functions/observer.js";

class Slide {
     constructor() {
          this.portfolioContainerEl = document.querySelector(".portfolio");
          this.projectBoxEl = document.querySelector(".portfolio__projects");
          this.projectSliderBoxEl =
               document.querySelectorAll(".portfolio__slider");
          this.sliderDesktopEl = document.querySelector(".slider-desktop");
          this.sliderMobileEl = document.querySelector(".slider-mobile");
          // this.allImagesEl = document.querySelectorAll(
          //      ".portfolio__projects img"
          // );

          this.slidesEl = document.querySelectorAll(".slide");
          this.dotsBoxEl = document.querySelector(".dots");
          this.dotsEl = null;

          this.btnLeftEl = document.querySelector(
               ".portfolio__slider-btn--left"
          );
          this.btnRightEl = document.querySelector(
               ".portfolio__slider-btn--right"
          );

          this.curSlide = 0;
          this.slideLength = this.slidesEl.length - 6;
     }
     //-----------------------------------------//

     goToSlide(slide) {
          this.slidesEl.forEach((s, i) => {
               s.style.transform = `translateX(-${100 * slide}%)`;
          });
     }
     //-----------------------------------------//

     nextSlide() {
          if (this.curSlide === this.slideLength - 1) {
               this.curSlide = 0;
          } else {
               this.curSlide++;
          }

          this.goToSlide(this.curSlide);
          this.activeDot(this.curSlide);
     }
     //-----------------------------------------//

     prevSlide() {
          if (this.curSlide === 0) {
               this.curSlide = this.slideLength - 1;
          } else {
               this.curSlide--;
          }

          this.goToSlide(this.curSlide);
          this.activeDot(this.curSlide);
     }
     //-----------------------------------------//

     createDots() {
          for (let i = 0; i < this.slideLength; i++) {
               const dot = document.createElement("button");
               dot.classList.add("dots__dot");
               dot.dataset.slide = i;
               this.dotsBoxEl.appendChild(dot);
          }

          this.dotsEl = document.querySelectorAll(".dots__dot");
     }
     //-----------------------------------------//

     activeDot(slide) {
          this.dotsEl.forEach((dot) => {
               dot.classList.remove("dots__dot--active");
          });
          // this.curSlide = slide;
          this.dotsEl[slide].classList.add("dots__dot--active");
     }
     //-----------------------------------------//
     observeImages() {
          observeElement(
               this.portfolioContainerEl,
               {
                    root: null,
                    threshold: 0.3,
               },
               () => {
                    this.projectSliderBoxEl.forEach((el) => {
                         el.classList.add("show-projects");
                    });
               }
          );
     }
     //-----------------------------------------//
     expandProjectSlider(e) {
          const target = e.target.closest(".portfolio__slider");

          if (!target) return;

          this.projectBoxEl
               .querySelectorAll(".portfolio__slider")
               .forEach((el) => {
                    el.classList.add("reduce");
                    el.classList.remove("active");
               });

          target.classList.add("active");
          target.classList.remove("reduce");
     }
     //-----------------------------------------//
     handleEvents() {
          this.btnRightEl.addEventListener("click", this.nextSlide.bind(this));
          this.btnLeftEl.addEventListener("click", this.prevSlide.bind(this));

          this.dotsBoxEl.addEventListener("click", (e) => {
               if (e.target.classList.contains("dots__dot")) {
                    const { slide } = e.target.dataset;
                    this.goToSlide(slide);
                    this.activeDot(slide);
               }
          });

          this.projectBoxEl.addEventListener(
               "click",
               this.expandProjectSlider.bind(this)
          );

          document.addEventListener("keydown", (e) => {
               if (e.key === "ArrowLeft") this.prevSlide();
               e.key === "ArrowRight" && this.nextSlide();
          });
     }
     //-----------------------------------------//
     handlerViewPortChange() {
          const mediaQuery = window.matchMedia("(max-width: 600px)");

          const checkViewportChange = () => {
               if (mediaQuery.matches) {
                    this.sliderDesktopEl.classList.add("active");
                    this.sliderMobileEl.classList.add("reduce");
               } else {
                    this.projectBoxEl
                         .querySelectorAll(".portfolio__slider")
                         .forEach((el) => {
                              el.classList.remove("reduce");
                              el.classList.remove("active");
                         });
               }
          };

          checkViewportChange();

          mediaQuery.addEventListener("change", checkViewportChange);
     }
     //-----------------------------------------//

     init() {
          this.goToSlide(0);
          this.createDots();
          this.activeDot(0);
          this.handleEvents();
          this.handlerViewPortChange();
          this.observeImages();
     }
}
export default new Slide();

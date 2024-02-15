import { observeElement } from "./functions/observer.js";

class Testimonials {
     constructor() {
          this.testimonialsBoxEl = document.querySelector(".testimonials");
          this.iconEl = document.querySelector(".testimonials__icon");
          this.allCardsEl = document.querySelectorAll(".testimonials__card");
     }

     //-----------------------------------------//

     observeTestimonials() {
          observeElement(
               this.testimonialsBoxEl,
               {
                    root: null,
                    threshold: 0.3,
               },
               () => {
                    this.allCardsEl.forEach((card) => {
                         card.classList.add("show-testimonials");
                    });
               }
          );
     }
     //-----------------------------------------//
     observeIcon() {
          observeElement(
               this.iconEl,
               {
                    root: null,
                    threshold: 0.5,
               },
               () => {
                    this.iconEl.style =
                         "animation: drawHello .5s linear 1.5s forwards";
               },
               () => {
                    this.iconEl.style = "";
               }
          );
     }
     //-----------------------------------------//

     init() {
          this.observeTestimonials();
          this.observeIcon();
     }
}

export default new Testimonials();

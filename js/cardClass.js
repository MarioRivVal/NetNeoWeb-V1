import { observeElement } from "./functions/observer.js";

class Card {
     constructor() {
          this.servicesContainerEl = document.querySelector(".services");
          this.cardContainerEl = document.querySelector(".services__card-box");
          this.allCardIconsEl = document.querySelectorAll(
               ".card__btn--icon svg"
          );
          this.allCardsEl = document.querySelectorAll(".card__inner");
          this.allCardBoxEl = document.querySelectorAll(".card");

          this.triggers = document.querySelectorAll(
               ".services__buttons .btn-arrow"
          );

          this.allCardsArray = [...this.allCardBoxEl];
     }
     //-----------------------------------------//

     //-----------------------------------------//

     rotateCard(e) {
          const selectedCard = e.target.closest(".card__inner");

          this.allCardsEl.forEach((card) => {
               card.classList.remove("rotate");
          });
          selectedCard.classList.add("rotate");

          this.cardContainerEl.addEventListener("mouseleave", () => {
               selectedCard.classList.remove("rotate");
          });
     }
     //-----------------------------------------//

     rotateCardEvent() {
          this.allCardIconsEl.forEach((icon) => {
               icon.addEventListener("click", (e) => {
                    this.rotateCard(e);
               });
          });
     }

     //-----------------------------------------//

     showCards() {
          observeElement(
               this.servicesContainerEl,
               {
                    root: null,
                    threshold: 0.3,
               },
               () => {
                    this.allCardBoxEl.forEach((card) => {
                         card.classList.add("show-card");
                    });
               }
          );
     }
     //-----------------------------------------//
     setSliderControl() {
          this.triggers.forEach((trigger) => {
               trigger.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.setCurrentSlide(trigger);
               });
          });
     }
     //-----------------------------------------//
     setCurrentSlide(trigger) {
          if (trigger.classList.contains("btn-arrow--left")) {
               this.allCardsArray.unshift(this.allCardsArray.pop());
          } else {
               this.allCardsArray.push(this.allCardsArray.shift());
          }

          this.upDateSlider();
     }
     //-----------------------------------------//
     upDateSlider() {
          this.allCardsArray.forEach((el) => {
               el.classList.remove("card-1");
               el.classList.remove("card-2");
               el.classList.remove("card-3");
          });

          this.allCardsArray.slice(0, 3).forEach((el, i) => {
               el.classList.add(`card-${i + 1}`);
          });
     }

     //-----------------------------------------//

     //-----------------------------------------//

     init() {
          this.rotateCardEvent();
          this.showCards();
          this.setSliderControl();
     }
}

export default new Card();

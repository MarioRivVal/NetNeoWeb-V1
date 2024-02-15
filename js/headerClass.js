import { observeElement } from "./functions/observer.js";
import { scrollToSection } from "./functions/scrollToSection.js";

class Nav {
     constructor() {
          this.navEl = document.querySelector(".nav");
          this.navItemsEl = document.querySelectorAll(".nav__item");
          this.headerEl = document.querySelector(".header");
          this.logoNeoNetBtnEl = document.querySelector(".neonet-logo");

          this.imgDeveEl = document.querySelector(".img-developer");

          this.headerBtnsEl = document.querySelector(".header-btns");
          this.arrowLineIconEl = document.querySelector(".draw-path");
          this.arrowPointerIconEl = document.querySelector(".draw-arrow");

          this.linksListEl = document.querySelectorAll("a[href^='#']");

          this.navHeight = this.navEl.getBoundingClientRect().height;
     }

     //-----------------------------------------//
     // NAVIGATION BAR
     //-----------------------------------------//

     eventHandlerSectionScroll() {
          this.linksListEl.forEach((link) => {
               link.addEventListener("click", (e) => {
                    scrollToSection(e);
               });
          });
     }
     // eventHandlerSectionScroll() {
     //      this.linksListEl.addEventListener("click", (e) => {
     //           scrollToSection(e);
     //      });
     // }

     //-----------------------------------------//
     showDevImage() {
          this.imgDeveEl.style.animation =
               "photoInBottom 0.5s ease-in forwards";
     }
     //-----------------------------------------//

     navLight() {
          let x = 0;
          let y = 0;

          this.navEl.addEventListener("mousemove", (e) => {
               if (
                    this.navEl.classList.contains("rotateNav") ||
                    window.matchMedia("(pointer: coarse)").matches
               )
                    return;

               const rect = this.navEl.getBoundingClientRect();

               x = e.clientX - rect.left;
               y = e.clientY - rect.top;

               this.navEl.style.setProperty("--xPost", `${x}px`);
               this.navEl.style.setProperty("--yPost", `${y}px`);
          });
     }
     //-----------------------------------------//
     addStickyClass(elements) {
          elements.forEach((element) => {
               element.classList.add("sticky");
          });
     }
     //-----------------------------------------//
     removeStickyClass() {
          this.navEl.classList.remove("sticky");
          this.navItemsEl.forEach((item) => item.classList.remove("sticky"));
     }

     //-----------------------------------------//

     toggleNavBar() {
          this.navEl.classList.toggle("open");
          this.navItemsEl.forEach((item) => item.classList.toggle("open"));
     }

     //-----------------------------------------//
     observeNavBar() {
          observeElement(
               this.headerEl,
               {
                    root: null,
                    threshold: 0,
                    rootMargin: `-${this.navHeight}px`,
               },
               () => {
                    this.removeStickyClass([this.navEl, ...this.navItemsEl]);
                    this.navEl.classList.remove("open");
                    this.navItemsEl.forEach((item) =>
                         item.classList.remove("open")
                    );
               },
               () => {
                    this.addStickyClass([this.navEl, ...this.navItemsEl]);
               }
          );

          this.logoNeoNetBtnEl.addEventListener("click", () => {
               this.toggleNavBar();
          });
     }
     //-----------------------------------------//
     // ICON DRAWING
     //-----------------------------------------//

     toggleArrowIcon() {
          observeElement(
               this.headerBtnsEl,
               {
                    root: null,
                    threshold: 0.5,
               },
               () => {
                    this.drawIcon();
               },
               () => {
                    this.deleteIcon();
               }
          );
     }
     //-----------------------------------------//
     drawIcon() {
          this.arrowLineIconEl.style.animation = `draw 1s linear  forwards`;
          this.arrowPointerIconEl.style.animation = `draw 1.5s linear  forwards`;
     }
     //-----------------------------------------//
     deleteIcon() {
          this.arrowLineIconEl.style.animation = "delete  linear forwards";
          this.arrowPointerIconEl.style.animation = "delete  linear forwards";
     }

     //-----------------------------------------//

     init() {
          this.eventHandlerSectionScroll();
          this.showDevImage();
          this.navLight();
          this.observeNavBar();
          this.toggleArrowIcon();
     }
}

export default new Nav();

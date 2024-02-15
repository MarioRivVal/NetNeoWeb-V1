import { observeElement } from "./functions/observer.js";

class Tools {
     constructor() {
          this.toolsSectionEl = document.getElementById("section-tools");
          this.allToolsEl = document.querySelectorAll(".tools__item");
     }

     //-----------------------------------------//
     observerTools() {
          observeElement(
               this.toolsSectionEl,
               {
                    root: null,
                    threshold: 0.8,
               },
               () => {
                    this.allToolsEl.forEach((tool) => {
                         tool.classList.add("show-tools");
                    });
               },
               () => {
                    this.allToolsEl.forEach((tool) => {
                         tool.classList.remove("show-tools");
                    });
               }
          );
     }
     //-----------------------------------------//

     init() {
          this.observerTools();
     }
}

export default new Tools();

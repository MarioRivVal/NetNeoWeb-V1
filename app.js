import header from "./js/headerClass.js";
import card from "./js/cardClass.js";
import slide from "./js/slideClass.js";
import tools from "./js/toolsClass.js";
import testimonials from "./js/testimonialsClass.js";
import { setResumeFile } from "./js/functions/setResumeFile.js";
import { setCurrentYear } from "./js/functions/setCurrentYear.js";

window.addEventListener("DOMContentLoaded", () => {
     header.init();
     card.init();
     tools.init();
     testimonials.init();
     slide.init();
     setResumeFile();
     setCurrentYear();
});

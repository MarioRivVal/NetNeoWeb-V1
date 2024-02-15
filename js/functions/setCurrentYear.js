export const setCurrentYear = function () {
     document.querySelector(".current-year").textContent =
          new Date().getFullYear();
};

export const scrollToSection = function (e) {
     e.preventDefault();
     const target = e.target.closest("a");
     const id = target && target.getAttribute("href");
     const section = id && document.querySelector(id);
     section && section.scrollIntoView({ behavior: "smooth" });
};

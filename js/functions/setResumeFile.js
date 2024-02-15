export const setResumeFile = function () {
     let resumeLink = document.querySelectorAll(".resume-link");
     let userLang = navigator.language || navigator.userLanguage;

     let resumeFile = "";

     if (userLang.includes("es")) {
          resumeFile = "document/mario-rivera-cv-español.pdf";
     } else if (userLang.includes("it")) {
          resumeFile = "document/mario-rivera-cv-italiano.pdf";
     } else {
          resumeFile = "document/mario-rivera-cv-english.pdf";
     }

     console.log(resumeFile);
     resumeLink.forEach((link) => {
          link.setAttribute("href", resumeFile);
     });
};

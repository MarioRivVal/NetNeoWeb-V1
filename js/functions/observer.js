export const observeElement = function (
     element,
     options,
     onIntersect,
     onNotIntersect = () => {}
) {
     const observer = new IntersectionObserver((entries) => {
          const [entry] = entries;

          if (!entry.isIntersecting) {
               onNotIntersect();
          } else {
               onIntersect();
          }
     }, options);

     observer.observe(element);
};

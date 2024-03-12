const headerIDs = ["salads-button", "bowls-button", "sides-button"];
const headerEls = headerIDs.map((id) => document.getElementById(id));
const carouselContentIDs = ["salads-content", "bowls-content", "sides-content"];
const carouselContentEls = carouselContentIDs.map((id) =>
  document.getElementById(id)
);

headerEls.map((headerEl, headerIndex) => {
  headerEl?.addEventListener("click", () => {
    headerEls.map((headerEl, thisIndex) => {
      if (thisIndex === headerIndex) {
        headerEl?.classList.add("active");
        return;
      }
      headerEl?.classList.remove("active");
    });

    carouselContentEls.map((carouselContentEl, thisIndex) => {
      if (thisIndex === headerIndex) {
        carouselContentEl?.classList.add("active");
        return;
      }
      carouselContentEl?.classList.remove("active");
    });
  });
});

console.log(carouselContentEls);

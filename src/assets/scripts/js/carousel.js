"use strict";
const headerIDs = ["salads-button", "bowls-button", "sides-button"];
const headerEls = headerIDs.map((id) => document.getElementById(id));
const carouselContentIDs = ["salads-content", "bowls-content", "sides-content"];
const carouselContentEls = carouselContentIDs.map((id) => document.getElementById(id));
headerEls.map((headerEl, headerIndex) => {
    headerEl === null || headerEl === void 0 ? void 0 : headerEl.addEventListener("click", () => {
        headerEls.map((headerEl, thisIndex) => {
            if (thisIndex === headerIndex) {
                headerEl === null || headerEl === void 0 ? void 0 : headerEl.classList.add("active");
                return;
            }
            headerEl === null || headerEl === void 0 ? void 0 : headerEl.classList.remove("active");
        });
        carouselContentEls.map((carouselContentEl, thisIndex) => {
            if (thisIndex === headerIndex) {
                carouselContentEl === null || carouselContentEl === void 0 ? void 0 : carouselContentEl.classList.add("active");
                return;
            }
            carouselContentEl === null || carouselContentEl === void 0 ? void 0 : carouselContentEl.classList.remove("active");
        });
    });
});
console.log(carouselContentEls);

"use strict";
const navElement = document.querySelector("nav");
const closeMenuButton = document.querySelector("#close-menu");
const openMenuButton = document.querySelector("#open-menu");
closeMenuButton === null || closeMenuButton === void 0 ? void 0 : closeMenuButton.addEventListener("click", () => {
    navElement === null || navElement === void 0 ? void 0 : navElement.classList.remove("open");
});
openMenuButton === null || openMenuButton === void 0 ? void 0 : openMenuButton.addEventListener("click", () => {
    navElement === null || navElement === void 0 ? void 0 : navElement.classList.add("open");
});

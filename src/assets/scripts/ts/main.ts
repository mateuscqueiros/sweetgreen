const navElement = document.querySelector("nav");
const closeMenuButton = document.querySelector("#close-menu");
const openMenuButton = document.querySelector("#open-menu");

closeMenuButton?.addEventListener("click", () => {
  navElement?.classList.remove("open");
});

openMenuButton?.addEventListener("click", () => {
  navElement?.classList.add("open");
});

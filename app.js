const logoHeader = document.querySelector("#logo-header");
const logoFooter = document.querySelector("#logo-footer");
const list = document.querySelector("#list");
const readMore = document.querySelector("#article-button");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const categoryHeader = document.querySelectorAll(".category-header");
const categoryFooter = document.querySelectorAll(".category-footer");

logoHeader.addEventListener("mouseenter", () => {
  logoHeader.style.cursor = "pointer";
});
logoFooter.addEventListener("mouseenter", () => {
  logoFooter.style.cursor = "pointer";
});
list.addEventListener("mouseenter", () => {
  list.style.cursor = "pointer";
});
readMore.addEventListener("click", () => {
  alert("Button Clicked");
});
leftArrow.addEventListener("mouseenter", () => {
  leftArrow.style.cursor = "pointer";
});
rightArrow.addEventListener("mouseenter", () => {
  rightArrow.style.cursor = "pointer";
});
for (let ctg of categoryFooter) {
  ctg.addEventListener("mouseenter", () => {
    ctg.style.cursor = "pointer";
  });
}
for (let ctg of categoryHeader) {
  ctg.addEventListener("mouseenter", () => {
    ctg.style.cursor = "pointer";
  });
}

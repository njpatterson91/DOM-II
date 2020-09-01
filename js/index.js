// Your code goes here
const heroImg = document.querySelector(".intro img");
const navText = document.querySelector(".logo-heading");
const navLinks = document.querySelector("nav");
const headerTitle = document.querySelector(".intro h2");
const headerText = document.querySelector(".intro p");
const leBody = document.querySelector("body");

heroImg.addEventListener("click", function (event) {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
navLinks.addEventListener("mouseover", function (event) {
  document.body.style.backgroundColor = "green";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    headerTitle.textContent = "BRUHHHH";
  }
});
document.addEventListener("scroll", function (event) {
  document.body.style.backgroundColor = "blue";
});
document.addEventListener("dblclick", function (event) {
  document.body.style.backgroundColor = "black";
});

Array.from(document.links).forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
document.addEventListener("contextmenu", function (event) {
  document.body.style.backgroundColor = "yellow";
});
document.addEventListener("mouseout", function (event) {
  document.body.style.backgroundColor = "grey";
});
document.addEventListener("mousedown", function (event) {
  document.body.style.backgroundColor = "white";
});
document.addEventListener("mouseup", function (event) {
  event.target.textContent = "Brrrrruuuuuuuuuhhhhhhh";
  event.stopPropagation();
  event.currentTarget.style.backgroundColor = "black";
});

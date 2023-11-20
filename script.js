let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

const nightMode = document.querySelector(".toggle");
nightMode.addEventListener("click", () => {
  document.body.classList.toggle("night")
});


const pText = document.querySelectorAll(".chang-color");

pText.forEach(function(event){
  nightMode.addEventListener("click", () => {
    event.classList.toggle("pColor")
  });
});

const borders = document.querySelectorAll(".border-colors");

borders.forEach(function (border) {
  nightMode.addEventListener("click", () => {
    border.classList.toggle("active-border");
  });
});



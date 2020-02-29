import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";
import Pikaday from "pikaday";
const mobileToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

const banner = tns({
  container: '.slider',
  mode: "gallery",
  axis: "vertical",
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: "bottom"
});

const testimonies = tns({
  container: '.client-slider',
  mode: "gallery",
  axis: "vertical",
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  navPosition: "bottom"

});

var picker = new Pikaday({ 
  field: document.getElementById('datepicker') ,
  format: 'MMM D YYYY',
});

function toggleNav() {
  headerNav.classList.toggle("nav-active");
  mobileToggle.classList.toggle("toggle-height");
  document.querySelector("body").classList.toggle("no-scroll");
  mobileToggle.children[1].classList.toggle("turn-cross-1");
  mobileToggle.children[2].classList.toggle("invisible");
  mobileToggle.children[3].classList.toggle("turn-cross-3");
  if(mobileToggle.getAttribute("aria-expanded") === "false"
  && navList.getAttribute("aria-hidden") === "true") {
      mobileToggle.setAttribute("aria-expanded", "true");
      navList.setAttribute("aria-hidden", "false");
  } else {
      mobileToggle.setAttribute("aria-expanded", "false");
      navList.setAttribute("aria-hidden", "true");
  }
}

mobileToggle.addEventListener("click", toggleNav);
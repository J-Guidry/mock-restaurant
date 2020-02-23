import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";
//const slider = document.querySelector(".slider");

const slides = tns({
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
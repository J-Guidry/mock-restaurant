import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";
import Pikaday from "pikaday";

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
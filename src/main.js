import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";
import Pikaday from "pikaday";
const mobileToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");
const tablinks = document.querySelector(".tab-links");
const tabs = tablinks.querySelectorAll("a");
const panels = document.querySelectorAll(".panel");


const bannerSlide = tns({
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

const clientSlide = tns({
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

//console.log(bannerSlide.events);

function changeBgImage () {
  let slides = Array.from(document.querySelector(".slider").children);
  let banner = document.querySelector(".banner");
  const bgArray = [
    'url(images/img_bg_1.jpg)',
    'url(images/img_bg_2.jpg)',
    'url(images/img_bg_3.jpg)',
    'url(images/img_bg_4.jpg)'
  ];
  slides.forEach(slide => {
    let active = slide.classList.contains("tns-slide-active");
    if (active === true) {
      let id;
      id = slide === slides[slides.length - 1] ? 0 : parseInt(slide.id.charAt(slide.id.length -1));
      let bgImg = bgArray[id];
      banner.style.backgroundImage = bgImg;
    } 
  });
}

bannerSlide.events.on("indexChanged", changeBgImage);

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


// activate panels and change aria attributes when switching tabs
function switchTab(oldTab, chosenTab) {
  chosenTab.focus();
  chosenTab.setAttribute("aria-selected", "true");
  chosenTab.classList.toggle("active");
  oldTab.setAttribute("aria-selected", 'false');
  oldTab.classList.toggle("active");
  let index = Array.prototype.indexOf.call(tabs,chosenTab);
  let oldIndex = Array.prototype.indexOf.call(tabs,oldTab);
  panels[oldIndex].classList.toggle("active");
  panels[oldIndex].setAttribute("aria-hidden", "true");
  panels[index].classList.toggle("active");
  panels[index].setAttribute("aria-hidden", "false");
}

// add click and keyboard event listeners to tabs
tabs.forEach(function(tab, i) {
  tab.addEventListener("click", function(event) {
      event.preventDefault();
      const currentlySelectedTab = document.querySelector('[aria-selected="true"]');
      const newlySelectedTab = event.currentTarget;
      if (currentlySelectedTab !== newlySelectedTab) {
          switchTab(currentlySelectedTab, newlySelectedTab);
      }
  });
  
  tab.addEventListener('keydown', e => {  
      let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
      let dir = e.which === 37 ? index - 1 
              : e.which === 39 ? index + 1 
              : e.which === 40 ? 'down' : null;

      if (dir !== null) {
          e.preventDefault();
          dir === 'down' ? panels[i].focus() 
              : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) 
              : void 0;
      }
  });

});

var picker = new Pikaday({ 
  field: document.getElementById('datepicker') ,
  format: 'MMM D YYYY',
});

mobileToggle.addEventListener("click", toggleNav);
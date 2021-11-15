import "./assets/styles/styles.scss";
import "./index.scss";
import "./assets/javascripts/variables";
import "./assets/javascripts/app";

// import { gsap } from "gsap";

// document.addEventListener("DOMContentLoaded", function () {
//   var tl = gsap.timeline();
//   tl.to(".title--mid", { opacity: 1, x: 0, duration: 1, ease: "power2" });
//   tl.to(".p-big", {
//     opacity: 1,
//     x: 0,
//     duration: 1,
//     ease: "power2",
//     delay: -0.3,
//   });
//   tl.to(".icon", {
//     opacity: 1,
//     x: 0,
//     duration: 1,
//     ease: "power2",
//     delay: -0.3,
//   });
// });

/// button start

const buttonStart = document.querySelector(".icon");
const containerTitle = document.querySelector(".container-title");
const video = document.querySelector(".video");

const html = document.querySelector("html");
let height = window.innerHeight;

buttonStart.addEventListener("click", (e) => {
  video.play();
  containerTitle.classList.add("opacity-remove");
});

video.addEventListener("ended", (e) => {
  html.style.overflowY = "auto";

  window.scrollTo({ top: height, behavior: "smooth" });
  containerTitle.classList.remove("opacity-remove");
});

// size video
function resizeVideo() {
  if (
    window.matchMedia("(min-width: 400px)").matches &&
    window.matchMedia("(max-width: 799px)").matches
  ) {
    video.setAttribute("src", "./assets/images/Disney-1_tablette.mp4");
  }
  if (window.matchMedia("(min-width: 801px)").matches) {
    video.setAttribute("src", "./assets/images/Disney-1.mp4");
  }
}
resizeVideo();
window.addEventListener("resize", (e) => {
  resizeVideo();
});

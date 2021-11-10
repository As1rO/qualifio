import "./assets/styles/styles.scss";
import "./index.scss";
import "./assets/javascripts/variables";
import "./assets/javascripts/app";

import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  var tl = gsap.timeline();
  tl.to(".title--mid", { opacity: 1, x: 0, duration: 1, ease: "power2" });
  tl.to(".p-big", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2",
    delay: -0.3,
  });
  tl.to(".icon", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2",
    delay: -0.3,
  });
});

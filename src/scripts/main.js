import { Application } from "stimulus";
import { registerControllers } from "./lib/helpers";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

window.firstRender = true;
window.Stimulus = Application.start();
registerControllers(window.Stimulus);

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

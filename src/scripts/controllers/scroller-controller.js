import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Controller } from "stimulus";

gsap.registerPlugin(ScrollTrigger);

export let lenis = new Lenis({
  lerp: 0.175,
});

export default class extends Controller {
  connect() {
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }
}

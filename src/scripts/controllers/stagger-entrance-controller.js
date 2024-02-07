import { gsap } from "gsap";
import { Controller } from "stimulus";
import { useIntersection } from "stimulus-use";
import { afterIntro } from "../lib/helpers";

export default class StaggerEntrance extends Controller {
  static targets = ["child"];
  static values = {
    threshold: { type: Number, default: 0.3 },
    stagger: { type: Number, default: 0.05 },
  };
  connect() {
    this.reset();
    afterIntro(() => {
      const [observe, unobserve] = useIntersection(this, {
        threshold: this.thresholdValue,
      });
      this.unobserve = unobserve;
    });
  }
  reset() {
    gsap.set(this.staggerTargets, { opacity: 0, y: 50 });
  }
  appear() {
    this.unobserve();

    gsap.to(this.staggerTargets, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: this.staggerValue,
      ease: "power4.out",
    });
  }
  get staggerTargets() {
    return this.hasChildTargets ? this.childTargets : this.element.children;
  }
}

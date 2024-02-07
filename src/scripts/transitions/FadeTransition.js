import { Transition } from "@unseenco/taxi";
import { gsap } from "gsap";

export default class FadeTransition extends Transition {
  onLeave({ from, done }) {
    gsap.fromTo(
      from,
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 0,
        x: 200,
        duration: 0.25,
        ease: "circ.in",
        onComplete: () => {
          done();
        },
      },
    );
  }
  onEnter({ to, done }) {
    gsap.fromTo(
      to,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "circ.out",
        onComplete: done,
        clearProps: "all",
      },
    );
  }
}

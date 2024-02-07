import { Renderer } from "@unseenco/taxi";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class DefaultRenderer extends Renderer {
  onLeave() {
    // run before the transition.onLeave method is called
    window.dispatchEvent(new CustomEvent("page:leave"));
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
    window.dispatchEvent(new CustomEvent("page:leave-completed"));
    window.scrollTo({ top: 0 });
    window.firstRender = false;
  }
  onEnter() {
    // run after the new content has been added to the Taxi container
    window.dispatchEvent(new CustomEvent("page:enter"));

    if (window.location.pathname == "/")
      document.body.classList.add("is-frontpage");
    else document.body.classList.remove("is-frontpage");
  }

  onEnterCompleted() {
    window.dispatchEvent(new CustomEvent("page:enter-completed"));

    ScrollTrigger.refresh();
  }
}

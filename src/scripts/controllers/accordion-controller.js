import { gsap } from "gsap";
import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["indicator", "indicatorVertical", "content"];
  static values = {
    siblings: String,
  };

  targetIsInteractive(el) {
    return ["a", "button"].includes(el.tagName.toLowerCase());
  }

  connect() {
    this.isOpen = false;
  }
  toggle({ target }) {
    if (this.targetIsInteractive(target)) return; // Abort if target has pre-defined intentions

    this.isOpen = !this.isOpen;

    this.element.classList.toggle("open");

    if (this.hasIndicatorTarget)
      this.indicatorTarget.classList.toggle("active");

    if (this.hasContentTarget) {
      gsap.to(this.contentTarget, {
        height: this.isOpen ? "auto" : 0,
        opacity: this.isOpen ? 1 : 0,
        duration: 0.75,
        ease: "power3.inOut",
      });
    }

    if (this.isOpen && this.hasSiblingsValue) this.closeSiblings();
    this.dispatch("toggle", { detail: { isOpen: this.isOpen } });
  }
  closeSiblings() {
    const siblings = document.querySelectorAll(this.siblingsValue);
    if (siblings.length > 0)
      Array.from(siblings)
        .filter((el) => el != this.element)
        .forEach((sibling) => {
          const accordion =
            this.application.getControllerForElementAndIdentifier(
              sibling,
              "accordion",
            );
          if (accordion.isOpen) accordion.toggle();
        });
  }
}

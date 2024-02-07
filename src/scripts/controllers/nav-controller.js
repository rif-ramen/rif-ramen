import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["link"];
  connect() {
    window.addEventListener("page:enter", this.updateActiveLink.bind(this));
    this.updateActiveLink();
  }

  updateActiveLink() {
    this.linkTargets.forEach((link) => {
      if (
        link.href == window.location.href ||
        window.location.href.includes(link.href)
      )
        link.classList.add("active");
      else link.classList.remove("active");
    });
  }
}

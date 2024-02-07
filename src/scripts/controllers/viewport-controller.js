import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    this.setScreenSize();
    window.addEventListener("resize", this.setScreenSize.bind(this));
  }
  setScreenSize() {
    document
      .querySelector(":root")
      .style.setProperty("--screen-h", `${window.innerHeight}px`);
  }
}

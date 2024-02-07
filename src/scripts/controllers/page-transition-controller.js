import { Controller } from "stimulus";
import { Core } from "@unseenco/taxi";
import FadeTransition from "../transitions/FadeTransition";
import DefaultRenderer from "../renderers/DefaultRenderer";

export default class extends Controller {
  connect() {
    this.taxi = new Core({
      reloadCssFilter: () => true,
      reloadJsFilter: () => true,
      transitions: {
        default: FadeTransition,
      },
      renderers: { default: DefaultRenderer },
    });
  }
}

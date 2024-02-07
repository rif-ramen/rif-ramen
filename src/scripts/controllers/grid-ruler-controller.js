import { Controller } from "stimulus";

export default class GridRulerController extends Controller {
  connect() {
    setTimeout(this.updateGridVariables.bind(this));
  }

  updateGridVariables() {
    const { width, gap } = this.measureColumns();
    const columns = 12;

    for (let i = 1; i <= columns; i++) {
      document
        .querySelector(":root")
        .style.setProperty(
          `--site-grid-col-width-${i}`,
          `${width * i + i * gap}px`,
        );
    }

    document
      .querySelector(":root")
      .style.setProperty("--site-grid-col-gap", `${gap}px`);
  }

  measureColumns() {
    const [col1, col2] = this.element.children;
    const col1Bounds = col1.getBoundingClientRect();
    const col2Bounds = col2.getBoundingClientRect();

    return {
      width: col1Bounds.width,
      gap: col2Bounds.left - (col1Bounds.left + col1Bounds.width),
    };
  }
}

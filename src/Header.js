import { createEl } from "./utils";

export class Header {
  constructor() {
    this.innerHTML = '<h1 class="header-title fontweight">Home</h1>';

    this.el = createEl({
      className: "header-heading",
      type: "h1",
      target: document.body,
      innerHTML: this.innerHTML
    });
  }
}

import { createEl } from './utils';

export class Header {
  constructor(target) {
    this.innerHTML = '<h1 class="header-title fontweight">Home</h1>';

    this.el = createEl({
      className: 'header-heading',
      type: 'h1',
      target: target,
      innerHTML: this.innerHTML,
      position: 'afterbegin'
    });
  }
}

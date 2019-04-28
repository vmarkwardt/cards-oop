import { createEl } from './utils';

export class Button {
  constructor({ classes, target }) {
    this.innerHTML = '';
    this.el = createEl({
      className: classes,
      type: 'button',
      target: target,
      innerHTML: this.innerHTML
    });
  }
}

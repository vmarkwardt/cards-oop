import { createEl } from './utils';
import { log } from 'util';

export class Card {
  //
  constructor({ title, content, target }) {
    //
    console.log(this, 'TITLE $$$$$$$ ' + title);
    this.el = createEl({
      className: 'card-layout',
      type: 'section',
      target: target
    });

    this.headingEl = createEl({
      className: 'card-heading fontweight bordershape',
      type: 'h2',
      target: this.el,
      innerHTML: title
    });
    this.bookmarkEl = createEl({
      className: 'card-bookmark',
      type: 'button',
      target: this.el,
      onClick: (event) => toggleOnClick(event)
    });
    this.contentEl = createEl({
      className: 'card-content',
      type: 'p',
      target: this.el,
      innerHTML: content
    });
  }

  toggleOnClick(event) {
    event.target.classList.toggle('active');
  }
}

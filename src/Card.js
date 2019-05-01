import { createEl } from './utils';
import { log } from 'util';

export class Card {
  //
  constructor({ card, target }) {
    this.el = createEl({
      className: 'card-layout',
      type: 'section',
      target: target
    });

    this.headingEl = createEl({
      className: 'card-heading fontweight bordershape',
      type: 'h2',
      target: this.el,
      innerHTML: card.title
    });
    this.bookmarkEl = createEl({
      className: `card-bookmark ${card.isBookmarked ? 'active' : ''}`,
      type: 'button',
      target: this.el,
      onClick: (event) => this.toggleOnClick(event, this)
    });
    this.contentEl = createEl({
      className: 'card-content',
      type: 'p',
      target: this.el,
      innerHTML: card.content
    });
  }

  toggleOnClick(event, cardObj) {
    event.target.classList.toggle('active');

    //console.log(cardObj); change Bookmark status
  }
}

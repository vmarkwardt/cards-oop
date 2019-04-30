import { createEl } from './utils';
import { Card } from './Card';
import { timingSafeEqual } from 'crypto';

export class CardList {
  constructor(target) {
    this.cardList = [
      { title: 'test', content: 'dies ist ein test', isBookmarked: false }
    ];
    this.el = createEl({
      className: 'main__content content-card',
      type: 'section',
      target: target
    });
    this.render();
  }

  /* get cardList() {
    return cardList;
  }

  set cardList(cards) {
    this.cardList = [...cards];
  } */

  render() {
    this.cardList
      .map(
        (card) =>
          new Card({
            ...card,
            target: this.el
          })
      )
      .map((card) => card.el)
      .forEach((cardEl) => this.el.appendChild(cardEl));
  }
}

import { createEl } from './utils';
import { Card } from './Card';

export class CardPage {
  constructor(target, cardList) {
    this.cardList = cardList;

    this.el = createEl({
      className: 'main__content page-card-list',
      type: 'section',
      target: target
    });

    this.render(this.cardList);
  }

  render(cardList) {
    // console.log('CARDLIST ^^^^^^^', this.cardList);
    cardList
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

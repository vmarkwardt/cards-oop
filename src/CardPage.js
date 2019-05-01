import { createEl } from './utils';
import { Card } from './Card';

export class CardPage {
  constructor(target, cardList) {
    this.cardList = cardList;

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
    // console.log('CARDLIST ^^^^^^^', this.cardList);
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

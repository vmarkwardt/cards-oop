import { createEl } from './src/utils';
import { Card } from './src/Card';
import { timingSafeEqual } from 'crypto';

export class CardList {
  constructor(target) {
    this.cardList = [{ title: 'test', content: 'dies ist ein test' }];
    this.el = createEl({
      className: 'card-layout',
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
    this.el.innerHTML = this.cardList.map(
      (card) =>
        new Card({
          ...card,
          target: this.el
        }).el.innerHTML
    );
  }
}

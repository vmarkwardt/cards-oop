import { Model } from './Model';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardPage } from './CardPage';
import { CreatePage } from './CreatePage';

export class App {
  constructor() {
    this.model = new Model();
    this.headerEl = new Header();
    this.cardListEl = new CardPage(cardList);
    this.createPage = new CreatePage();
    this.navigationEl = new Navigation();

    this.cardList = [
      { title: 'test', content: 'dies ist ein test', isBookmarked: false }
    ];
    this.el = createEl({
      className: 'main__content content-card',
      type: 'section',
      target: target
    });
  }
}

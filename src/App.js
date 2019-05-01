import { Model } from './Model';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardPage } from './CardPage';
import { CreatePage } from './CreatePage';
import { getEl } from './utils';

export class App {
  constructor() {
    this.el = getEl('#app');
    this.el.className = 'body-grid';

    this.model = new Model();
    this.cardList = this.model.getAllCards();

    this.headerEl = new Header(this.el);
    this.cardPageEl = new CardPage(this.el, this.cardList);
    this.createPage = new CreatePage(this.el, handleCreateCard);
    this.navigationEl = new Navigation();
  }

  handleCreateCard(newCard) {
    model.addCard(newCard);
    cardPageEl.render();
  }
}

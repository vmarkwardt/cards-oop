import { Model } from './Model';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardPage } from './CardPage';
import { CreatePage } from './CreatePage';
import { log } from 'util';
import { lookup } from 'dns';

export class App {
  constructor() {
    this.el = document.body;
    this.el.className = 'body-grid';

    this.model = new Model();
    this.cardList = this.model.getAllCards();
    this.headerEl = new Header();
    this.cardListEl = new CardPage(this.el, this.cardList);
    this.createPage = new CreatePage();
    this.navigationEl = new Navigation();
  }
}

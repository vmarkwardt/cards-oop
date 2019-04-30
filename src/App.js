import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardPage } from './CardPage';
import { CreatePage } from './CreatePage';

export class App {
  constructor() {
    this.headerEl = new Header();
    this.cardListEl = new CardPage();
    this.createPage = new CreatePage();
    this.navigationEl = new Navigation();
  }
}

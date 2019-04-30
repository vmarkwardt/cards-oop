import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardList } from './CardList';

export class App {
  constructor() {
    this.headerEl = new Header();
    this.cardListEl = new CardList();
    this.navigationEl = new Navigation();
  }
}

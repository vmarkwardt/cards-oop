import { Model } from './Model';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { CardPage } from './CardPage';
import { CreatePage } from './CreatePage';
import { SettingsPage } from './SettingsPage';
import { getEl, getAllEl } from './utils';
import { log } from 'util';
import { ProfilePage } from './ProfilePage';

export class App {
  constructor() {
    this.el = getEl('#app');
    this.el.className = 'body-grid';

    this.model = new Model();
    this.cardList = this.model.getAllCards();

    // view state
    this.activePage = 'page-card-list'; // == home

    this.headerEl = new Header(this.el);
    this.cardPageEl = new CardPage(this.el, this.cardList);
    this.createPage = new CreatePage(this.el, this.handleCreateCard.bind(this));
    this.profilePage = new ProfilePage(this.el);
    this.settingsPage = new SettingsPage(this.el, this.handleDarkmode);
    this.navigationEl = new Navigation(this.handleNavigation.bind(this));
  }

  handleCreateCard(newCard) {
    this.model.addCard(newCard).bind;
    this.cardPageEl.render(this.model.getAllCards());
  }

  handleNavigation(event, activePage) {
    this.activePage = activePage; //ex 'page-create'
    this.headerEl.update(activePage);
    this.showPage(activePage);
    this.navigationEl.update(activePage);
  }

  showPage(activePage) {
    getAllEl('.main__content', this.el).forEach((pageEl) =>
      pageEl.classList.add('hidden')
    );
    getEl(`.${activePage}`).classList.remove('hidden');
  }

  handleDarkmode(isDark) {
    if (isDark) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }
}

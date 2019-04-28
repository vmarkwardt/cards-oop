import { createEl } from './utils';
import { Button } from './Button';

export class Navigation {
  constructor() {
    this.buttonList = [
      { name: 'home', classes: 'nav__button fas fa-home active' },
      { name: 'create', classes: 'nav__button fas fa-folder-plus' },
      { name: 'profile', classes: 'nav__button fas fa-user-circle' },
      { name: 'settings', classes: 'nav__button fas fa-cog' }
    ];

    this.el = createEl({
      className: 'footer-layout',
      type: 'footer',
      target: document.body,
      innerHTML: this.innerHTML
    });

    this.navEl = createEl({
      className: '',
      type: 'nav',
      target: this.el,
      innerHTML: ''
    });

    this.buttonList.forEach(
      button => new Button({ classes: button.classes, target: this.navEl })
    );
  }
}

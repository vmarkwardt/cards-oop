import { createEl } from './utils';
import { Button } from './Button';

export class Navigation {
  constructor() {
    this.buttonList = [
      {
        name: 'home',
        classes: 'nav__button fas fa-home active',
        onClick: (event) => this.navCardOnClick(event)
      },
      {
        name: 'create',
        classes: 'nav__button fas fa-folder-plus',
        onClick: (event) => this.navCreateOnClick(event)
      },
      {
        name: 'profile',
        classes: 'nav__button fas fa-user-circle',
        onClick: (event) => this.navProfileOnClick(event)
      },
      {
        name: 'settings',
        classes: 'nav__button fas fa-cog',
        onClick: (event) => this.navSettingsOnClick(event)
      }
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
      (button) =>
        new Button({
          classes: button.classes,
          target: this.navEl,
          //onClick: this.navCardOnClick.bind(this)
          //onClick: (event) => this.navCardOnClick(event)
          onClick: button.onClick
        })
    );
  }

  navCardOnClick(event) {
    this.toggleButtons(event);
    //hideContent();
    //contentCard.classList.remove('hidden');
    //heading.innerText = 'Home';
  }

  navCreateOnClick(event) {
    this.toggleButtons(event);
    //hideContent();
    //contentCard.classList.remove('hidden');
    //heading.innerText = 'Home';
  }
  navProfileOnClick(event) {
    this.toggleButtons(event);
    //hideContent();
    //contentCard.classList.remove('hidden');
    //heading.innerText = 'Home';
  }
  navSettingsOnClick(event) {
    this.toggleButtons(event);
    //hideContent();
    //contentCard.classList.remove('hidden');
    //heading.innerText = 'Home';
  }
  /* 
  hideContent = () => {
    contentElements.forEach(section => section.classList.add('hidden'));
  }; */

  toggleButtons(event) {
    const buttonElList = document.querySelectorAll('.nav__button');
    buttonElList.forEach((navButton) => navButton.classList.remove('active'));
    event.target.classList.add('active');
  }
}

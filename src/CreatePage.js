import { createEl, getEl } from './utils';

export class CreatePage {
  constructor(target, onSubmit) {
    this.el = createEl({
      className: 'main__content content-create hidden',
      type: 'section',
      target
    });

    this.renderForm(onSubmit);
  }

  renderForm(onSubmit) {
    this.formEl = createEl({
      type: 'form',
      className: 'form__create-card',
      target: this.el,
      innerHTML: getEl('.form--template').innerHTML
    });

    this.formEl.addEventListener('submit', onSubmit);
  }
}

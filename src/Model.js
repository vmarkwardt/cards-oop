import { getLocalStorage, addLocalStorage } from './utils';

export class Model {
  constructor() {
    this.storageName = 'cardList';
    this.cardList = getLocalStorage(this.storageName) || {};
  }

  addEntry(newCard) {
    this.cardList = { ...this.cardList, newCard };
    addLocalStorage(this.cardList);
  }

  
}

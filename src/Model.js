import { getLocalStorage, addLocalStorage } from './utils';

export class Model {
  constructor() {
    this.storageName = 'cardList';
    this.cardList = getLocalStorage(this.storageName) || [];
    addLocalStorage(this.cardList, this.storageName);
  }

  //addCard = (newCard) => {
  addCard(newCard) {
    this.cardList = [newCard, ...this.cardList];
    addLocalStorage(this.cardList, this.storageName);
  }

  //getAllCards = () => {
  getAllCards() {
    return getLocalStorage(this.storageName);
  }
}

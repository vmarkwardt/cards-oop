import { Header } from "./Header";
import { Navigation } from "./Navigation";

export class App {
  constructor() {
    this.header = new Header();
    this.navigation = new Navigation();
    console.log(this.navigation);
  }
}

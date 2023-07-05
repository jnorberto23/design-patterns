import { BalletFactory } from "./factories/BalletFactory";
import { SneakerFactory } from "./factories/SneakerFactory";

export class FactoryMethod {
  private objectsArray: object[] = [];

  constructor() {
    this.execute();
  }

  printObjects(array: object[]) {
    console.table(array);
  }

  createObject(object: any) {
    this.objectsArray.push(object);
  }

  execute() {
    const sneaker = new SneakerFactory();
    const ballet = new BalletFactory();

    console.log("**Factory Method**");

    this.createObject(ballet.create(2, "Alpargatas"));
    this.createObject(sneaker.create(4, "Nike"));
    this.printObjects(this.objectsArray);
  }
}

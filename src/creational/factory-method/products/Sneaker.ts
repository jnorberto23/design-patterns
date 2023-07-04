import { IShoe } from "../interface/ShoeInterface";

export class Sneaker implements IShoe {
  create() {
    return console.log("Created Sneaker");
  }
  showInfo() {
    throw new Error("Method not implemented.");
  }
}

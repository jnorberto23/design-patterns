import { IShoe } from "../interface/IShoe";

export class Sneaker implements IShoe {
  create() {
    return "Created Sneaker";
  }
  showInfo() {
    throw new Error("Method not implemented.");
  }
}

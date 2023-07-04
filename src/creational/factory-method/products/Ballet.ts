import { IShoe } from "../interface/ShoeInterface";

export class Ballet implements IShoe {
  create() {
    return console.log("Created Ballet");
  }
  showInfo() {
    throw new Error("Method not implemented.");
  }
}

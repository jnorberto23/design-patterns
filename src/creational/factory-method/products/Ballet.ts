import { IShoe } from "../interface/IShoe";

export class Ballet implements IShoe {
  create() {
    return "Created Ballet";
  }
  showInfo() {
    throw new Error("Method not implemented.");
  }
}

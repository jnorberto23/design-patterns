import { IShoe } from "../interface/ShoeInterface";

export abstract class ShoesFactory {
  abstract createProduct(): IShoe;

  create() {
    const shoeInstance = this.createProduct();
    return shoeInstance.create();
  }
}


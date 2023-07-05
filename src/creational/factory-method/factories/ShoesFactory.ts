import { ShoeInterface } from "../interface/ShoeInterface";

export abstract class ShoesFactory {
  abstract createProduct(): ShoeInterface;

  create(quantity: number, brand: string) {
    const shoeInstance = this.createProduct();
    return shoeInstance.create(quantity, brand);
  }
}

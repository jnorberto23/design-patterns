import { ShoeInterface } from "../interface/ShoeInterface";

export class Sneaker implements ShoeInterface {
  create(quantity: number, brand: string) {
    return {
      type: "Sneaker",
      brand: brand,
      quantity: quantity
    };
  }
}

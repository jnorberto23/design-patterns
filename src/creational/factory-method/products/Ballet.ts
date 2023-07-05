import { ShoeInterface } from "../interface/ShoeInterface";

export class Ballet implements ShoeInterface {
  create(quantity: number, brand: string) {
    return {
      type: "Ballet",
      brand: brand,
      quantity: quantity
    };
  }
}

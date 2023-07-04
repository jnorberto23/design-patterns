import { IShoe } from "../interface/ShoeInterface";
import { Sneaker } from "../products/Sneaker";
import { ShoesFactory } from "./ShoesCreator";

export class SneakerCreator extends ShoesFactory {
     public createProduct(): IShoe {
        return new Sneaker();
    }
}

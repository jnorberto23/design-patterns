import { ShoeInterface } from "../interface/ShoeInterface";
import { Sneaker } from "../products/Sneaker";
import { ShoesFactory } from "./ShoesFactory";

export class SneakerFactory extends ShoesFactory {
     public createProduct(): ShoeInterface {
        return new Sneaker();
    }
}

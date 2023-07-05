import { ShoeInterface } from "../interface/ShoeInterface";
import { Ballet } from "../products/Ballet";
import { ShoesFactory } from "./ShoesFactory";

export class BalletFactory extends ShoesFactory { 
    createProduct(): ShoeInterface {
        return new Ballet();
    }
}

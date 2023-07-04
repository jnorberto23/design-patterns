import { IShoe } from "../interface/ShoeInterface";
import { Ballet } from "../products/Ballet";
import { ShoesFactory } from "./ShoesCreator";

export class BalletCreator extends ShoesFactory { 
    createProduct(): IShoe {
        return new Ballet();
    }
}

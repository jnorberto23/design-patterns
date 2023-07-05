import { IShoe } from "../interface/IShoe";
import { Ballet } from "../products/Ballet";
import { ShoesFactory } from "./ShoesCreator";

export class VintageChairCreator extends ShoesFactory { 
    createProduct(): IShoe {
        return new Ballet();
    }
}

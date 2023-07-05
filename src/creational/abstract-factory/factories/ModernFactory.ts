import { VintageFactoryInterface } from "../interfaces/factories/VintageFactoryInterface";
import { VintageChair } from "../products/vintage/VintageChair";
import { VintageSofa } from "../products/vintage/VintageSofa";
import { VintageTable } from "../products/vintage/VintageTable";

export class VintageFactory implements VintageFactoryInterface {
  createVintageChair(): VintageChair {
    return new VintageChair();
  }
  createVintageSofa(): VintageSofa {
    return new VintageSofa();
  }
  createVintageTable(): VintageTable {
    return new VintageTable();
  }
}

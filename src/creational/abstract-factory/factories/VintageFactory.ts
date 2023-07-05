import { ModernFactoryInterface } from "../interfaces/factories/ModernFactoryInterface";
import { ModernChair } from "../products/modern/ModernChair";
import { ModernSofa } from "../products/modern/ModernSofa";
import { ModernTable } from "../products/modern/ModernTable";

export class ModernFactory implements ModernFactoryInterface {
  createModernChair(): ModernChair {
    return new ModernChair();
  }
  createModernSofa(): ModernSofa {
    return new ModernSofa();
  }
  createModernTable(): ModernTable {
    return new ModernTable();
  }
}

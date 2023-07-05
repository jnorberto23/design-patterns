import { ModernChair } from "../../products/modern/ModernChair";
import { ModernSofa } from "../../products/modern/ModernSofa";
import { ModernTable } from "../../products/modern/ModernTable";

export interface ModernFactoryInterface {
    createModernSofa(): ModernSofa;
    createModernTable(): ModernTable;
    createModernChair(): ModernChair;
}
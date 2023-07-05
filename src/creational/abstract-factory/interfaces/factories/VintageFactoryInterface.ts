import { VintageChair } from "../../products/vintage/VintageChair";
import { VintageSofa } from "../../products/vintage/VintageSofa";
import { VintageTable } from "../../products/vintage/VintageTable";

export interface VintageFactoryInterface {
    createVintageSofa(): VintageSofa;
    createVintageTable(): VintageTable;
    createVintageChair(): VintageChair;
}
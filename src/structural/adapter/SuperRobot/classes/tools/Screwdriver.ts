import { Tools } from "../../interfaces/ToolsInterface";

export class Screwdriver implements Tools {
    use(): void{
        console.log('Using screwdriver');
    }
}
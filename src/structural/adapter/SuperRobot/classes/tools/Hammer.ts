import { Tools } from "../../interfaces/ToolsInterface";

export class Hammer implements Tools {
    use(): void{
        console.log('Using hammer');
    }
}
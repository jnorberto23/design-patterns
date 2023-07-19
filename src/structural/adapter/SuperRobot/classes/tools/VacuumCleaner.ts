import { Tools } from "../../interfaces/ToolsInterface";

export class VacuumCleaner implements Tools {
    use(): void{
        console.log('Using vacuumCleaner');
    }
}
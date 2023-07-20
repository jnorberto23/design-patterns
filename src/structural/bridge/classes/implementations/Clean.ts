import { ImplementationInterface } from "../../interfaces/ImplementationInterface";

export class Clean implements ImplementationInterface{
    executeAction() {
        console.log("Robot cleaning house");
    }
}
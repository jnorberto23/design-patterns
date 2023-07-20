import { ImplementationInterface } from "../../interfaces/ImplementationInterface";

export class Cut implements ImplementationInterface{
    executeAction() {
        console.log("Robot cutting woods");
    }
}
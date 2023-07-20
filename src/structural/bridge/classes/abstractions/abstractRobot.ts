import { ImplementationInterface } from "../../interfaces/ImplementationInterface";

export abstract class AbstractRobot {
    implementation: ImplementationInterface;

    constructor(implementation: ImplementationInterface) {
        this.implementation = implementation;
    }

    executeAction() {
        this.implementation.executeAction();
    }
}
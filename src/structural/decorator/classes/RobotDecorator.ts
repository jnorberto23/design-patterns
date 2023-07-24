import { RobotInterface } from "../interfaces/RobotInterface";

export abstract class RobotDecorator implements RobotInterface {
    constructor(public robotComponent: RobotInterface) {
        this.robotComponent = robotComponent;
    }

    action() {
        this.robotComponent.action();
    }
}
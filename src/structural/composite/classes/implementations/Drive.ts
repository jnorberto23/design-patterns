import { RobotActionInterface } from "../../interfaces/RobotActionInterface";

export class Drive implements RobotActionInterface {
    executeAction() {
        console.log("Robot driving the car.");
    }
}

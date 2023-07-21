import { RobotActionInterface } from "../../interfaces/RobotActionInterface";

export class Run implements RobotActionInterface {
    executeAction() {
        console.log("Robot running in the street.");
    }
}

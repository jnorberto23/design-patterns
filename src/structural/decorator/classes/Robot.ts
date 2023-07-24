import { RobotInterface } from "../interfaces/RobotInterface";

export class Robot implements RobotInterface {
  action(): void {
    return console.log("Robot started.");
  }
}

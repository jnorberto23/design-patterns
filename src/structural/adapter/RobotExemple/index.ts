import { ElderRobot } from "./classes/ElderRobot";
import { ModernRobot } from "./classes/ModernRobot";
import { RobotAdapter } from "./classes/RobotAdapter";

export class AdapterMethod{
    constructor() {
        this.execute();
      }

      useModernRobot(robot: ModernRobot){
        robot.walk();
      }
      execute(){
        console.log("**Adapter Method**");

        const elderRobot = new ElderRobot();
        const elderRobotAdapter = new RobotAdapter(elderRobot);

        this.useModernRobot(elderRobotAdapter);
      }
}
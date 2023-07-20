import { CutterRobot } from "./classes/CleanerRobot copy";
import { CleanerRobot } from "./classes/CutterRobot";

export class BridgeMethod{
    constructor() {
        this.execute();
      }

      execute(){
        console.log("**Bridge Method**");

        const cleanerRobot = new CleanerRobot();
        const cutterRobot = new CutterRobot();
        
        cleanerRobot.executeAction(); 
        cutterRobot.executeAction();   
      }
}
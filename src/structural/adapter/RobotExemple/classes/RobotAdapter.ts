import { ElderRobot } from "./ElderRobot";
import { ModernRobot } from "./ModernRobot";

export class RobotAdapter extends ElderRobot implements ModernRobot {
    
    constructor(private elderRobot: ElderRobot){
        super();
        this.elderRobot = elderRobot;
    }
    walk(){
        this.elderRobot.crawl();
    }
}   
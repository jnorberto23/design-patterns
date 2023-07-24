import { Robot } from "./classes/Robot";
import { RobotWithHammer } from "./classes/RobotWithHammer";
import { RobotWithLaser } from "./classes/RobotWithLaser";

export class DecoratorMethod{
    constructor() {
        this.execute();
      }
      execute(){
        console.log("**Decorator Method**");
        const robot = new Robot();

        const robotWithHammer = new RobotWithHammer(robot)
        robotWithHammer.action();
        const robotWithLaser = new RobotWithLaser(robot);
        robotWithLaser.action();
      }
}
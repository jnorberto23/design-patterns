import { RobotComposite } from "./classes/RobotComposite";
import { Drive } from "./classes/implementations/Drive";
import { Run } from "./classes/implementations/Run";

export class CompositeMethod{
    constructor() {
        this.execute();
      }
      execute(){
        console.log("**Composite Method**");
        const drive = new Drive();
        const run = new Run();
        
        const robotComposite = new RobotComposite();
        robotComposite.addAction(drive);
        robotComposite.addAction(run);
        robotComposite.executeAction();
      }
}
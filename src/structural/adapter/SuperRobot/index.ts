import { RobotWithSocketAdapter } from "./classes/adapter/RobotSocketAdapter";
import { Hammer } from "./classes/tools/Hammer";
import { Screwdriver } from "./classes/tools/Screwdriver";
import { VacuumCleaner } from "./classes/tools/VacuumCleaner";

export class AdapterMethod2{
    constructor() {
        this.execute();
      }

 
      execute(){
        console.log("**Adapter Method**");

        const hammer = new Hammer();
        const screwdriver = new Screwdriver();
        const vacuumCleaner = new VacuumCleaner();

        const robotWithSocketAdapter = new RobotWithSocketAdapter(hammer, screwdriver);

        robotWithSocketAdapter.useLeftTool();
        robotWithSocketAdapter.useRightTool();

        const robotWithSocketAdapter2 = new RobotWithSocketAdapter(vacuumCleaner, screwdriver);
        robotWithSocketAdapter2.useLeftTool();
      }
}
import { Robot } from "./Robot";

export class PrototypeMethod{
    constructor() {
        this.execute();
      }

      execute(){
        console.log("**Prototype Method**");

        const prototype = new Robot('Robot one');
        prototype.walk('left');
        const cloneOne = prototype.clone('Robot two');
        cloneOne.walk('right');
        const cloneTwo = prototype.clone('Robot three');
        cloneTwo.walk('forward');
      }
}
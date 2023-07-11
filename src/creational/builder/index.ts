import { DesktopBuilder } from "./DesktopBuilder";
import { Diretor } from "./Director";

export class BuilderMethod {
  private builder = new DesktopBuilder();
  private diretor = new Diretor();

  constructor() {
    this.execute();
  }

  printObjects(object: object) {
    console.table(object);
  }

  execute() {
    console.log("**Builder Method**");
    this.diretor.buildDesktop(this.builder);
    const objetoFinal = this.builder.getDesktop();
    this.printObjects(objetoFinal)
    return objetoFinal;
  }
}

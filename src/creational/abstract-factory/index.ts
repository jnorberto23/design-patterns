import { VintageFactory } from "./factories/ModernFactory";
import { ModernFactory } from "./factories/VintageFactory";

export class AbstractFactoryMethod {
  private objectsArray: object[] = [];

  constructor() {
    this.execute();
  }

  printObjects(array: object[]) {
    console.table(array);
  }

  createObject(object: any) {
    this.objectsArray.push(object);
  }

  execute() {
    const modernFactory = new ModernFactory();
    const vintageFactory = new VintageFactory();

    console.log("**Abstract Factory Method**");

    this.createObject(modernFactory.createModernChair().create(5));
    this.createObject(modernFactory.createModernSofa().create(2));
    this.createObject(modernFactory.createModernTable().create(1));
    this.createObject(vintageFactory.createVintageSofa().create(2));
    this.createObject(vintageFactory.createVintageTable().create(3));
    this.createObject(vintageFactory.createVintageChair().create(6));

    this.printObjects(this.objectsArray);
  }
}
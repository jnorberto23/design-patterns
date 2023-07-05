import { BalletCreator } from "./creators/BalletCreator";
import { ShoesFactory } from "./creators/ShoesCreator";
import { SneakerCreator } from "./creators/SneakerCreator";

export class FactoryMethod {
  constructor() { this.execute();}

  execute(){
  const sneaker = new SneakerCreator();
  const ballet = new BalletCreator();

  console.log('**Factory Method**');
  console.log(`${sneaker.create()}`);
  console.log(`${ballet.create()}`);
  }
}
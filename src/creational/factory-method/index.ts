import { BalletCreator } from "./creators/BalletCreator";
import { ShoesFactory } from "./creators/ShoesCreator";
import { SneakerCreator } from "./creators/SneakerCreator";

class FactoryMethod {
  constructor() { this.execute();}

  execute(){
  const sneaker = new SneakerCreator();
  const ballet = new SneakerCreator();

  console.log(`sneaker: ${sneaker.create()}`);
  console.log(`ballet: ${ballet.create()}`);
  }
}

function main(){
    new FactoryMethod();
}

main();
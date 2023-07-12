import { AbstractFactoryMethod } from "./creational/abstract-factory";
import { BuilderMethod } from "./creational/builder";
import { FactoryMethod } from "./creational/factory-method";
import { PrototypeMethod } from "./creational/prototype";

function DesignPatterns(){
    new FactoryMethod();
    new AbstractFactoryMethod();
    new BuilderMethod();
    new PrototypeMethod();
}

DesignPatterns();
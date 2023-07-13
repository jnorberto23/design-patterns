import { AbstractFactoryMethod } from "./creational/abstract-factory";
import { BuilderMethod } from "./creational/builder";
import { FactoryMethod } from "./creational/factory-method";
import { PrototypeMethod } from "./creational/prototype";
import { SingletonMethod } from "./creational/singleton";

function DesignPatterns(){
    new FactoryMethod();
    new AbstractFactoryMethod();
    new BuilderMethod();
    new PrototypeMethod();
    new SingletonMethod();
}

DesignPatterns();
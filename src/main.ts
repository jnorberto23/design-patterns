import { AbstractFactoryMethod } from "./creational/abstract-factory";
import { BuilderMethod } from "./creational/builder";
import { FactoryMethod } from "./creational/factory-method";
import { PrototypeMethod } from "./creational/prototype";
import { SingletonMethod } from "./creational/singleton";
import { AdapterMethod } from "./structural/adapter/RobotExemple";
import { AdapterMethod2 } from "./structural/adapter/SuperRobot";

function DesignPatterns(){
    new FactoryMethod();
    new AbstractFactoryMethod();
    new BuilderMethod();
    new PrototypeMethod();
    new SingletonMethod();
    new AdapterMethod();
    new AdapterMethod2();
}

DesignPatterns();
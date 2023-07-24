import { AbstractFactoryMethod } from "./creational/abstract-factory";
import { BuilderMethod } from "./creational/builder";
import { FactoryMethod } from "./creational/factory-method";
import { PrototypeMethod } from "./creational/prototype";
import { SingletonMethod } from "./creational/singleton";
import { AdapterMethod } from "./structural/adapter/RobotExemple";
import { AdapterMethod2 } from "./structural/adapter/SuperRobot";
import { BridgeMethod } from "./structural/bridge";
import { CompositeMethod } from "./structural/composite";
import { DecoratorMethod } from "./structural/decorator";

function DesignPatterns(){
    new FactoryMethod();
    new AbstractFactoryMethod();
    new BuilderMethod();
    new PrototypeMethod();
    new SingletonMethod();
    new AdapterMethod();
    new AdapterMethod2();
    new BridgeMethod();
    new CompositeMethod();
    new DecoratorMethod();
}

DesignPatterns();
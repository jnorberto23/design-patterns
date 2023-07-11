import { AbstractFactoryMethod } from "./creational/abstract-factory";
import { BuilderMethod } from "./creational/builder";
import { FactoryMethod } from "./creational/factory-method";

function DesignPatterns(){
    new FactoryMethod();
    new AbstractFactoryMethod();
    new BuilderMethod();
}

DesignPatterns();
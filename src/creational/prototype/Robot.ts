import { RobotInterface } from "./interface/RobotInterface";

export class Robot implements RobotInterface{
    public name: string;

    constructor(name: string){
        this.name = name;
    }
    
    getName(){
        return this.name
    }
    walk(direction: string) {
        return console.log(`${this.getName()} walking to ${direction}`)
    };

    clone(name: string) {
        this.name = name;
        return new Robot(name);
    };
 
}
import { RobotDecorator } from "./RobotDecorator";

export class RobotWithHammer extends RobotDecorator{
    addHammer(){
        console.log('Hammer added.')
    }
    action(): void {
        this.addHammer();
        this.robotComponent.action();
    }
}
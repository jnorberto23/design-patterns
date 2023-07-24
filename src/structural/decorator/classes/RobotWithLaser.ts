import { RobotDecorator } from "./RobotDecorator";

export class RobotWithLaser extends RobotDecorator{
    addLaser(){
        console.log('Laser added.')
    }
    action(): void {
        this.addLaser();
        this.robotComponent.action();
    }
}
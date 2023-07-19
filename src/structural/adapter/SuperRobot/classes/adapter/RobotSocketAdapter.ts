import { RobotWithSocketInterface } from "../../interfaces/RobotWithSocketInterface";
import { Tools } from "../../interfaces/ToolsInterface";

export class RobotWithSocketAdapter implements RobotWithSocketInterface{
    constructor( private leftTool: Tools, private rightTool: Tools){
        this.leftTool = leftTool;
        this.rightTool = rightTool;
    }
    useRightTool(): void {
       this.rightTool.use()
    }

    useLeftTool(): void {
        this.leftTool.use();
    }

}
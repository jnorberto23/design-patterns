import { AbstractRobot } from "./abstractions/abstractRobot";
import { Cut } from "./implementations/Cut";

export class CutterRobot extends AbstractRobot {
    constructor() {
        super(new Cut());
    }
}
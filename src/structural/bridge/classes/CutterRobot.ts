import { AbstractRobot } from "./abstractions/abstractRobot";
import { Clean } from "./implementations/Clean";

export class CleanerRobot extends AbstractRobot {
    constructor() {
        super(new Clean());
    }
}
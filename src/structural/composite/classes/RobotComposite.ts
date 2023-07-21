import { RobotActionInterface } from "../interfaces/RobotActionInterface";

export class RobotComposite implements RobotActionInterface {
    actions: RobotActionInterface[] = [];

    addAction(action: RobotActionInterface) {
        this.actions.push(action);
    }

    executeAction() {
        for (const action of this.actions) {
            action.executeAction();
        }
    }
}
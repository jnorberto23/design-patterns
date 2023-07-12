export interface RobotInterface{
    getName: () => string;
    walk: (direction: string) => void;
    clone: (name: string) => void;
}
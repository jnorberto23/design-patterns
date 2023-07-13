import { SingletonInterface } from "./interface/SingletonInterface";

export class Singleton implements SingletonInterface {
    private static instance: Singleton;
    private name: string;

    private constructor() {
        this.name = "Nome genérico";
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }
}
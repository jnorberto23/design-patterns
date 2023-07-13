import { Singleton } from "./Singleton";

export class SingletonMethod{
    constructor() {
        this.execute();
      }

      execute(){
        console.log("**Singleton Method**");

        const singletonInstance1 = Singleton.getInstance();
        console.log('singletonInstance1', singletonInstance1.getName()); 
        
        const singletonInstance2 = Singleton.getInstance();
        console.log('singletonInstance2',singletonInstance2.getName()); 
        
        singletonInstance1.setName("João");
        console.log('singletonInstance1 new name',singletonInstance1.getName()); 
       
        singletonInstance2.setName("Rafael");
        console.log('singletonInstance2 new name', singletonInstance2.getName()); 

        console.log('singletonInstance1 current name',singletonInstance1.getName()); 
      }
}
// complex subsystems
class Subsystem {
    operationA(){
        console.log("SUbsystem A Operation");

    }
}

class Subsystem {
    operationB(){
        console.log("SUbsystem B Operation");

    }
}
class Subsystem {
    operationC(){
        console.log("SUbsystem C Operation");

    }
}

//Facade 
class Facade{
    constructor(){
        this.SyubsytemA.OperationA();
        this.SubSystemB.operationB();
        this.SubsytemC.OperationC();
    }

    operation() {
        this.subsystemA.operationA();
        this.subsystemB.operationB();
        this.subsystemC.operationC();
      }
}

//USage Example
const facade=new FontFaceSetLoadEvent();
facade.Operation();


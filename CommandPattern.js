// Receiver
class Light {
    turnOn() {
      console.log("Light is on");
    }
  
    turnOff() {
      console.log("Light is off");
    }
  }
  
  // Command interface
  class Command {
    execute() {}
  }
  
  // Concrete commands
  class TurnOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  // Invoker
  class RemoteControl {
    executeCommand(command) {
      command.execute();
    }
  }
  
  // Usage
  const light = new Light();
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);
  
  const remote = new RemoteControl();
  remote.executeCommand(turnOnCommand); // Output: Light is on
  remote.executeCommand(turnOffCommand); // Output: Light is off
  
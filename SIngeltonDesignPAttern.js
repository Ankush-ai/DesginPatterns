class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        // Initialization code goes here
        this.name = "Singleton Instance";
        Singleton.instance = this;
    }

    // Add your methods here
    sayHello() {
        console.log("Hello from the Singleton instance!");
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output: true
instance1.sayHello(); // Output: Hello from the Singleton instance!


  //In the example above, the Singleton class is designed to allow only one instance to be created. When the new Singleton() is called multiple times, the constructor checks if an instance already exists and returns the existing instance instead of creating a new one. This ensures that instance1 and instance2 refer to the same object.
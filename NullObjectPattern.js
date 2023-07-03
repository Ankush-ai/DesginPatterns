//interface for the bojects 
class Shape {
    draw() {
        throw new Error("this method must be overriden");

    }

}

// Concrete implementation
class Circle extends Shape {
    draw() {
        console.log("Drwaing a Circle");

    }
}

//Null object implemtation 
//to handle null cases in our code without breaking it completely
class NullShape extends Shape {
    draw() {
        console.log("No shape to draw");
    }

}

//USage example
function DrawShape(shape) {
    shape.draw();

}

const circle = new circle();
DrawShape(circle);//putput drwaing a circle 

const nullshape = new NullShape();
DrawShape(nullshape);//Output no shape to draw

//In this example, we define an abstract Shape class that declares the draw() method. The Circle class extends Shape and provides its implementation of draw(). We also create a NullShape class that extends Shape and represents a null object, providing a no-op implementation of draw().
//The drawShape() function takes an instance of Shape as a parameter and calls the draw() method on it. When a valid Circle object is passed, it performs the actual drawing. However, if a NullShape object is passed, it gracefully handles the situation without throwing any errors or requiring null checks.
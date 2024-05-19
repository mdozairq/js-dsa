class Shape{
    draw(){
        console.log("Drawing Unknown Shape")
    }
}

class Circle extends Shape{
    draw(){
        console.log("Drawing Circle")
    }
}


class Triangle extends Shape{
    draw(){
        console.log("Drawing Triangle")
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("Drawing Rectangle")
    }
}

class ShapeFatory{
    createShape(type){
        switch(type){
            case "circle":
                return new Circle
            case "triangle":
                return new Triangle
            case "rectangle":
                return new Rectangle
            default:
                return new Shape
        }
    }
}

let anyShape = new ShapeFatory().createShape("rectangle")
anyShape.draw()
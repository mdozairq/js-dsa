class CalculateArea{
    calculateArea(){
        console.log("this method should be override")
    }
}

class Rectangle extends CalculateArea{
    constructor(height, width){
        super();
        this.height = height
        this.width = width
    }

    calculateArea(){
        return this.height * this.width
    }
}

class Circle extends CalculateArea{
    constructor(radius){
        super();
        this.radius = radius
    }

    calculateArea(){
        return 3.14 * this.radius * this.radius
    }
}

let [circle, rectangle] = [new Circle(3), new Rectangle(2,3)]
console.log(circle.calculateArea())
console.log(rectangle.calculateArea())
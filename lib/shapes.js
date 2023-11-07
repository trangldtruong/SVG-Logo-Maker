const jest = require('jest')
class Shape{
    constructor(shape, text, textColor, shapeColor) {
        this.shape = shape
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    setColor(color){
        this.color = color;
    }
} 

class Triangle extends Shape {
    render() {
        return "<"
    }
}

class Circle extends Shape{
    render() {
        return ``
    }
}
class Square extends Shape {
    render() {
        return 
    }
}
module.exports = shapes;
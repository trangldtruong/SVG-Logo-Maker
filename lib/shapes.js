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
        return `<polygon points=""`
    }
}

class Circle extends Shape{
    render() {
        return `<rect `
    }
}
class Square extends Shape {
    render() {
        return `<circle`
    }
}
module.exports = {Triangle, Circle, Square};
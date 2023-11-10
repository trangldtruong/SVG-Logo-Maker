const jest = require('jest')
class Shape{
    constructor(shape, text, textColor, shapeColor) {
        this.shape = shape
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    setColor(color){
        this.shapeColor = color;
    }

    setText(text){
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }
} 

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182">`
    }
}

class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="100" r="80" fill="green"> `
    }
}
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>`
    }
}

module.exports = {Triangle, Circle, Square};
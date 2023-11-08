const { describe } = require('yargs');
const {Triangle, Square, Circle} = require('./shapes')

describe('Triangle test', () => {
    test('test for a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue')
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        )

    })
})

describe("Square test", () => {
    test('test for a square', () => {
        const shape = new Square();
        expect(shape.render()).toEqual(
            '<rect />'
        )
    })
})

describe("Circle test", () => {
    test('test for a circle', () => {
        const shape = new Circle();
        expect(shape.render()).toEqual(
            '<circle />'
        )
    })
})
describe("Logo")
test('test for logo')
expect()
'<svg'
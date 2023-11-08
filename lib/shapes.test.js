const { describe } = require('yargs');
const {Triangle, Square, Circle} = require('./shapes')

describe('Triangle test', () => {
    test('test for a triangle', () => {
        const shape = new Triangle();
        expect(shape.render()).toEqual(
            '<polygon points=""/>'
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
const inquirer = require('inquirer')
const SVG = require('./svg')
const fs = require('fs')
const {Circle, Triangle, Square} = require('./shapes')
const {writeFile} = require('fs/promises')

 inquirer.prompt ([{
            name: 'text',
            type: 'input',
            message: 'Please enter three-letter text of your logo?'
            },
            {
                name: 'shape',
                type: 'list',
                choices: ['Triangle', 'Square', 'Circle']
            },
            {
                name: 'text_color',
                type: 'input',
                message: 'What color would you want the text to be?'
            },
            {
                name: 'shape_color',
                type: 'input',
                message: 'What color would you want the shape to be?'
            }
        ]).then((data) => {
            let shape;
            switch(data) {
                case 'Circle': 
                shape = new Circle();
                break;

                case 'Triangle':
                shape = new Triangle();
                break;

                case 'Square':
                shape = new Square();
                break;

                default: 
                shape = new Circle();
                break;
            }

            shape.setColor(shapecolor);
            const svg = new SVG ;

        })
    function writeToFile(fileName, data) {
        var logo = generateLogo(data);
        fs.writeFile(fileName, logo, function(error) {
            if (error) {
                return console.log(error);
            }
            console.log('Generate logo.sgv')
        });
    }
    function init() {

    }

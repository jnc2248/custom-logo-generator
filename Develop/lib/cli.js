const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { join } = require('path');
const { generateSVG } = require('./generator');


class CLI {
    constructor() {
        this.finalShape = "";
        this.finalShapeColor = "";
        this.finalText = "";
        this.finalTextColor = "";
    }

    textPrompt() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textInput',
                    message: 'What text would you like in your logo? Max 3 characters long.',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?',
                },
            ])
            .then(({ textInput, textColor }) => {
                if (textInput.length <= 3) {
                    this.finalText = textInput;
                    this.finalTextColor = textColor;
                    return this.shapePrompt();
                } else {
                    console.log("Text must be maximum 3 characters long!");
                    return this.textPrompt();
                };
            })
            .then(() => {
                // console.log(this.textInput, this.textColor, this.shapeInput, this.shapeColor);
                // Why won't this console.log?
                return writeFile('logo.svg', generateSVG(this.finalText, this.finalTextColor, this.finalShape, this.finalShapeColor));
            })
            .then(() => console.log('Created!'))
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.');
            });
    }

    shapePrompt() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shapeInput',
                    message: 'Which shape would you like to use?',
                    choices: ['Circle', 'Square', 'Triangle']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like your shape to be?',
                }
            ])
            .then(({ shapeInput, shapeColor }) => {
                this.finalShape = shapeInput;
                this.finalShapeColor = shapeColor;
            })
            // .then (({ shapeInput, shapeColorInput }) => {
            //     this.shape = shapeInput;
            //     this.shapeColor = shapeColorInput;
            // })
            // .then(({ shapeInput, shapeColorInput }) => {
            //     if (shapeInput === 'Circle') {
            //         circleGen(shapeColorInput)
            //     } else if (shapeInput === 'Square') {
            //         squareGen(shapeColorInput)
            //     } else if (shapeInput === 'Triangle') {
            //         triangleGen(shapeColorInput)
            //     };
            // })
    };
}

module.exports = CLI;
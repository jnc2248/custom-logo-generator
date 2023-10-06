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

    runPrompts() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textInput',
                    message: 'What text would you like in your logo? Max 3 characters long.',
                },
            ])
            .then(({ textInput }) => {
                if (textInput.length <= 3) {
                    this.finalText = textInput;
                    return this.continuePrompts();
                } else {
                    console.log("Text must be maximum 3 characters long!");
                    return this.runPrompts();
                };
            })
            .then(() => {
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'), 
                    generateSVG(this.finalText, this.finalTextColor, this.finalShape, this.finalShapeColor)
                    );
            })
            .then(() => console.log('logo.svg generated in output folder!'))
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.');
            });
    }

    continuePrompts() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like your text to be?',
                },
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
            .then(({ textColor, shapeInput, shapeColor }) => {
                this.finalTextColor = textColor;
                this.finalShape = shapeInput;
                this.finalShapeColor = shapeColor;
            })
    };
};

module.exports = CLI;
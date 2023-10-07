const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const { join } = require('path');
const SVG = require('./svg');


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
                    console.log("Text must be max 3 characters long!");
                    return this.runPrompts();
                };
            })
            .then(() => {
                const newSVG = new SVG();
                newSVG.setText(this.finalText, this.finalTextColor);
                newSVG.setShape(this.finalShape, this.finalShapeColor);
                const finalSVG = newSVG.render();

                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'), finalSVG);
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
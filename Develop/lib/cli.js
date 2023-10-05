const inquirer = require('inquirer');


class CLI {
    constructor() {
        this.shape = "";
        this.shapeColor = "";
        this.text = "";
        this.textColor = "";
    }

    text() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'textInput',
                    message: 'What text would you like in your logo? Max 3 characters long.',
                },
                {
                    type: 'input',
                    name: 'textColorInput',
                    message: 'What color would you like your text to be?',
                },
            ])
            .then (({ textInput, textColorInput }) => {
                if (textInput.length <= 3) {
                    this.text = textInput;
                    this.textColor = textColorInput;
                    return this.shape();
                } else {
                    console.log("Text must be maximum 3 characters long!");
                    return this.text();
                };
            });
    }

    shape() {
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
                    name: 'shapeColorInput',
                    message: 'What color would you like your shape to be?',
                }
            ])
            .then(({ shapeInput, shapeColorInput }) => {
                if (shapeInput === 'Circle') {
                    circleGen(shapeColorInput)
                } else if (shapeInput === 'Square') {
                    squareGen(shapeColorInput)
                } else if (shapeInput === 'Triangle') {
                    triangleGen(shapeColorInput)
                };
            })
    };
}
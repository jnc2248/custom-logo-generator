const { Circle, Square, Triangle } = require('./shapes.js');

class SVG {
    constructor() {
        this.textInput = "";
        this.textColorInput = "";
        this.shapeInput = "";
        this.shapeColorInput = "";

        this.textRender = "";
        this.shapeRender = "";
    }

    setText(textInput, textColorInput) {

        if (textInput.length <= 3) {
            this.textRender = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColorInput}">${textInput}</text>`
        } else {
            throw new Error("Text must not exceed 3 characters.")
        }

    }

    setShape(shapeInput, shapeColorInput) {
    
        if (shapeInput === 'Circle') {
    
            const circle = new Circle();
            circle.setColor(shapeColorInput);
            this.shapeRender = circle.render();
    
        } else if (shapeInput === 'Square') {
    
            const square = new Square();
            square.setColor(shapeColorInput);
            this.shapeRender = square.render();
            
        } else if (shapeInput === 'Triangle') {
    
            const triangle = new Triangle();
            triangle.setColor(shapeColorInput);
            this.shapeRender = triangle.render();

        }
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeRender}${this.textRender}</svg>`
    }

}

module.exports = SVG;
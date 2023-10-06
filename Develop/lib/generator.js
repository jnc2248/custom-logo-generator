const { Circle, Square, Triangle } = require('./shapes.js');
const TextGen = require('./text.js');

const generateSVG = (textInput, textColor, shapeInput, shapeColor) => {

    let shapeRender = "";

    if (shapeInput === 'Circle') {

        const circle = new Circle();
        circle.setColor(shapeColor);
        shapeRender = circle.render();

    } else if (shapeInput === 'Square') {

        const square = new Square();
        square.setColor(shapeColor);
        shapeRender = square.render();
        
    } else if (shapeInput === 'Triangle') {

        const triangle = new Triangle();
        triangle.setColor(shapeColor);
        shapeRender = triangle.render();
    }

    const textRender = new TextGen().render(textInput, textColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    ${textRender}
  
    </svg>
    `
}

module.exports = { generateSVG };
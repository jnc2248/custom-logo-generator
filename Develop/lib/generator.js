const { Circle, Square, Triangle } = require('./shapes.js');
const TextGen = require('./text.js');

const generateSVG = (textInput, textColor, shapeInput, shapeColor) => {

    let shapeRender = "";

    if (shapeInput === 'Circle') {
        let newShape = new Circle(shapeColor);
        // const shapeColor = shape.setColor();
        shapeRender = newShape.render();
    } else if (shapeInput === 'Square') {
        let newShape = new Square(shapeColor);
        // const shapeColor = shape.setColor();
        shapeRender = newShape.render();
    } else if (shapeInput === 'Triangle') {
        let newShape = new Triangle(shapeColor);
        // const shapeColor = shape.setColor();
        shapeRender = newShape.render();
    }

    const newText = new TextGen(textInput, textColor);
    const textRender = newText.render();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    ${textRender}
  
    </svg>
    `

    // renderSVG(textRender, shapeRender);
}

module.exports = { generateSVG };
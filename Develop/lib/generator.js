const { Circle, Square, Triangle } = require('./shapes.js');
const TextGen = require('./text.js');

const generateSVG = (textInput, textColor, shapeInput, shapeColor) => {

    let shapeRender = "";

    if (shapeInput === 'Circle') {

        shapeRender = new Circle(textInput, textColor, shapeInput, shapeColor).render();

    } else if (shapeInput === 'Square') {

        shapeRender = new Square(textInput, textColor, shapeInput, shapeColor).render();
        
    } else if (shapeInput === 'Triangle') {

        shapeRender = new Triangle(textInput, textColor, shapeInput, shapeColor).render();

    }

    const textRender = new TextGen(textInput, textColor, shapeInput, shapeColor).render();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    ${textRender}
  
    </svg>
    `
}

module.exports = { generateSVG };
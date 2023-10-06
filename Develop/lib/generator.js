const { Circle, Square, Triangle } = require('./shapes.js');
const TextGen = require('./text.js');

const generateSVG = (textInput, textColor, shapeInput, shapeColor) => {

    let shapeRender = "";

    if (shapeInput === 'Circle') {

        // shapeRender = new Circle().setColor(shapeColor);

        const circle = new Circle();
        circle.setColor(shapeColor);
        shapeRender = circle.render();

    } else if (shapeInput === 'Square') {

        shapeRender = new Square().setColor(shapeColor);
        
    } else if (shapeInput === 'Triangle') {

        shapeRender = new Triangle().setColor(shapeColor);

    }

    const textRender = new TextGen().render(textInput, textColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    ${textRender}
  
    </svg>
    `
}

module.exports = { generateSVG };
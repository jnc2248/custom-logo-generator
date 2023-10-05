const { Circle, Square, Triangle } = require('./shapes.js');
const { TextGen } = require('./text.js');

const generateSVG = (shapeInput) => {

    if (shapeInput === 'Circle') {
        const shape = new Circle();
        const shapeColor = shape.setColor();
        const shapeRender = shapeColor.render();
    } else if (shapeInput === 'Square') {
        const shape = new Square();
        const shapeColor = shape.setColor();
        const shapeRender = shapeColor.render();
    } else if (shapeInput === 'Triangle') {
        const shape = new Triangle();
        const shapeColor = shape.setColor();
        const shapeRender = shapeColor.render();
    }

    const textRender = new TextGen();

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeRender}
  
    ${textRender}
  
    </svg>
    `;
}
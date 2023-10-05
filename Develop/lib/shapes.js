// const SVG = require('./svg.js');

class Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;
    }

    setColor() {
        const setColor = this.shapeColor;
    }
    
    render() {
        throw new Error('Child class must implement setShape() method.')
    }
}

class Circle extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Square extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Square, Triangle };
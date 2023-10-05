// const SVG = require('./svg.js');

class TextGen {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>`
    }
}

module.exports = TextGen;
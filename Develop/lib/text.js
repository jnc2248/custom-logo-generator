const SVG = require('./svg.js');

class TextGen extends SVG {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)
    }
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>`
    }
}

module.exports = TextGen;
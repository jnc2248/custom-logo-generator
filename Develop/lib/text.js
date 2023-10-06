class TextGen {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;

        this.render = (text, color) => {
            const textInput = text;
            const colorInput = color;
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorInput}">${textInput}</text>`
        };
    }
    // render() {
    //     return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>`
    // }
}

module.exports = TextGen;
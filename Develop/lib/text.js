class TextGen {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = "";
        this.textColor = "";
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;

        this.render = (text, color) => {
            this.textInput = text;
            this.colorInput = color;
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorInput}">${this.textInput}</text>`
        };
    }
}

module.exports = TextGen;
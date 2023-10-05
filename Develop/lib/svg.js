class SVG {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;
    }
    setText() {
        this.textRender = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>`
    }
    render() {
        throw new Error('Child class must implement setShape() method.');
    }
}
class SVG {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Child class must implement setShape() method.')
    }
}
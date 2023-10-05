class SVG {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this. shapeColor = shapeColor;
    }
    setText() {
        throw new Error('Child class must implement setText() method.');
    }
    setShape() {
        throw new Error('Child class must implement setShape() method.');
    }
    render() {
        
    }
}
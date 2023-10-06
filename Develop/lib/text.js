class TextGen {
    constructor() {
        this.text = "";
        this.color = "";

        this.render = (textInput, colorInput) => {
            this.text = textInput;
            this.color = colorInput;
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
        };
    }
}

module.exports = TextGen;
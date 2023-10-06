class Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        this.textInput = textInput;
        this.textColor = textColor;
        this.shapeInput = shapeInput;
        this.shapeColor = shapeColor;

        this.setColor = () => {
            throw new Error('Child class must implement setShape() method.')
        }
    }
}

class Circle extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)

        this.setColor = (response) => {
            const setColor = response;
            return `<circle cx="150" cy="100" r="80" fill="${setColor}" />`
        }
    }
}

class Square extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)

        this.setColor = (response) => {
            const setColor = response;
            return `<rect x="90" y="40" width="120" height="120" fill="${setColor}" />`
        }
    }
}

class Triangle extends Shapes {
    constructor(textInput, textColor, shapeInput, shapeColor) {
        super(textInput, textColor, shapeInput, shapeColor)

        this.setColor = (response) => {
            const setColor = response;
            return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`
        }
    }
}

module.exports = { Circle, Square, Triangle };
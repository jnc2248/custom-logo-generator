const SVG = require('./svg.js');

class Circle extends SVG {
    constructor(shapeColor) {
        super(shapeColor)
    }
    // setColor() {
    //     this.color = shapeColor
    // }
    render() {
        `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends SVG {
    constructor(shapeColor) {
        super(shapeColor)
    }
    // setColor() {
    //     this.color = shapeColor
    // }
    render() {
        `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends SVG {
    constructor(shapeColor) {
        super(shapeColor)
    }
    // setColor() {
    //     this.color = shapeColor
    // }
    render() {
        `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = { Circle, Square, Triangle };
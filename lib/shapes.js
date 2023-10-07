class Shapes {
    constructor() {
        this.setColor = "";

        this.setColor = (response) => {
            this.setColor = response;
        }
        this.render = () => {
            throw new Error('Child class must implement render() method.')
        }
    }
}

class Circle extends Shapes {
    constructor() {
        super()
        
        this.render = () => {
            return `<circle cx="150" cy="100" r="80" fill="${this.setColor}" />`
        }
    }
}

class Square extends Shapes {
    constructor() {
        super()

        this.render = () => {
            return `<rect x="90" y="40" width="120" height="120" fill="${this.setColor}" />`
        }
    }
}

class Triangle extends Shapes {
    constructor() {
        super()
       
        this.render = () => {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.setColor}" />`
        }
    }
}

module.exports = { Circle, Square, Triangle };
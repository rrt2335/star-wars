export default class Starship {
    constructor(data) {
        this.name = data.name
        this.model = data.model
        this.manufacturer = data.manufacturer
        this.url = data.url
        this.crew = data.crew
    }

    get BasicTemplate() {
        return `<li onclick="app.controllers.swController.getStarship('${this.url}')" class="${this.name}">${this.name}</li>`
    }

    get DetailedTemplate() {
        return `
        <h3>${this.name}</h3>
        <p>Model: ${this.model}</p>
        <p>Manufacturer: ${this.manufacturer}</p>
        <p>Number of crew members: ${this.crew}</p>
        `
    }
}
export default class Starship {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }

    get BasicTemplate() {
        return `<li onclick="app.controllers.swController.getStarship('${this.url}')" class="${this.name}">${this.name}</li>`
    }

    get DetailedTemplate() {
        return `
        <h3>${this.name}</h3>
        // <p>Hair: ${this.hairColor}</p>
        // <p>Eyes: ${this.eyeColor}</p>
        // <p>Movies: ${this.movies}</p>
        `
    }
}
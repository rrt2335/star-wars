export default class Planet {
    constructor(data) {
        this.name = data.name
        this.terrain = data.terrain
        this.rotation_period = data.rotation_period
        this.url = data.url
        this.climate = data.climate
        this.gravity = data.gravity
        this.population = data.population
    }

    get BasicTemplate() {
        return `<li onclick="app.controllers.swController.getPlanet('${this.url}')" class="${this.terrain}">${this.name}</li>`
    }

    get DetailedTemplate() {
        return `
        <h3>${this.name}</h3>
        <p>Terrain: ${this.terrain}</p>
        <p>Rotation: ${this.rotation_period}</p>
        <p>Climate: ${this.climate}</p>
        <p>Gravity: ${this.gravity}</p>
        <p>Population: ${this.population}</p>
        `
    }

}
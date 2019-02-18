export default class Planet {
    constructor(data) {
        this.name = data.name
        this.terrain = data.terrain
        this.rotation = data.rotation_period
        this.url = data.url
    }

    get BasicTemplate() {
        return `<li onclick="app.controllers.swController.getPlanet('${this.url}')" class="${this.terrain}">${this.name}</li>`
    }

    get DetailedTemplate() {
        return `
        <h3>${this.name}</h3>
        <p>Terrain: ${this.terrain}</p>
        <p>Rotation: ${this.rotation}</p>
        `
    }

}
// Private
import StarWarsService from "./starWarsService.js";

let _swService = new StarWarsService()

function drawPeople() {
    let people = _swService.People
    let template = ''
    people.forEach(p => {
        template += p.BasicTemplate
    })
    // Handles people list
    document.getElementById('sw-people').innerHTML = template
    document.getElementById('buttons-people').innerHTML = `
    <button ${_swService.PreviousPeople ? '' : 'disabled'} onclick="app.controllers.swController.getPeople('${_swService.PreviousPeople}')">Previous</button>
    <button ${_swService.NextPeople ? '' : 'disabled'} onclick="app.controllers.swController.getPeople('${_swService.NextPeople}')">Next</button>
    `
}

function drawActivePerson() {
    document.getElementById('active-person').innerHTML = _swService.ActivePerson.DetailedTemplate
}

function drawPlanets() {
    let planets = _swService.Planets
    let template = ''
    planets.forEach(p => {
        template += p.BasicTemplate
    })

    // Handles planet list
    document.getElementById('sw-planets').innerHTML = template
    document.getElementById('buttons-planet').innerHTML = `
    <button ${_swService.PreviousPlanets ? '' : 'disabled'} onclick="app.controllers.swController.getPlanets('${_swService.PreviousPlanets}')">Previous</button>
    <button ${_swService.NextPlanets ? '' : 'disabled'} onclick="app.controllers.swController.getPlanets('${_swService.NextPlanets}')">Next</button>
    `
}

function drawActivePlanet() {
    document.getElementById('active-planet').innerHTML = _swService.ActivePlanet.DetailedTemplate
}

function drawStarships() {
    let starships = _swService.Starships
    let template = ''
    starships.forEach(p => {
        template += p.BasicTemplate
    })

    // Handles starship list
    document.getElementById('sw-starships').innerHTML = template
    document.getElementById('buttons-starship').innerHTML = `
    <button ${_swService.PreviousStarships ? '' : 'disabled'} onclick="app.controllers.swController.getStarships('${_swService.PreviousStarships}')">Previous</button>
    <button ${_swService.NextStarships ? '' : 'disabled'} onclick="app.controllers.swController.getStarships('${_swService.NextStarships}')">Next</button>
    `
}

function drawActiveStarship() {
    document.getElementById('active-starship').innerHTML = _swService.ActiveStarship.DetailedTemplate
}

// Public
export default class StarWarsController {
    constructor() {
        //add subscribers to service
        _swService.addSubscriber('people', drawPeople)
        _swService.addSubscriber('activePerson', drawActivePerson)
        _swService.getAllApiPeople()
        _swService.addSubscriber('planets', drawPlanets)
        _swService.addSubscriber('activePlanet', drawActivePlanet)
        _swService.getAllApiPlanets()
        _swService.addSubscriber('starships', drawStarships)
        _swService.addSubscriber('activeStarship', drawActiveStarship)
        _swService.getAllApiStarships()
    }

    getPeople(url) {
        _swService.getAllApiPeople(url)
    }

    getPerson(url) {
        _swService.getOneApiPerson(url)
    }

    getPlanets(url) {
        _swService.getAllApiPlanets(url)
    }

    getPlanet(url) {
        _swService.getOneApiPlanet(url)
    }
    
    getStarships(url) {
        _swService.getAllApiStarships(url)
    }

    getStarship(url) {
        _swService.getOneApiStarship(url)
    }

}
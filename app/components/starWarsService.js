// Private
import Person from "../models/person.js";
import Planet from "../models/planet.js";
import Starship from "../models/starship.js";

// Creates an object to send requests from
let _peopleApi = axios.create({
    baseURL: 'https://swapi.co/api/people'
})

let _planetsApi = axios.create({
    baseURL: 'https://swapi.co/api/planets'
})

let _starshipsApi = axios.create({
    baseURL: 'https://swapi.co/api/starships'
})

let _state = {
    people: [],
    nextPrevPeople: {
        nextUrl: '',
        previousUrl: ''
    },
    activePerson: {},

    planets: [],
    nextPrevPlanets: {
        nextUrl: '',
        previousUrl: ''
    },
    activePlanet: {},

    starships: [],
    nextPrevStarships: {
        nextUrl: '',
        previousUrl: ''
    },
    activeStarship: {}
}

let _subscribers = {
    people: [],
    nextPrevPeople: [],
    activePerson: [],

    planets: [],
    nextPrevPlanets: [],
    activePlanet: [],

    starships: [],
    nextPrevStarships: [],
    activeStarship: []
}

// HANDLES ALL ASYNC
function setState(prop, value) {
    _state[prop] = value
    _subscribers[prop].forEach(fn => fn());
}

// Public
export default class StarWarsService {
    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn)
    }

    // Get local data
    get People() {
        // Breaks references of each object in state
        return _state.people.map(p => new Person(p))
    }

    get Planets() {
        //Breaks Refrences of each object in state
        return _state.planets.map(p => new Planet(p))
    }

    get Starships() {
        //Breaks Refrences of each object in state
        return _state.starships.map(p => new Starship(p))
    }

    get NextPeople() {
        return _state.nextPrevPeople.nextUrl
    }

    get PreviousPeople() {
        return _state.nextPrevPeople.previousUrl
    }

    get NextPlanets() {
        return _state.nextPrevPlanets.nextUrl
    }

    get PreviousPlanets() {
        return _state.nextPrevPlanets.previousUrl
    }

    get NextStarships() {
        return _state.nextPrevStarships.nextUrl
    }

    get PreviousStarships() {
        return _state.nextPrevStarships.previousUrl
    }

    get ActivePerson() {
        // Creates a new object that is a copy of the active person (breaking reference)
        return new Person(_state.activePerson)
    }
    get ActivePlanet() {
        // Creates a new object that is a copy of the active planet (breaking reference)
        return new Planet(_state.activePlanet)
    }
    get ActiveStarship() {
        // Creates a new object that is a copy of the active starship (breaking reference)
        return new Starship(_state.activeStarship)
    }

    // Make a call to swapi api to get all people
    getAllApiPeople(url = '') {
        _peopleApi.get(url)
            // Happens after data comes back
            .then(response => {
                // All axios requests return 'data' in the response
                let people = response.data.results.map(d => new Person(d))
                let urlData = {
                    nextUrl: response.data.next,
                    previousUrl: response.data.previous
                }
                setState('nextPrevPeople', urlData)
                setState('people', people)
            })
            .catch(err => {
                console.error(err)
            })
    }
    getOneApiPerson(url) {
        _peopleApi.get(url)
            .then(res => {
                setState('activePerson', new Person(res.data))
            })
            .catch(err => {
                console.error(err)
            })
    }

    // Make a call to swapi api to get all planets
    getAllApiPlanets(url = '') {
        _planetsApi.get(url)
            // Happens after data comes back
            .then(response => {
                //all axios requests return 'data' in the response
                let planets = response.data.results.map(d => new Planet(d))
                let urlData = {
                    nextUrl: response.data.next,
                    previousUrl: response.data.previous
                }
                setState('nextPrevPlanets', urlData)
                setState('planets', planets)
            })
            .catch(err => {
                console.error(err)
            })
    }
    getOneApiPlanet(url) {
        _planetsApi.get(url)
            .then(res => {
                setState('activePlanet', new Planet(res.data))
            })
            .catch(err => {
                console.error(err)
            })
    }

    // Make a call to swapi api to get all starships
    getAllApiStarships(url = '') {
        _starshipsApi.get(url)
            // Happens after data comes back
            .then(response => {
                //all axios requests return 'data' in the response
                let starships = response.data.results.map(d => new Starship(d))
                let urlData = {
                    nextUrl: response.data.next,
                    previousUrl: response.data.previous
                }
                setState('nextPrevStarships', urlData)
                setState('starships', starships)
            })
            .catch(err => {
                console.error(err)
            })
    }
    getOneApiStarship(url) {
        _starshipsApi.get(url)
            .then(res => {
                setState('activeStarship', new Starship(res.data))
            })
            .catch(err => {
                console.error(err)
            })
    }


}
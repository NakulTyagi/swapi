import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Person from './person'
import "./swapi.css";
import Planets from "./planets";
import Starships from "./starships";
import Films from "./films";
import Species from "./species";
import Vehicles from "./vehicles";


class Swapi extends Component {

    state = { pictures: [], persons: [] };





    render() {

        return (
            <div className="contain">
                <div className="header">


                    <img
                        height="400px"
                        width="100%"
                        src="https://store-images.s-microsoft.com/image/apps.40057.13982743944721264.aba8e5da-4441-4232-a0e1-21747a781f2b.0c0baeb1-555e-4ef5-af93-ca8b1bd633d7?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF"
                        alt=""
                    />
                    <Router>
                        <div>
                            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto"  >
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/">STARWARS</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/character">Characters</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/about">Planets</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/dashboard">Starships</Link>
                                        </li>

                                        <li class="nav-item">
                                            <Link class="nav-link" to="/vehicle">Vehicles</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/specie">Species</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <hr />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/character">
                                    <About />
                                </Route>
                                <Route path="/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route path="/movies">
                                    <Films />
                                </Route>
                                <Route path="/vehicle">
                                    <Vehicles />
                                </Route>
                                <Route path="/specie">
                                    <Species />
                                </Route>
                            </Switch>
                        </div>
                    </Router>

                </div>
            </div>
        );

    }
}
function Home() {
    return (
        <div>
            <h1>MAY THE FORCE BE WITH YOU</h1>
        </div>
    );
}

function Character() {
    return (
        <div>
            <Person />
        </div>
    );
}

function About() {
    return (
        <div>
            <Planets />
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <Starships />
        </div>
    );
}
function Movies() {
    return (
        <div>
            <Films />
        </div>
    );
}
function Specie() {
    return (
        <div>
            <Species />
        </div>
    );
}
function Vehicle() {
    return (
        <div>
            <Vehicles />
        </div>
    );
}
export default Swapi;
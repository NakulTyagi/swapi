import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button } from "antd";
import { Input, Table } from "antd";
import { render } from "@testing-library/react";



class Films extends Component {

    state = { pictures: [], persons: [] };



    componentDidMount = () => {

        fetch('https://swapi.co/api/films/').then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>

                        <table>
                            <tr>
                                <th>{pic.name}</th>


                                <td>{pic.height}</td>


                                <td>{pic.mass}</td>


                                <td>{pic.hair_color}</td>


                                <td>{pic.eye_color}</td>


                                <td>{pic.birth_year}</td>


                                <td>{pic.gender}</td>

                            </tr>
                        </table>

                    </div>
                )
            })
            this.setState({ pictures: pictures });
            console.log("state", this.state.pictures)
        })
    }




    render() {

        return (
            <div className="contain">
                <div className="header">
                    <table>
                        <tr>
                            <th>Name</th>


                            <th>Height</th>


                            <th>Mass</th>


                            <th>Hair Color</th>


                            <th>Eye Color</th>


                            <th>Birth Year</th>


                            <th>Gender</th>

                        </tr>
                    </table>
                    {this.state.pictures}


                </div>
            </div>
        );

    }
}

export default Films;
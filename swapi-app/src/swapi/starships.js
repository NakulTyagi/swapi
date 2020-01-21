import React, { Component } from "react";




class Starships extends Component {

    state = { pictures: [], persons: [] };



    componentDidMount = () => {

        fetch('https://swapi.co/api/starships/').then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>

                        <table>
                            <tr>
                                <th>{pic.name}</th>


                                <td>{pic.model}</td>


                                <td>{pic.crew}</td>


                                <td>{pic.passengers}</td>


                                <td>{pic.hyperdrive_rating}</td>


                                <td>{pic.starship_class}</td>


                                <td>{pic.created}</td>

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


                            <th>Model</th>


                            <th>Crew</th>


                            <th>Passengers</th>


                            <th>Hyperdrive Rating</th>


                            <th>Starship class</th>


                            <th>Created</th>

                        </tr>
                    </table>
                    {this.state.pictures}


                </div>
            </div>
        );

    }
}

export default Starships;
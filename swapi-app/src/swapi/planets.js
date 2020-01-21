import React, { Component } from "react";




class Planets extends Component {

    state = { pictures: [], persons: [] };



    componentDidMount = () => {

        fetch('https://swapi.co/api/planets/').then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>

                        <table>
                            <tr>
                                <th>{pic.name}</th>


                                <td>{pic.climate}</td>


                                <td>{pic.gravity}</td>


                                <td>{pic.population}</td>


                                <td>{pic.terrain}</td>


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


                            <th>Climate</th>


                            <th>Gravity</th>


                            <th>Population</th>


                            <th>Terrain</th>




                        </tr>
                    </table>
                    {this.state.pictures}


                </div>
            </div>
        );

    }
}

export default Planets;
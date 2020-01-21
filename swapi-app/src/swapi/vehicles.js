import React, { Component } from "react";




class Vehicles extends Component {

    state = { pictures: [], persons: [] };



    componentDidMount = () => {

        fetch('https://swapi.co/api/vehicles/').then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>

                        <table>
                            <tr>
                                <th>{pic.name}</th>


                                <td>{pic.model}</td>


                                <td>{pic.manufacturer}</td>


                                <td>{pic.passengers}</td>


                                <td>{pic.cargo_capacity}</td>


                                <td>{pic.vehicle_class}</td>



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
                    <table >
                        <tr>
                            <th>Name</th>


                            <th>Model</th>


                            <th>Manufacturer</th>


                            <th>Passengers</th>


                            <th>Cargo_capacity</th>


                            <th>Vehicle_class</th>


                        </tr>
                    </table>
                    {this.state.pictures}


                </div>
            </div>
        );

    }
}

export default Vehicles;
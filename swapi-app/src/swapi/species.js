import React, { Component } from "react";




class Species extends Component {

    state = { pictures: [], persons: [] };



    componentDidMount = () => {

        fetch('https://swapi.co/api/species/').then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>

                        <table>
                            <tr>
                                <th>{pic.name}</th>


                                <td>{pic.classification}</td>


                                <td>{pic.designation}</td>








                                <td>{pic.language}</td>


                                <td>{pic.average_lifespan}</td>

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


                            <th>Classification</th>


                            <th>Designation</th>


                            <th>Language</th>


                            <th>Average Lifespan</th>

                        </tr>
                    </table>
                    {this.state.pictures}


                </div>
            </div>
        );

    }
}

export default Species;
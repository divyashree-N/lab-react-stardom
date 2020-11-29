import React, { Component } from 'react'
import prostar from '../component/resources/prostars.json'

export default class Table extends Component {
    constructor() {
        super();
        this.state = {
            prostar: [prostar[0], prostar[1], prostar[2], prostar[3], prostar[4]],

        }
    }

    renderProstars = () => {
        const data = this.state.prostar;
        const mapRow = data.map(prostar => (
            <tr key={prostar.id}>
                <td><img src={prostar.pictureUrl} alt="" /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete-button">Delete</button></td>
            </tr>
        ));
        return mapRow;
    }
    addRandomProstar = () => {
        let newArr = prostar.slice(5, prostar.length)
        console.log(newArr);
        let random = Math.floor(Math.random() * newArr.length)
        console.log('random', newArr[random]);
        this.setState({ prostar: [...this.state.prostar, newArr[random]] });
    }
    sortByName = () => {
        let sortedValue = prostar.sort((a, b) => a.name.localeCompare(b.name))

        console.log(prostar.sort((a, b) => a.name.localeCompare(b.name)));

        this.setState({
            prostar: sortedValue
        })

    }
    sortByPopularity = () => {
        let sortByPopularity = prostar.sort((a, b) => b.popularity - a.popularity)
        console.log(prostar.sort((a, b) => b.popularity - a.popularity))
        this.setState({
            prostar: sortByPopularity
        })

    }

    render() {
        return (
            <>
                <div className="table-content">
                    <div>
                        <button className="button-1" onClick={this.addRandomProstar}>
                            Add Random prostar
                    </button>
                        <button className="button-2" onClick={this.sortByName}>
                            Sort By Name
                    </button>
                        <button className="button-3" onClick={this.sortByPopularity}>
                            Sort By Popularity
                    </button>
                    </div>
                    <div className="table-container">
                        <table className="heading-row">
                            <thead>
                                <tr>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Popularity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProstars()}
                            </tbody>


                        </table>
                    </div>

                </div>
            </>
        )
    }
}
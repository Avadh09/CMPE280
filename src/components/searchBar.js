import React, { Component } from 'react';
import axios from 'axios';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            placeValue:''
        };
    }
    handleInputChange = () => {
        this.setState({
            searchQuery: this.search.value
        })
    }

    handlePlaceChange = () => {

        this.setState({
            placeValue: this.place.value
        })
    }

    handleSubmit = (event) => {

        console.log("I am in submit")
        event.preventDefault();

        let searchPosition = this.state.searchQuery;
        let searchLocation = this.state.placeValue;

        console.log("searchPosition",searchPosition)
        console.log("searchLocation", searchLocation)

        axios.get('http://localhost:5000/jobs', {
            params: {
                type:searchPosition,
                location:searchLocation
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });


        //
        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        // });
    }

    render() {
        return (
            <form method='get' onSubmit={this.handleSubmit}>
                <div >
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                </div>

                <div>
                    <input
                        placeholder="Place..."
                        ref={input => this.place = input}
                        onChange={this.handlePlaceChange}
                    />
                </div>
                <p>{this.state.searchQuery}</p>

                <button>Search</button>
            </form>
        )
    }
}

export default Search;
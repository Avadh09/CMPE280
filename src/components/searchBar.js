import React, { Component } from 'react';
import ReturnJobs from './returnedJobs'
import axios from 'axios';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            placeValue:'',
            jobsData: []
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

        event.preventDefault();
        let searchPosition = this.state.searchQuery;
        let searchLocation = this.state.placeValue;
        let responseData=[];

        axios.get('http://localhost:5000/jobs', {
            params: {
                type:searchPosition,
                location:searchLocation
            }
            })
            .then((response) => {
                //response.data = JSON.stringify(response.data);
                responseData = response.data.slice();
                this.setState({

                    jobsData: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })

        }

    render() {
        return (
            <div className="searchBar">
                <form method='get' onSubmit={this.handleSubmit}>
                    <div className="jobSearch" >
                        <input
                            placeholder="Search for..."
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="searchLocation">
                        <input
                            placeholder="Place..."
                            ref={input => this.place = input}
                            onChange={this.handlePlaceChange}
                        />
                    </div>
                    <p>{this.state.searchQuery}</p>

                    <button>Search</button>
                </form>

                <ReturnJobs data={this.state.jobsData} />

            </div>
        )
    }
}

export default Search;
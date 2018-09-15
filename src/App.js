import Background from '../backgroundImg.jpg'
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

import Search from './components/searchBar'

class App extends Component{
    render(){
        return(
            // style={{backgroundImage: "url(" + Background + ")"}}
            <div className="App"  >
                {/*<h1> Logo </h1>*/}
                {/*<p>CMPE 280</p>*/}
                <Search/>

            </div>
        );
    }
}

export default hot(module)(App);
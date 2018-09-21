//import Background from '../backgroundImg.jpg'
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './components/searchBar/searchBar'
import Home from './components/home/homePage'
import logo from "../erecruit_logo.png";
import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return(
            // style={{backgroundImage: "url(" + Background + ")"}}
            <div className="App"  >
                <div className="headerContainer">
                    {/*className='logoContainer'*/}
                    <div>
                        <img src={logo} className="logo" height='140' width='150'/>
                    </div>
                    <div className="linkPages">
                    <Link to='/talentpool'><button className="btn btn-primary btn-large float-right m-2"> Join our Talent Pool </button></Link>
                    <Link to='/search'><button className="btn btn-primary btn-large float-right m-2"> Search Openings </button> </Link>
                    <button className="btn btn-primary btn-large float-right m-2"> Sign up for Job Alerts </button>
                    </div>
                        {/*<div className="loginButton">*/}
                    {/*/!*<button onClick={this.handleLogin}>Login/SignUp</button>*!/*/}
                    {/*</div>*/}

                </div>
                <Home/>
                {/*<Search/>*/}
            </div>
        );
    }
}

export default hot(module)(App);





// import Background from '../backgroundImg.jpg'
// import React, { Component} from "react";
// import {hot} from "react-hot-loader";
// import "./App.css";
//
//
// import Search from './components/searchBar/searchBar'
// import Home from './components/home/homePage'
//
// class App extends Component{
//     render(){
//         return(
//             // style={{backgroundImage: "url(" + Background + ")"}}
//             <div className="App"  >
//                 {/*<h1> Logo </h1>*/}
//                 {/*<p>CMPE 280</p>*/}
//                 <Search/>
//                 <Home/>
//
//             </div>
//         );
//     }
// }
//
//export default hot(module)(App);
import React, { Component} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './enterTalentPool.css'
import logo from "../../../erecruit_logo.png";
// import Search from "./searchBar";
//import background from '../../backgroundImg.jpg';

class EnterTalentPool extends Component{

    constructor (props) {
        super(props);
        this.state = {
            fields:{},
            errors:{}

        }
    }


    validate =(event) =>
    {
        event.preventDefault();
        firstName  = document.getElementById("firstName").value;
        console.log("firstname", firstName)
        lastName  = document.getElementById("lastName").value;
        phone = document.getElementById("phone").value;
        email = document.getElementById("email").value;
        interest = document.getElementById("interest").value;

        errors = "";

        if (firstName === "") {
            errors += "First name is required.\n";
        }

        if (lastName === "") {
            errors += "Last name is required.\n";
        }

        if (interest === "") {
            errors += "Interest is required.\n";
        }

        phoneRE = /^\(\d{3}\) *\d{3}-\d{4}$/;
        if (!phone.match(phoneRE)){
            errors += "Invalid phone number. " +
                "Example: (999) 999-9999\n";
        }

        emailRE = /^.+@.+\..{2,4}$/;
        if (!email.match(emailRE)){
            errors += "Invalid email address. " +
                "Should be xxxxx@xxxxx.xxx\n";
        }

        if (errors != "") {
            alert(errors);
        }
    }

    handleInputChange(field, event) {

        let fields = this.state.fields;
        fields[field] = event.target.value;
        this.setState({fields});

    }
    handleSubmit =(event) =>
    {
        event.preventDefault()




    }

    render(){
        return(
            <div className="talentPool">
                <div >
                    <img src={logo} className="logo" width='150'/>
                </div>
                <div className="loginButton">
                    {/*<button onClick={this.handleLogin}>Login/SignUp</button>*/}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Join Our Talent Pool</legend>
                        <label>First Name*:</label>
                        <input type="text"
                               ref="fistName"
                               onChange={this.handleInputChange.bind(this,"firstName")}
                               value={this.state.fields["firstName"]}
                               id="firstName"/>
                        <span style={{color: "red"}}>{this.state.errors["firstName"]}</span>
                        <br/>
                        <label>Middle Name:</label>
                        <input type="text"
                               ref="middleName"
                               onChange={this.handleInputChange.bind(this, "middleName")}
                               value={this.state.fields["middleName"]}
                               id="middleName"/>
                        <span style={{color: "red"}}>{this.state.errors["middleName"]}</span>
                        <br/>
                        <label>Last Name*:</label>
                        <input type="text"
                               ref="lastName"
                               onChange={this.handleInputChange.bind(this, "lastName")}
                               value={this.state.fields["lastName"]}
                               id="lastName"/>
                        <span style={{color: "red"}}>{this.state.errors["lastName"]}</span>
                        <br/>
                        <label>Phone number:</label>
                        <input type="text"
                               value="(nnn) nnn-nnnn"
                               onChange={this.handleInputChange.bind(this, "phoneNumber")}
                               value={this.state.fields["phoneNumber"]}
                               id="phone"/>
                        <span style={{color: "red"}}>{this.state.errors["phoneNumber"]}</span>
                        <br/>
                        <label>Email address:</label>
                        <input type="text"
                               value="xxxxx@xxxxx.xxx"
                               onChange={this.handleInputChange.bind(this, "email")}
                               value={this.state.fields["email"]}
                               id="email"/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        <br/>
                        <label>Jobs of Interest*:</label>
                        <input type="text"
                               onChange={this.handleInputChange.bind(this, "interest")}
                               value={this.state.fields["interest"]}
                               id="interest"/>
                        <span style={{color: "red"}}>{this.state.errors["interest"]}</span>
                        <br/>
                        <button>
                            Enter
                        </button>
                        <br/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default EnterTalentPool;
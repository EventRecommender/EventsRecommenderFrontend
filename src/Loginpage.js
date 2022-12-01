import { render } from "@testing-library/react";
import React, { useState } from "react";
import './Loginpage.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Username: "username",
                      Password: "password"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleSubmit(event) {
        alert("Your favorite name is: " + this.state.Username);
        event.preventDefault();
    }

    render() {
        return (<>
            <div class="center">
                <p>This is the login page</p>
                <br/>
                <form class="center" onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input name="Username" type="text" value={this.state.Username} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <label>Password: 
                        <input class="center" name="Password" type="text" value={this.state.Password} onChange={this.handleChange}/>
                    </label>
                    <br />
                    <input class="useButton" type="submit" value="Login"/>
                    <br />
                </form>
                <button class="useButton" onClick={createUser}>Create new user</button>
                <br />
                <button class="useButton" onClick={createOrg}>Create new organizer</button>
            </div>
        </>);
        }
};

function createUser() {
    alert("Hmm");
    return (<p>Oops</p>);
};

function createOrg() {
    return <page />;
};

function page(props) {
    return <p>helloS</p>;
}

export default Login;
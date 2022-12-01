import React from "react";
import Student from "./Student";
import Organizer from "./Organizer";
import Admin from "./Admin";
import './Loginpage.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    Username: "username",
                    Password: "password",
                    Loggedin: "Not"
                    };

        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleCreateOrg = this.handleCreateOrg.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleSubmit(event) {
        alert("Your favorite name is: " + this.state.Username);
        this.setState({Loggedin: "Student"});
        event.preventDefault();
    }

    handleCreateUser(event) {
        alert("You tried to create a user");
        event.preventDefault();
    }

    handleCreateOrg(event) {
        alert("You tried to create an org");
        event.preventDefault();
    }

    render() {
        const Loggedin = this.state.Loggedin;

        if(Loggedin === "Student"){
            return <Student />;
        }else if(Loggedin === "Org"){
            return <Organizer />;
        }else if(Loggedin === "Admin"){
            return <Admin />;
        }

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
                <button class="useButton" onClick={this.handleCreateUser}>Create new user</button>
                <br />
                <button class="useButton" onClick={this.handleCreateOrg}>Create new organizer</button>
            </div>        
        </>);
        }
};

export default Login;
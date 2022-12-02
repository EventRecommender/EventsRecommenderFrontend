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
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleSubmit(event) {
        alert("Your favorite name is: " + this.state.Username);

        //These if's should check via an http request to the user.

        if(this.state.Username === "Student"){
            this.setState({Loggedin: "Student"});
        };

        if(this.state.Username === "Org"){
            this.setState({Loggedin: "Org"});
        };

        if(this.state.Username === "Admin"){
            this.setState({Loggedin: "Admin"});
        };

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

    handleLogout(event) {
        this.setState({Loggedin: "Not"});
        event.preventDefault();
    }

    Logout() {
    return <button onClick={this.handleLogout}>Logout</button>;
    };

    render() {
        const Loggedin = this.state.Loggedin;
        let content;
        if(Loggedin === "Student"){
            content = <Student />;

        }else if(Loggedin === "Org"){
            content = <Organizer />;

        }else if(Loggedin === "Admin"){
            content = <Admin />;

        }else{
            content = (<>
                <div className="center">
                    <p>This is the login page</p>
                    <br/>
                    <form className="center" onSubmit={this.handleSubmit}>
                        <label>Username: 
                            <input name="Username" type="text" value={this.state.Username} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <label>Password: 
                            <input className="center" name="Password" type="text" value={this.state.Password} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <input className="useButton" type="submit" value="Login"/>
                        <br />
                    </form>
                    <button className="useButton" onClick={this.handleCreateUser}>Create new user</button>
                    <br />
                    <button className="useButton" onClick={this.handleCreateOrg}>Create new organizer</button>
                </div>        
            </>);
        }

        return (<body>
                <button onClick={this.handleLogout}>Logout</button>
                {content}
                </body>);
        };
};

export default Login;
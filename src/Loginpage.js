import React from "react";
import Student from "./Student";
import Organizer from "./Organizer";
import Admin from "./Admin";
import CreateUser from "./CreateUser";
import './Loginpage.css';
import './Student.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        //State variables.
        this.state = {
                    Username: "username",
                    Password: "password",
                    Loggedin: "Not",
                    Verify: ""
                    };       
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    //This makes sure that the inputs can be updated properly.
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    //The handleSubmit takes care of the submit action on the page.
    handleSubmit(event) {
        let loginData = JSON.stringify({'username':this.state.Username, 'password':this.state.Password});

        //This is the part that makes a request to the backend.
        fetch('', loginData)

        .then(res => res.json()).then((result) => {this.setState({Verify: result.items});
        alert(this.state.Verify)
        },
        (error) => {alert(JSON.stringify(error))}

        );

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

    //The handler for when you want to create a user.
    handleCreateUser(event) {
        this.setState({Loggedin: "NewUser"});
        event.preventDefault();
    }

    //The handler for logging out.
    handleLogout(event) {
        this.setState({Loggedin: "Not"});
        event.preventDefault();
    }

    //The function that renders everything.
    render() {
        const Loggedin = this.state.Loggedin;
        let content;
        let logoutButton = <button className="LogoutButton"data-testid="LogoutButton" onClick={this.handleLogout}>Logout</button>
        let backbutton = <button data-testid="BackButton" onClick={this.handleLogout}>Back</button>
        
        switch (Loggedin) {
            case "Student":
                content = (<>{logoutButton}<Student id = {1}/></>);
                break;

            case "Org": 
                content = (<>{logoutButton}<Organizer id = {1}/></>);
                break;

            case "Admin":
                content = (<>{logoutButton}<Admin id = {1}/></>);
                break;

            case "NewUser":
                content = (<>{backbutton}<CreateUser /></>);
                break;

            default:
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
                                    <input name="Password" type="text" value={this.state.Password} onChange={this.handleChange}/>
                                </label>
                            <br />
                                <input className="LoginButton" type="submit" value="Sign in"/>
                            <br />
                        </form>
                        <button data-testid="UserCreate" className="useButton" onClick={this.handleCreateUser}>Sign up</button>
                        <br />
                    </div>        
                </>);
                break;
        };

        return (<div>
                {content}
                </div>);
        };
};

export default Login;
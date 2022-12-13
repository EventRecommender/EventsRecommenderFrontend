import React from "react";
import Student from "./Student";
import Student2 from "./Pages/Student2";
import Organizer from "./Organizer";
import Admin from "./Admin";
import CreateUser from "./CreateUser";
import './Loginpage.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        //State variables.
        this.state = {
                    Username: "",
                    Password: "",
                    Loggedin: "Not",
                    Verify: "",
                    User: null,
                    Recommendations: [],
                    IncommingActivities: []
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

    async getRecommendations(id){
        let url = new URL('/getRecommendations', window.location.origin),
            params = {userid:id}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        
        const response = await fetch(url);
        if (response.ok){
            const content = await response.json()
            let result = []

                    for (let act of content){
                        let event = {
                            key: act.id,
                            img: act.img,
                            title: act.title,
                            place: act.place,
                            host: act.host,
                            date: act.date,
                            type: act.type,
                            url: act.url,
                            description: act.description
                        }
                        console.log(event);
                        result.push(event);
                    }
                    console.log(result);
                    return result;
        }
        return []
    }

    async getIncommingActivities(monthsForward, area){
        let url = new URL('/getIncommingActivities', window.location.origin),
            params = {monthsForward:monthsForward, area:area }
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        
        const response = await fetch(url);
        if (response.ok){
            const content = await response.json()
            let result = []

                    for (let act of content){
                        let event = {
                            key: act.id,
                            img: act.img,
                            title: act.title,
                            place: act.place,
                            host: act.host,
                            date: act.date,
                            type: act.type,
                            url: act.url,
                            description: act.description
                        }
                        console.log(event);
                        result.push(event);
                    }
                    console.log(result);
                    return result;
        }
        return []
    }


    //The handleSubmit takes care of the submit action on the page.
    handleSubmit(event) {
        let loginData = JSON.stringify({'username':this.state.Username, 'password':this.state.Password});

        //This is the part that makes a request to the backend.
        fetch('/login', {
            method: 'POST',
            body: loginData,
            headers: {
                'Content-Type' : "application/json"
            }
        }).then((response) => {
            if (response.ok)
            {
                console.log("success");
                response.json().then(async (content) =>{
                    this.getRecommendations(content.id).then(recommendations => {
                        console.log(content,recommendations);
                        this.getIncommingActivities(20,content.area).then(incommingActivities => {
                            this.setState({Loggedin: content.role, User: content, Recommendations: recommendations, IncommingActivities: incommingActivities });
                        })
                    })  
                })
            }
            else console.log(response);
        }).catch((error) => console.log(error));

        if(this.state.Username === "Student" || this.state.Verify === "Student"){
            this.setState({Loggedin: "Student"});
        };

        if(this.state.Username === "Org" || this.state.Verify === "Student"){
            this.setState({Loggedin: "Organization"});
        };

        if(this.state.Username === "Admin" || this.state.Verify === "Student"){
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
                content = (<>{logoutButton}<Student2 
                                        id = {this.state.User.id}
                                        recommandations = {this.state.Recommendations} 
                                        incommingActivities = {this.state.IncommingActivities}
                            /></>);
                break;

            case "Organization": 
                content = (<>{logoutButton}<Organizer username = {this.state.User.username}/></>);
                break;

            case "Admin":
                content = (<>{logoutButton}<Admin token = {this.state.User.token} area = {this.state.User.area}/></>);
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
                                    <input data-testid="Username" className="input" name="Username" type="text" value={this.state.Username} onChange={this.handleChange}/>
                                </label>
                            <br />
                                <label>Password: 
                                    <input data-testid="Password"className="input" name="Password" type="text" value={this.state.Password} onChange={this.handleChange}/>
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
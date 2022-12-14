import React from "react";
import './CreateUser.css';

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
            City: "",
            Institute: "",
            Role: "Student",
            Tag: "Show"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleTag = this.handleTag.bind(this);
    };

    handleSubmit(event) {

        let userinfo = JSON.stringify(
        {
            Item1: {
                'username':this.state.Username, 
                'password':this.state.Password,
                'city':this.state.City,
                'institute':this.state.Institute,
                'role':this.state.Role,
            },
            Item2: [this.state.Tag]
        });

        fetch('/createUser', 
        {
            method: 'POST', 
            body: userinfo,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {if(response.ok){console.log("Success")}})
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        event.preventDefault();
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleRole(event) {
        this.setState({Role: event.target.value});
    }

    handleTag(event) {
        this.setState({Tag: event.target.value});
    }

    render(){
        return (<>
            <form className="center" onSubmit={this.handleSubmit}>
                <label>Username: 
                <input className="input" name="Username" type="text" value={this.state.Username} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Password:
                <input className="input" name="Password" type="text" value={this.state.Password} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>City:
                <input className="input" name="City" type="text" value={this.state.City} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Institute:
                <input className="input" name="Institute" type="text" value={this.state.Institute} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Role:
                <select value={this.state.Role} onChange={this.handleRole}>
                    <option value="Student">Student</option>
                    <option value="Organization">Organization</option>
                </select>
                </label>
                <br/>
                <label>Interested in:
                <select value={this.state.Tag} onChange={this.handleTag}>
                    <option value="Koncert">Koncert</option>
                    <option value="Foredrag">Foredrag</option>
                    <option value="Show">Show</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Musical">Musical</option>
                    <option value="Opera">Opera</option>
                    <option value="Ballet">Ballet</option>
                </select>
                </label>
                <br/>
                <input className="input" type="submit" value="Create New User"/>
            </form>
        </>)
    };
};

export default CreateUser;
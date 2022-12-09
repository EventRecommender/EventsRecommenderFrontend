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
            Role: 'Student',
            Tag: 'Food'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRole = this.handleRole.bind(this);
        this.handleTag = this.handleTag.bind(this);
    };

    handleSubmit(event) {

        let userinfo = JSON.stringify({'username':this.state.Username, 
        'password':this.state.Password,
        'city':this.state.City,
        'institue':this.state.Institute,
        'role':this.state.Role,
        'tag':this.state.tag});

        fetch('/createUser', {method: 'POST', body: userinfo}).then((response) => response.json())
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
        this.setState({Role: event.target.Role});
    }

    handleTag(event) {
        this.setState({Tag: event.target.Tag});
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
                <label>Tags:
                <select value={this.state.Tag} onChange={this.handleTag}>
                    <option value="Bar">Bar</option>
                    <option value="Food">Food</option>
                </select>
                </label>
                <br/>
                <input className="input" type="submit" value="Create New User"/>
            </form>
        </>)
    };
};

export default CreateUser;
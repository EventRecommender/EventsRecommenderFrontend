import React from "react";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
            City: "",
            Institute: "",
            Role: 'Student'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };

    handleSubmit(event) {
        alert("You created user");
        let userinfo = JSON.stringify({'username':this.state.Username, 'password':this.state.Password,'city':this.state.City,'institue':this.state.Institute,'role':this.state.Role});

        fetch('', {method: 'POST', body: userinfo}).then((response) => response.json())
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

    handleSelect(event) {
        this.setState({value: event.target.Role});
    }

    render(){
        return (<>
            <form onSubmit={this.handleSubmit}>
                <label>Username: 
                <input name="Username" type="text" value={this.state.Username} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Password:
                <input name="Password" type="text" value={this.state.Password} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>City:
                <input name="City" type="text" value={this.state.City} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Institute:
                <input name="Institute" type="text" value={this.state.Institute} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Role:
                <select value={this.state.Role} onChange={this.handleSelect}>
                    <option value="Student">Student</option>
                    <option value="Organization">Organization</option>
                </select>
                </label>
                <br/>
                <input type="submit" value="Create New User"/>
            </form>
        </>)
    };
};

export default CreateUser;
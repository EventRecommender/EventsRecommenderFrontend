import React from "react";
import './CreateUser.css';

class CreateActivity extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Title: "",
            Host: "",
            City: "",
            Date: "",
            Image: "",
            Description: "",
            Tag: 'Food'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleSelect(event) {
        this.setState({value: event.target.Tag});
    }

    handleSubmit(event) {
        let activityinfo = JSON.stringify({'title':this.state.Title, 
        'host':this.state.Host,
        'city':this.state.City,
        'date':this.state.Date,
        'image':this.state.Image,
        'description':this.state.Description,
        'tag':this.state.Tag});

        fetch('/createActivity', {method: 'POST', body: activityinfo}).then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        event.preventDefault();
    };

    render() {
        return(<>
            <form className="center" onSubmit={this.handleSubmit}>
                <label>Title: 
                <input className="input" name="Title" type="text" value={this.state.Title} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Host:
                <input className="input" name="Host" type="text" value={this.state.Host} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>City:
                <input className="input" name="City" type="text" value={this.state.City} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Date:
                <input className="input" name="Date" type="datetime-local" value={this.state.Date} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Image:
                <input className="input" name="Image" type="url" value={this.state.Image} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>URL:
                <input className="input" name="URL" type="url" value={this.state.URL} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Description:
                <br/>
                <input className="input" name="Description" type="textarea" value={this.state.Description} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Tag:
                <select value={this.state.Tag} onChange={this.handleSelect}>
                    <option value="Bar">Bar</option>
                    <option value="Food">Food</option>
                </select>
                </label>
                <br/>
                <input type="submit" value="Create New Activity"/>
            </form>
        </>);
    }
};

export default CreateActivity;
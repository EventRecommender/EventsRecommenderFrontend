import React from "react";

class CreateActivity extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Title: "",
            Host: "",
            City: "",
            Date: "",
            Image: "",
            Description: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    };

    handleSubmit(event) {
        alert("You created activity");
        let formData = new FormData();
        formData.append('title', this.state.Title);
        formData.append('host', this.state.Host);
        formData.append('city', this.state.City);
        formData.append('date', this.state.Date);
        formData.append('image', this.state.Image);
        formData.append('description', this.state.Description);
        fetch('', {method: 'POST', body: formData}).then((response) => response.json())
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
            <form onSubmit={this.handleSubmit}>
                <label>Title: 
                <input name="Title" type="text" value={this.state.Title} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Host:
                <input name="Host" type="text" value={this.state.Host} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>City:
                <input name="City" type="text" value={this.state.City} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Date:
                <input name="Date" type="datetime-local" value={this.state.Date} onChange={this.handleChange} required/>
                </label>
                <br/>
                <label>Image:
                <input name="Image" type="url" value={this.state.Image} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>URL:
                <input name="URL" type="url" value={this.state.URL} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Description:
                <br/>
                <input name="Description" type="textarea" value={this.state.Description} onChange={this.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Create New Activity"/>
            </form>
        </>);
    }
};

export default CreateActivity;
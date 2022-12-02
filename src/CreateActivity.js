import React from "react";

class CreateActivity extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Title: "",
            Host: "",
            City: "",
            Date: "01-01-2022",
            Image: "",
            Descriptio: ""
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
        alert("You created user");
        event.preventDefault();
    };

    render() {
        return(<>
            <form onSubmit={this.handleSubmit}>
                <label>Title: 
                <input name="Title" type="text" value={this.state.Title} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Host:
                <input name="Host" type="text" value={this.state.Host} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>City:
                <input name="City" type="text" value={this.state.City} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>Date:
                <input name="Date" type="datetime-local" value={this.state.Date} onChange={this.handleChange}/>
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
import React from "react";

export class JSONForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            first: '',
            second: '',
            third: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        alert(`Hi ${this.state.first} ${this.state.second} ${this.state.third}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="first"
                        onChange={this.handleInputChange}
                        value={this.state.first}
                    />
                    <input
                        type="text"
                        name="second"
                        onChange={this.handleInputChange}
                        value={this.state.second}
                    />
                    <input
                        type="text"
                        name="third"
                        onChange={this.handleInputChange}
                        value={this.state.third}
                    />
                </label>
                <input type="submit" value="Send"/>
                <div>
                        {this.state.first} <br/> {this.state.second} <br/> {this.state.third}
                </div>

            </form>
        );
    }
}

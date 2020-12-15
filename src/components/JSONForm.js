import React from "react";

export class JSONForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        name="first"
                        type="text"
                        value={this.state.first}
                        onChange={this.handleChange} />
                </label>
                <label>
                    <input
                        name="second"
                        type="text"
                        value={this.state.second}
                        onChange={this.handleChange} />
                </label>
                <label>
                    <input
                        name="third"
                        type="text"
                        value={this.state.third}
                        onChange={this.handleChange} />
                    <p>{this.state.value}</p>
                </label>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>


            </form>
        );
    }
}

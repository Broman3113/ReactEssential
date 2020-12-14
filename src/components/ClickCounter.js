import React from 'react';

export class ClickCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = (data) => (e) => {
        if (data === "inc"){
            this.setState({ count: this.state.count + 1 });
        } else if (data === "dec"){
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick("inc")}>Increase</button>
                <button onClick={this.handleClick("dec")}>Decrease</button>
            </div>
        )
    }
}


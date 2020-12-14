import React from 'react';

export class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                {this.state.isToggleOn? '' : <img src="./logo192.png" onClick={this.handleClick} alt="Logo"/>}
                <br/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn? 'On' : 'Off'}
                </button>
            </div>
        );
    }
}

import React, { Component } from 'react'

class State2 extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    };

   ups = () => {
        this.setState({counter: this.state.counter + 1 })
      }
    handleClick = () => {
        this.ups()
    }  
      
    render() { 
        return (
            <div>
                <h1>{this.state.counter}</h1>
                 <button onClick={this.handleClick}>
                    Click me
                 </button>
            </div>
        )
    }
}

export default State2;
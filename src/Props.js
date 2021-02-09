import React from 'react'

class Welcome extends React.Component {
    render() {
      return (
      <div> 
          <h1>Hello, {this.props.name}</h1>
          <h2>I am {this.props.age} years old</h2>
      </div>
      );
    }
  }



export default Welcome;


import {React, useState, useEffect} from "react";

export class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Hello'
      };
    }
  
    render() {
      return (
        <div>
          <p>{this.state.message}</p>
          <button onClick={() => this.setState({ message: 'My name is Sloane' })}>
            Click me
          </button>
        </div>
      );
    }
  }
  

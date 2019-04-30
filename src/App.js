import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     formValue: []
    }
  }
  handleLanguage = (formValue) => {
    this.setState({ formValue: formValue });
    console.log("formValue parent calling", formValue);
  }
  render() {
    return (
      <div className="App">
        <Login onSelectLanguage={this.handleLanguage} />
      </div>
    );
  }
}

export default App;

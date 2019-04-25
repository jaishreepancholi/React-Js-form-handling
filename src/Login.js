import React, { Component } from 'react';
import Greet from './Greet';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: '',
      skills: 'react'
    }
  }
  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handleComment = event => {
    this.setState({
      comment: event.target.value
    })
  }
  handleSkill = event => {
    this.setState({
      skills: event.target.value
    })
  }
  handleSubmit = event => {
    alert(this.state.username + ' ' + 'and' + ' ' + this.state.comment + ' ' + 'skillss' + ' ' + this.state.skills);
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="">Username
          </label>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="">Comment</label>
          <textarea id="" cols="30" rows="10" value={this.state.comment} onChange={this.handleComment}></textarea>
          <label htmlFor="">Skills</label>
          <select value={this.state.skills} onChange={this.handleSkill}>
            <option value="react">React JS</option>
            <option value="angular">Angular JS</option>
            <option value="vue">Vue JS</option>
            <option value="ember">Ember JS</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
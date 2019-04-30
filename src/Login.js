import React, { Component } from 'react';
import Greet from './Greet';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comment: '',
      skills: ['react']
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
    var optArray = [];
    const newOpt = [];
    optArray = event.target.options;
    for (var i = 0; i < optArray.length; i++) {
      if (optArray[i].selected) {
        newOpt.push(optArray[i].value);
      }
    }
    this.setState({
      skills: newOpt
    })
  }
  handleSubmit = event => {
    alert(this.state.username + ' ' + 'and' + ' ' + this.state.comment + ' ' + 'skillss' + ' ' + this.state.skills);
    event.preventDefault();
    const formArray = []
    let formData = {
      'username': this.state.username,
      'comment': this.state.comment,
      'skills': this.state.skills
    }
    formArray.push(formData);
    this.props.onSelectLanguage(formArray);   

  }
  render() {
    const { username, comment, skills } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="">Username
          </label>
          <input type="text" value={username} onChange={this.handleChange} />
          <label htmlFor="">Comment</label>
          <textarea id="" cols="30" rows="10" value={comment} onChange={this.handleComment}></textarea>
          <label htmlFor="">Skills</label>
          <select value={skills} onChange={this.handleSkill} multiple={true}>
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
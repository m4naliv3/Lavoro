import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { OpenCreateAccount, CompleteLogin } from '../actions';
import CreateAccount from './create-account';

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {username: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.username, ' --> ', this.state.password) 
  }

  handleChange(target, event) {
    if(target === 'username') this.setState({username: event.target.value});
    if(target === 'password') this.setState({password: event.target.value});
  }

  render(){
    if(this.props.CreateAccount === true){
      return(
        <div><CreateAccount /></div>
      )
    }
    else{
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                id="username" 
                type="text"
                value={this.username}
                onChange={(e)=>{ this.handleChange('username', e) }}
                />
              Password:
              <input
                id="password" 
                type="password"
                onChange={(e)=>{ this.handleChange('password', e) }}
                />
            </label>
            <input id="submit" 
              type="submit" 
              value="Submit"
              onClick={() => {this.props.CompleteLogin(true)}} 
              />
          </form>
          <span>Don't have an Account?</span><br />
          <span className="nav-link" onClick={() => this.props.OpenCreateAccount(true)}>Create one now!</span>
        </div>
      );
    }
  }
};      

function mapStateToProps (state){ 
  return { 
    CreateAccount: state.CreateAccount,
    Login: state.Login
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    OpenCreateAccount: OpenCreateAccount,
    CompleteLogin: CompleteLogin
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(LoginForm);
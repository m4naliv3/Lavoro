import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import Login from './components/login';


function onAuthRequired({history}) {
    history.push('/login');
  }
  
  class Auth extends Component {
    render() {
      return (
        <Router>
          <Security issuer={'https://lavorochat.okta.com/oauth2/default'}
                    clientId={'904499'} 
                    redirectUri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired}
                    pkce={true} >
            <Route path='/' exact={true} component={Login} />
            <Route path='/login' render={() => <Login baseUrl={'https://lavorochat-login.okta.com'} />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </Security>
        </Router>
      );
    }
  }
  
  export default Auth;
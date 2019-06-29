import React, {Component} from 'react';
import { commsClient } from './comms_client';
import {SetMessages} from './actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Account from './components/account';
import ContactList from './components/contact-list';
import Header from './components/header';
import MessageList from './components/message-list';

class Dashboard extends Component {

  renderList(list){ list.map(m => { return( <span>{m}</span> ) }) }

  render(){
    // if(!this.props.Messages){
    //   commsClient('messages').then(r => { this.props.SetMessages(r) })
    //   return null;
    // }
    return (
      <div className="main-dashboard">
        <div className="container">
          <div className="content ui-scroll">
            <Header />
            <h2>Contact Map goes here</h2>
            <h3>Provider for contact list (google, outlook, Lavoro contact)</h3>
            <ContactList />
            <h2>Messaging Canvas</h2>
            <MessageList />
            <h2>Lavoro Functions</h2>
          </div>
          <div className="right-sidebar">
            <Account />
            <input type="button" value="Auto-Reply" />
            <input type="button" value="OOO Message" />
            <input type="button" value="Forwarding Settings" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state){ 
  return { 
      Messages: state.Messages 
  } 
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetMessages: SetMessages
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Dashboard);
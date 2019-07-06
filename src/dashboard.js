import React, {Component} from 'react';
import { commsClient } from './comms_client';
import {SetMessages} from './actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './containers/right-sidebar';
import ContactList from './components/contact-list';
import Header from './components/header';
import MessageList from './components/message-list';
import IconGradient from './images/lavoro-icon-gradient.png';

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
          <Header />
          <div className="content">
            <div className="contacts">
              <div className="title">
                <img src={IconGradient} alt=""/> 
                <h2>My Contacts</h2>
              </div>
              <div className="contact-tools">
                <FontAwesomeIcon icon="plus" />
                <FontAwesomeIcon icon="minus" />
              </div>
              <div className="ui-scroll">                
                <div className="contact-list">
                <ContactList />
                </div>
              </div>
            </div>      
            <div className="messaging">
              <div className="messaging-tools">
                <button className="btn btn-tab btn-square">Remind Me</button>
                <button className="btn btn-tab btn-square">Move to Email</button>
                <button className="btn btn-tab btn-square">Calendar</button>
                <button className="btn btn-tab btn-square">Search</button>
                <button className="btn btn-tab btn-square">Help</button>
              </div>
              <div className="ui-scroll"> 
                <div className="message-list">
                <MessageList />
                </div>
              </div>
            </div>        
          </div>
        </div>
        <Sidebar />
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
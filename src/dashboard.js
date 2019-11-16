import React, {Component} from 'react';
import { SetMessages, SetAccountPhone, SetAccount, OpenContactModal } from './actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './containers/right-sidebar';
import ContactList from './components/contact-list';
import Header from './components/header';
import MessageList from './components/message-list';
import IconGradient from './images/lavoro-icon-gradient.png';
import ContactModal from './components/contact-modal';
import { commsClient } from './comms_client';
import LoginForm from './components/login-form';


class Dashboard extends Component {
  render(){
    console.log('is it happening here?')
    if(!this.props.Account){ commsClient('accounts/2').then(r => { this.props.SetAccount(r) }) } 
    if(!this.props.AccountPhone){ commsClient('phones/1').then(r => { this.props.SetAccountPhone(r.PhoneNumber) }) }
    if(this.props.Login !== true){
      return (
        <div><LoginForm /></div>
      )
    }
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
                <div onClick={_ => this.props.OpenContactModal(true)}><FontAwesomeIcon icon="plus" /></div>
                <FontAwesomeIcon icon="minus" />
              </div>
              <div className="ui-scroll">                
                <div className="contact-list">
                  <ContactModal />
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
      Messages: state.Messages, 
      Account: state.Account,
      AccountPhone: state.AccountPhone,
      Login: state.Login
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    OpenContactModal: OpenContactModal,
    SetAccount: SetAccount,
    SetMessages: SetMessages,
    SetAccountPhone: SetAccountPhone
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Dashboard);
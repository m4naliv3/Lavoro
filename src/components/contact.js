import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetConversation } from '../actions';

class Contact extends Component {
  render(){
    var contact = this.props.Contact;
    if(!contact) return null;
    return (
      <div 
        className="Contact-Row" 
        onClick={e => { 
          commsClient('Conversations', 'POST', {ID: this.props.Account.PhoneNumberID, Caller: contact.Phone} )
          .then(conversation => { this.props.SetConversation(conversation) });
      }}>
        <img src={contact.Avatar} alt="Contact Person" height="5%" width="5%"/>
        <strong>{contact.ContactName}</strong>
        <br />
        <strong>Phone: </strong><span>{contact.Phone}</span>
        <strong>Email: </strong><span>{contact.Email}</span>
      </div>
    );
  }
}

function mapStateToProps (state){ 
  return { 
    Account: state.Account 
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetConversation: SetConversation
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Contact);
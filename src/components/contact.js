import React, {Component} from 'react';
import { commsClient } from '../comms_client';

export default class Contact extends Component {
  render(){
    var contact = this.props.Contact;
    if(!contact) return null;
    return (
      <div 
        className="Contact-Row" 
        onClick={e => { 
          commsClient('Conversation/' + contact.Phone).then(id => { this.props.SetConversationId(id) })
        //comms client lookup with contact phone and the account number to return conversationId 
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
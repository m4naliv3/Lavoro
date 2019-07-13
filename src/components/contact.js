import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetConversation, SetMessages } from '../actions';

class Contact extends Component {
  render(){
    var contact = this.props.Contact;
    if(!contact) return null;
    return (
      <div 
        className="Contact-Row" 
        onClick={_ => { 
          commsClient('Conversations', 'POST', {ID: this.props.Account.PhoneNumberID, Phone: contact.Phone} )
          .then(conversation => { 
            this.props.SetConversation(conversation)
            commsClient('messages/' + conversation.ID).then(r => { this.props.SetMessages(r) }) 
          });
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
    Account: state.Account,
    ConversationID: state.ConversationID
  } 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetConversation: SetConversation,
    SetMessages: SetMessages
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Contact);
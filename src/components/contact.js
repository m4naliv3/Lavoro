import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetConversation, SetMessages } from '../actions';
import { formatPhone } from '../functions/formatPhone';
import lavoroIcon from '../images/lavoro-icon.png';

class Contact extends Component {
  render(){
    var contact = this.props.Contact;
    var imgSrc = contact.Avatar ? contact.Avatar : lavoroIcon;
    if(!contact) return null;
    return (
      <div 
        className="contact" 
        key={contact.Phone}
        onClick={_ => { 
          commsClient('Conversations', 'POST', {ID: this.props.Account.PhoneNumberID, Phone: contact.Phone} )
          .then(conversation => { 
            this.props.SetConversation(conversation)
            commsClient('messages/' + conversation.ID).then(r => { this.props.SetMessages(r) }) 
          });
      }}>
        <div className="avatar">
          <div className="crop">
            <img src={imgSrc} alt="Contact Person" />
          </div>
        </div>
        <div className="contact-details">
          <h3>{contact.ContactName}</h3>
          <p><strong>Phone: </strong><span>{formatPhone(contact.Phone)}</span></p>
          <p><strong>Email: </strong><span>{contact.Email}</span></p>
        </div>
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
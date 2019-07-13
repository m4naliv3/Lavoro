import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import {connect} from 'react-redux';
import MessageItem from './message';

class MessageList extends Component {
    renderList(items){ return items.map(m => { return( <MessageItem key={m.ID} Message={m} /> ) }) }

    render(){
      if(!this.props.Messages) return null;
      return (
          <div>
              {this.renderList(this.props.Messages)}
              <br />
              <br />
              <input type="text" className="MessagingInput" />
              <input 
                type="button" 
                className="Send Button" 
                value="Send" 
                onClick={_ => {
                  commsClient('OutgoingMessaging','POST', {Body: 'Hi Mike', To: this.props.ContactPhone, From: this.props.AccountPhone})
                }}/>
          </div>
      )
    }
}

function mapStateToProps (state){ 
  return { 
    Messages: state.Messages,
    ContactPhone: state.ContactPhone,
    AccountPhone: state.AccountPhone,
    ConversationID: state.ConversationID
  } 
}

export default connect (mapStateToProps)(MessageList);
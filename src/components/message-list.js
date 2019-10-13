import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import {connect} from 'react-redux';
import MessageItem from './message';
import { bindActionCreators } from 'redux';
import { SetOutboundMessage } from '../actions';

class MessageList extends Component {
    renderList(items){ return items.map(m => { console.log(m);return( <MessageItem key={m.ID} Message={m} /> ) }) }

    sendMessage(){
      commsClient('OutgoingMessaging','POST', {
          MessageText: this.props.OutboundMessage, 
          Author: this.props.AccountPhone, 
          ConversationID: this.props.ConversationID
        },
        true
      ).then(this.props.SetOutboundMessage(null));
    }

    render(){
      // eventually create & add a "No Messages" image
      if(!this.props.Messages) {
        return (
          <div className="no-messages">
            <div className="caption">
              <h1>No Messages To Show Here</h1>
              <p>Select a Contact on the left to start communicating!</p>
            </div>
          </div>
        );
      }
      else return (
        <div className="messages">
          <div className="ui-scroll"> 
            <div>
              {this.renderList(this.props.Messages)}
            </div>
          </div>
          <div className="message-input">
            <textarea 
              rows={6} 
              onChange={e => {
                if (e.keyCode === 13) {
                  this.sendMessage()
                }
                this.props.SetOutboundMessage(e.target.value)}
              }
              value={this.props.OutboundMessage ? this.props.OutboundMessage : ''}
            />
            <button 
              className="btn btn-primary send"
              onClick={_ => this.sendMessage()}
            >
              Send
            </button>                
          </div>
        </div>
      )
    }
}

function mapStateToProps (state){ 
  return { 
    Messages: state.Messages,
    AccountPhone: state.AccountPhone,
    ConversationID: state.ConversationID,
    OutboundMessage: state.OutboundMessage
  } 
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetOutboundMessage: SetOutboundMessage
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(MessageList);
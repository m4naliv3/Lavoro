import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import {SetMessages} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageItem from './message';

class MessageList extends Component {
    renderList(list){ return list.map(m => { return( <MessageItem key={m.ID} Message={m} /> ) }) }

    render(){
      if(!this.props.Messages){
        commsClient('messages/1').then(r => { this.props.SetMessages(r) })
        return null;
      }
      return (
          <div>
              {this.renderList(this.props.Messages)}
              <br />
              <br />
              <input type="text" className="MessagingInput" />
              <input type="button" className="Send Button" value="Send" />
          </div>
      )
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

export default connect (mapStateToProps, mapDispatchToProps)(MessageList);
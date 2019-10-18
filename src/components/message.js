import React, {Component} from 'react';

export default class MessageItem extends Component {
  renderClassName(message) {
    if(message.direction) {
      return "message-item outgoing"
    }
    else return "message-item incoming"
  }

  render(){
    var message = this.props.Message;
    if(!message) return null;
    return (
      <div className={this.renderClassName(message)}>
        <div className="message-bubble">{message.MessageText}</div>
        <div className="message-meta">
          <span>{message.SentDate}</span>
          <span>{message.Author}</span>
        </div>
      </div>
    );
  }
}
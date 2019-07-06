import React, {Component} from 'react';

export default class Contact extends Component {
  render(){
    var contact = this.props.Contact;
    if(!contact) return null;
    return (
      <div className="Contact-Row">
        <img src={contact.Avatar} alt="Contact Person" height="5%" width="5%"/>
        <strong>{contact.ContactName}</strong>
        <br />
        <strong>Phone: </strong><span>{contact.Phone}</span>
        <strong>Email: </strong><span>{contact.Email}</span>
      </div>
    );
  }
}
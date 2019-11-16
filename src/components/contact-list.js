import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import {SetContacts} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Contact from './contact';

class ContactList extends Component {
  renderList(contacts){ return contacts.map(c => { return( <Contact key={c.ID} Contact={c} /> ) }) }

  render(){
    if(!this.props.Contacts){
      commsClient('Account/Contacts/2').then(r => { this.props.SetContacts(r) })
      return null;
    }
      console.log(this.props.Contacts)
      return (
          <div>
              {this.renderList(this.props.Contacts)}
          </div>
      )
    
  }
}

function mapStateToProps (state){ 
  return { 
    Contacts: state.Contacts,
    Account: state.Account
  } 
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetContacts: SetContacts
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(ContactList);
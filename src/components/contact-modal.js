import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { OpenContactModal } from '../actions';

class ContactModal extends Component {
  render(){
    if(this.props.ContactModal !== true) return null;
    return (
        <div className="ContactModal">
          <input placeholder='Contact Name' type='text' />
          <input placeholder='Title' type='text' />
          <input placeholder='Phone' type='text' />
          <input placeholder='Email' type='text' />
          <input placeholder='Avatar' type='text' />
          <input placeholder='Company' type='text' />
          <label>Favorite</label><input placeholder='Favorite' type='checkbox' />
          <input type='button' value='Save' onClick={_ => this.props.OpenContactModal(false)} />
        </div>
    );
  }
}

function mapStateToProps (state){ 
  return { 
    ContactModal: state.ContactModal 
  } 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      OpenContactModal: OpenContactModal
    }, dispatch);
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(ContactModal);
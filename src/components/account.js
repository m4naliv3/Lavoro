import React, {Component} from 'react';
import { commsClient } from '../comms_client';
import {SetAccount} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Account extends Component {
  render(){
    if(!this.props.Account){
      commsClient('account/1').then(r => { this.props.SetAccount(r) })
      return null;
    }
    return (
      <div className="MyUser">
          <img src={this.props.Account.Avatar} alt="agent info" width='5%' height='5%'/>
          <strong>{this.props.Account.UserName}</strong>
      </div>
    );
  }
}

function mapStateToProps (state){ 
  return { 
      Account: state.Account 
  } 
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    SetAccount: SetAccount
  }, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Account);
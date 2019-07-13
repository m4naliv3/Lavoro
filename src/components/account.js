import React, {Component} from 'react';
import {connect} from 'react-redux';

class Account extends Component {
  render(){
    if(!this.props.Account){
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

export default connect (mapStateToProps)(Account);
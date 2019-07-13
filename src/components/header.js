import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo.png';
import {connect} from 'react-redux';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo">
					<img src={logo} alt="Lavoro Chat" />
				</div>
				<div className="account-phone">
					<p><FontAwesomeIcon icon="mobile-alt" /> <strong>My Number:</strong> <span>{this.props.AccountPhone}</span></p>
				</div>
			</div>
		)
	}
}

function mapStateToProps (state){ 
  return { 
    AccountPhone: state.AccountPhone
  } 
}
export default connect (mapStateToProps)(Header);
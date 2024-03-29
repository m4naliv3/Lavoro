import React, {Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPhone } from '../functions/formatPhone';
import logo from '../images/logo.png';


class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo">
					<img src={logo} alt="Lavoro Chat" />
				</div>
				<div className="account-phone">
					<p><FontAwesomeIcon icon="mobile-alt" /> <strong>My Number:</strong> <span>{this.props.AccountPhone && formatPhone(this.props.AccountPhone)}</span></p>
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
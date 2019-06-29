import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.png';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="logo">
					<img src={logo} alt="Lavoro Chat" />
				</div>
				<div className="account-phone">
					<p><FontAwesomeIcon icon="mobile-alt" /> <strong>My Number:</strong> <span>631-908-3257</span></p>
				</div>
			</div>
		)
	}
}
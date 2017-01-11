import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render() {
		return (
			<footer>
				<p>®2017 <Link to='/'>vladimirandelena.com</Link> all rights reserved</p>
			</footer>
		);
	}
}

export default Footer;

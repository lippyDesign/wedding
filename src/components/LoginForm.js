import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {

    renderButton() {
        
    }

	render() {
		return (
			<form className="loginForm">
				<h3>Admin Sign In</h3>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="jack@smith.com"
                        value={this.props.loginEmail}
                        onChange={event => this.props.loginEmailChanged(event.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.props.loginPassword}
                        onChange={event => this.props.loginPasswordChanged(event.target.value)}
                    />
                </div>
                <button className="submitButton comingBtn">Login</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
    const { loginEmail, loginPassword } = state.login;

    return { loginEmail, loginPassword };
};

export default connect(mapStateToProps, actions)(LoginForm);

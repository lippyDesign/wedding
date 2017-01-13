import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class LoginForm extends Component {
    submitForm(event) {
        event.preventDefault();
        const { loginEmail, loginPassword } = this.props;
        this.props.loginUser({ loginEmail, loginPassword });
    }

	render() {
        const btn = this.props.spinner ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Login';
        
		return (
            <form className="loginForm" onSubmit={this.submitForm.bind(this)}>
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
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.props.loginPassword}
                        onChange={event => this.props.loginPasswordChanged(event.target.value)}
                    />
                </div>
                <p className="colorRed">{this.props.error}</p>
                <button className="submitButton comingBtn">{btn}</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
    const { loginEmail, loginPassword, error, spinner } = state.login;

    return { loginEmail, loginPassword, error, spinner };
};

export default connect(mapStateToProps, actions)(LoginForm);

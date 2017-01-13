import React, { Component } from 'react';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class Admin extends Component {

    renderAdminScreen() {
        const { currentUser } = firebase.auth();
        if (!currentUser) {
            return <LoginForm />;
        }
        return <Dashboard />;
    }

	render() {
		return (
			<div className="admin">
				{this.renderAdminScreen()}
			</div>
		);
	}
}

export default Admin;

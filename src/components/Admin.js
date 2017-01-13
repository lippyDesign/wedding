import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class Admin extends Component {

    renderAdminScreen() {
        const { user } = this.props;
        if (!user) {
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

const mapStateToProps = state => {
    const { user } = state.login;
    return { user };
};

export default connect(mapStateToProps, null)(Admin);

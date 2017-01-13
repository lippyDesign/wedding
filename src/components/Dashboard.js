import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
	componentDidMount() {
        this.props.guestsFetch();
    }

	getComingData() {
		return this.props.guests.map(({ first, last, email, phone, uid, vegetarian, comments }) => {
			return (
				<li key={uid}>
					<i className="fa fa-user" aria-hidden="true"></i> {`${first} ${last}`}<br />
					<i className="fa fa-envelope" aria-hidden="true"></i> {email}<br />
					<i className="fa fa-phone" aria-hidden="true"></i> {phone}<br />
					<i className="fa fa-cutlery" aria-hidden="true"></i> {vegetarian ? 'vegetarian' : 'not vegetarian'}<br />
					<i className="fa fa-comment" aria-hidden="true"></i> {comments}
				</li>
			);
		});
	}

	getNotComingData() {

	}

	renderDashboard() {
		if (!this.props.guests.length) {
			return <i className="fa fa-circle-o-notch fa-spin fa-5x"></i>;
		}
		return (
			<section>
				<h2>Dashboard</h2>
				<h3 className="colorGreen">Coming</h3>
				<ol className="guestList">
					{this.getComingData()}
				</ol>
				<h3 className="colorRed">Not Coming</h3>
				<ol className="guestList">
					{this.getNotComingData()}
				</ol>
			</section>
		);
	}

	render() {
		return (
			<div className="dashboard">
				{this.renderDashboard()}
			</div>
		);
	}
}

const mapStateToProps = state => {
    const guests = _.map(state.guests, (val, uid) => {
        return _.extend({}, val, { uid });
    });

    return { guests };
};

export default connect(mapStateToProps, actions)(Dashboard);

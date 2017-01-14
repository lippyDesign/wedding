import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
	componentDidMount() {
        this.props.guestsFetch();
		this.props.fetchNotComing();
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
		return this.props.notComing.map(({ firstNot, lastNot, emailNot, commentsNot, uid }) => {
			return (
				<li key={uid}>
					<i className="fa fa-user" aria-hidden="true"></i> {`${firstNot} ${lastNot}`}<br />
					<i className="fa fa-envelope" aria-hidden="true"></i> {emailNot}<br />
					<i className="fa fa-comment" aria-hidden="true"></i> {commentsNot}
				</li>
			);
		});
	}

	renderDashboard() {
		switch (this.props.dashboardToShow) {
			case 'showComing':
				return (
					<section>
						<h3 className="colorGreen">Coming</h3>
						<ol className="guestList">
							{this.getComingData()}
						</ol>
					</section>
				);
			case 'showNotComing':
				return (
					<section>
						<h3 className="colorRed">Not Coming</h3>
						<ol className="guestList">
							{this.getNotComingData()}
						</ol>
					</section>
				);
			default:
				return (
					<section>
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
	}

	renderButtons() {
		switch (this.props.dashboardToShow) {
			case 'showComing':
				return (
					<span>
						<button
							className="buttonLink greenBtn activeBtn"
							onClick={() => this.props.showComing()}
						>Coming {this.props.guests.length}</button>
						<button
							className="buttonLink redBtn"
							onClick={() => this.props.showNotComing()}
						>Not Coming {this.props.notComing.length}</button>
						<button
							className="buttonLink orangeBtn"
							onClick={() => this.props.showBoth()}
						>All {this.props.guests.length + this.props.notComing.length}</button>
					</span>
				);
			case 'showNotComing':
				return (
					<span>
						<button
							className="buttonLink greenBtn"
							onClick={() => this.props.showComing()}
						>Coming {this.props.guests.length}</button>
						<button
							className="buttonLink redBtn activeBtn"
							onClick={() => this.props.showNotComing()}
						>Not Coming {this.props.notComing.length}</button>
						<button
							className="buttonLink orangeBtn"
							onClick={() => this.props.showBoth()}
						>All {this.props.guests.length + this.props.notComing.length}</button>
					</span>
				);
			default:
				return (
					<span>
						<button
							className="buttonLink greenBtn"
							onClick={() => this.props.showComing()}
						>Coming {this.props.guests.length}</button>
						<button
							className="buttonLink redBtn"
							onClick={() => this.props.showNotComing()}
						>Not Coming {this.props.notComing.length}</button>
						<button
							className="buttonLink orangeBtn activeBtn"
							onClick={() => this.props.showBoth()}
						>All {this.props.guests.length + this.props.notComing.length}</button>
					</span>
				); 
		}
	}

	render() {
		if (!this.props.guests.length) {
			return <i className="fa fa-circle-o-notch fa-spin fa-5x"></i>;
		}
		return (
			<div className="dashboard">
				<h2>Dashboard</h2>
				<p>
					Show guest who are:<br />
					{this.renderButtons()}
				</p>
				<hr />
				{this.renderDashboard()}
			</div>
		);
	}
}

const mapStateToProps = state => {
    const guests = _.map(state.guests, (val, uid) => {
        return _.extend({}, val, { uid });
    });
	const notComing = _.map(state.notComing, (val, uid) => {
        return _.extend({}, val, { uid });
    });
	const { dashboardToShow } = state.dashboard;

    return { guests, notComing, dashboardToShow };
};

export default connect(mapStateToProps, actions)(Dashboard);

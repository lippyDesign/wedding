import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ResponseForm from './ResponseForm';
import NoForm from './NoForm';

class Rsvp extends Component {

	renderForm() {
		switch (this.props.form) {
			case 'coming':
				return <ResponseForm />;
			case 'notComing':
				return <NoForm />;
			case 'comingSubmitted':
				return <p className="selectPar">Thank You! We'll see you at the wedding. We sent you a confirmation email with the details</p>;
			case 'notComingSubmitted':
				return <p className="selectPar">Sorry to hear that you are not coming. Please let us know if your response changes</p>;
			default:
				return <p className="selectPar">Please select yes or no</p>;
		}
	}

	render() {
		return (
			<div className='rsvp'>
				<section className="rsvpTop">
					<h2>RSVP</h2>
					<p>Please let us know if you are coming</p>
					<p>
						<button
							className="yesButton"
							onClick={this.props.showComingForm}
						>
							I will be there!
						</button>
						<button
							className="noButton"
							onClick={this.props.showNotComingForm}
						>
							I can't make it!
						</button>
					</p>
				</section>
				<section className="rsvpButtom">
					{this.renderForm()}
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { form } = state.rsvp;
	return { form };
};

export default connect(mapStateToProps, actions)(Rsvp);

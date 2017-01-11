import React, { Component } from 'react';
import ResponseForm from './ResponseForm';
import NoForm from './NoForm';

class Rsvp extends Component {
	constructor() {
		super();
		this.state = {
			formToShow: ''
		};
	}

	renderForm() {
		switch (this.state.formToShow) {
			case 'yes':
				return <ResponseForm />;
			case 'no':
				return <NoForm />;
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
							onClick={() => this.setState({ formToShow: 'yes' })}
						>
							I will be there!
						</button>
						<button
							className="noButton"
							onClick={() => this.setState({ formToShow: 'no' })}
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

export default Rsvp;

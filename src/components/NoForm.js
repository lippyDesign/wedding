import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/FirebaseActions';

class NoForm extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: '',
            email: '',
            comments: '',
            error: '',
            showSpinner: false
        };
    }

    submitForm(event) {
        event.preventDefault();
        const { first, last, email } = this.state;
        const check = [first, last, email].every(item => item);
        if (!check) {
            return this.setState({ error: 'name and contact info are required' });
        }
        this.setState({ error: '', showSpinner: true });
    }

	render() {
        const btnTitle = this.state.showSpinner ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Not Coming';
		return (
            <form onSubmit={this.submitForm.bind(this)}>
                <h3>Sorry to hear that!</h3>
                <div>
                    <label>Full name</label>
                    <input
                        type="text"
                        placeholder="First"
                        value={this.state.first}
                        onChange={event => this.setState({ first: event.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Last"
                        value={this.state.last}
                        onChange={event => this.setState({ last: event.target.value })}
                    />
                </div>
                <div>
                    <label>Contact Info</label>
                    <input
                        className="notComingEmailInput"
                        type="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                </div>
                <div>
                    <label>Reason</label>
                </div>
                <div>
                    <textarea
                        type="text"
                        placeholder="Please tell us why"
                        value={this.state.comments}
                        onChange={event => this.setState({ comments: event.target.value })}
                    ></textarea>
                </div>
                <p className="colorRed textCenter">{this.state.error}</p>
                <div className="rsvpAnswer">
                    <button className="submitButton notComingBtn">{btnTitle}</button>
                </div>
            </form>
		);
	}
}

export default connect(null, actions)(NoForm);

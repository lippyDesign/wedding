import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ResponseForm extends Component {

    submitForm(event) {
        event.preventDefault();
        const { first, last, email, phone, comments, vegetarian } = this.props;
        const check = [first.trim(), last.trim(), email.trim(), phone.trim()].every(item => item);
        if (!check) {
            return this.props.errorChanged('name and contact info are required');
        }
        this.props.spinnerChanged(true);
        this.props.errorChanged('');
        const date = moment().format('MM/DD/YYYY');
        this.props.createGuest({ first, last, email, phone, comments, vegetarian, date });
    }

	render() {
        const btnTitle = this.props.spinner ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Submit';
		return (
            <form onSubmit={this.submitForm.bind(this)}>
                <h3>Great!</h3>
                <div>
                    <label>Full name</label>
                    <input
                        type="text"
                        placeholder="First"
                        value={this.props.first}
                        onChange={event => this.props.rsvpFirstChanged(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last"
                        value={this.props.last}
                        onChange={event => this.props.rsvpLastChanged(event.target.value)}
                    />
                </div>
                <div>
                    <label>Contact Info</label>
                    <input
                        type="email"
                        placeholder="email"
                        value={this.props.email}
                        onChange={event => this.props.rsvpEmailChanged(event.target.value)}
                    />
                    <input
                        type="phone"
                        placeholder="phone number"
                        value={this.props.phone}
                        onChange={event => this.props.rsvpPhoneChanged(event.target.value)}
                    />
                </div>
                <div>
                    <label>Comments</label>
                </div>
                <div>
                    <textarea
                        type="text"
                        placeholder="Comments"
                        value={this.props.comments}
                        onChange={event => this.props.rsvpCommentsChanged(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={this.props.vegetarian}
                        onChange={() => this.props.rsvpVeggieChanged(!this.props.vegetarian)}
                    /> Vegetarian
                </div>
                <p className="colorRed textCenter">{this.props.error}</p>
                <div className="rsvpAnswer">
                    <button className="submitButton comingBtn">{btnTitle}</button>
                </div>
            </form>
		);
	}
}

const mapStateToProps = state => {
    const { first, last, email, phone, comments, vegetarian } = state.rsvp;
    const { spinner, error } = state.helper;

    return { first, last, email, phone, comments, vegetarian, spinner, error };
};

export default connect(mapStateToProps, actions)(ResponseForm);

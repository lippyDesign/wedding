import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    rsvpFirstChanged,
    rsvpLastChanged,
    rsvpEmailChanged,
    rsvpPhoneChanged,
    rsvpCommentsChanged,
    rsvpCheckboxChanged
} from '../actions/FormActions';

class ResponseForm extends Component {
    onFirstChange(text) {
        this.props.rsvpFirstChanged(text);
    }
	render() {
        console.log(this.props);
        const {
            rsvpFirstChanged,
            rsvpLastChanged,
            rsvpEmailChanged,
            rsvpPhoneChanged,
            rsvpCommentsChanged,
            rsvpCheckboxChanged,
            rsvpFirst,
            rsvpLast,
            rsvpEmail,
            rsvpPhone,
            rsvpComments,
            rsvpVegetarian
        } = this.props;

		return (
			<form>
                <h3>Great!</h3>
                <div>
                    <label>Full name</label>
                    <input
                        type="text"
                        placeholder="First"
                        value={rsvpFirst}
                        onChange={this.onFirstChange.bind(this)}
                    />
                    <input
                        type="text"
                        placeholder="Last"
                        value={rsvpLast}
                    />
                </div>
                <div>
                    <label>Contact Info</label>
                    <input type="email" placeholder="email" />
                    <input type="phone" placeholder="phone number" />
                </div>
                <div>
                    <label>Comments</label>
                </div>
                <div>
                    <textarea type="text" placeholder="Comments"></textarea>
                </div>
                <div>
                    <input type="checkbox" className="checkbox" /> Vegetarian
                </div>
                <hr />
                    <p className="plusOnePar">Is someone coming with you? <button className="submitButton plusOneBtn">+ 1</button></p>
                <hr />
                <div className="rsvpAnswer">
                    <button className="submitButton comingBtn">SEND</button>
                </div>
            </form>
		);
	}
}

const mapStateToProps = state => {
    const {
        rsvpFirst,
        rsvpLast,
        rsvpEmail,
        rsvpPhone,
        rsvpComments,
        rsvpVegetarian
    } = state.form;

    return { rsvpFirst, rsvpLast, rsvpEmail, rsvpPhone, rsvpComments, rsvpVegetarian };
};

export default connect(mapStateToProps, { 
    rsvpFirstChanged,
    rsvpLastChanged,
    rsvpEmailChanged,
    rsvpPhoneChanged,
    rsvpCommentsChanged,
    rsvpCheckboxChanged
})(ResponseForm);

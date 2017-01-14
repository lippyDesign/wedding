import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NoForm extends Component {
    submitForm(event) {
        event.preventDefault();
        const { firstNot, lastNot, emailNot, commentsNot } = this.props;
        const check = [firstNot, lastNot, emailNot].every(item => item);
        if (!check) {
            return this.props.errorChanged('full name and email are required');
        }
        this.props.createNotComing({ firstNot, lastNot, emailNot, commentsNot });
    }

	render() {
        const btnTitle = this.props.spinner ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Not Cominng';
		return (
            <form onSubmit={this.submitForm.bind(this)}>
                <h3>Sorry to hear that!</h3>
                <div>
                    <label>Full name</label>
                    <input
                        type="text"
                        placeholder="First"
                        value={this.props.firstNot}
                        onChange={event => this.props.notComingFirstChanged(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Last"
                        value={this.props.lastNot}
                        onChange={event => this.props.notComingLastChanged(event.target.value)}
                    />
                </div>
                <div>
                    <label>Contact Info</label>
                    <input
                        className="notComingEmailInput"
                        type="email"
                        placeholder="email"
                        value={this.props.emailNot}
                        onChange={event => this.props.notComingEmailChanged(event.target.value)}
                    />
                </div>
                <div>
                    <label>Reason</label>
                </div>
                <div>
                    <textarea
                        type="text"
                        placeholder="Please tell us why"
                        value={this.props.commentsNot}
                        onChange={event => this.props.notComingCommentsChanged(event.target.value)}
                    ></textarea>
                </div>
                <p className="colorRed textCenter">{this.props.error}</p>
                <div className="rsvpAnswer">
                    <button className="submitButton notComingBtn">{btnTitle}</button>
                </div>
            </form>
		);
	}
}

const mapStateToProps = state => {
    const { firstNot, lastNot, emailNot, commentsNot } = state.rsvp;
    const { spinner, error } = state.helper;

    return { firstNot, lastNot, emailNot, commentsNot, error, spinner };
};

export default connect(mapStateToProps, actions)(NoForm);

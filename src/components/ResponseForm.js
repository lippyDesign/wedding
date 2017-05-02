import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ResponseForm extends Component {
    componentDidMount() {
        this.props.guestsFetch();
    }

    submitForm(event) {
        event.preventDefault();
        const { first, last, email, phone, comments, vegetarian, hotel, dates } = this.props;
        const check = [first.trim(), last.trim(), email.trim(), phone.trim()].every(item => item);
        if (!check) {
            return this.props.errorChanged('name and contact info are required');
        }
        this.props.spinnerChanged(true);
        this.props.errorChanged('');
        const date = moment().format('MM/DD/YYYY');
        this.props.createGuest({ first, last, email, phone, comments, vegetarian, date, hotel, dates });
    }

    renderHotels() {
        console.log(this.props.hotels);
        if (!this.props.hotels.length) return (<div />);
        return (
            <table>
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th># of Guests</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.hotels.map(({ name, val }) => <tr key={name}><td>{name}</td><td>{val}</td></tr>)}
                </tbody>
            </table>
        );
    }

	render() {
        const btnTitle = this.props.spinner ? <i className="fa fa-circle-o-notch fa-spin"></i> : 'Submit';
		return (
            <div>
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
                        <label>Staying At</label>
                        <div className='noticeWrapper'>
                            <p>NOTICE:</p>
                            <p>If you are a part of the bridal party, you are staying at the villa from 25 Oct 17 to 30 Oct 17. Else, please provide the name of the Hotel where you are staying and the dates you will be staying there</p>
                            <p>Keep in mind that the wedding is on 28th of October</p>
                        </div>
                        <input
                            placeholder="Hotel Name"
                            value={this.props.hotel}
                            onChange={event => this.props.rsvpHotelChanged(event.target.value)}
                        />
                        <input
                            placeholder="Date range (ex. Oct 25th - Oct 30th)"
                            value={this.props.dates}
                            onChange={event => this.props.rsvpDatesChanged(event.target.value)}
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
                {this.renderHotels()}
            </div>
		);
	}
}

const mapStateToProps = state => {
    const { first, last, email, phone, comments, vegetarian, hotel, dates } = state.rsvp;
    const { spinner, error } = state.helper;
    const h = _.map(state.guests, (val) => {
        if (val.hotel) {
            return val.hotel;
        }
    });
    const hots = h.reduce((prev, curr) => {
        if (curr) {
            if (prev[curr]) {
                prev[curr] += 1;
            } else {
                prev[curr] = 1;
            }
        }
        return prev;
    }, {});
    const hotels = _.map(hots, (val, name) => {
        return _.extend({}, { name, val });
    });
    return { first, last, email, phone, comments, vegetarian, hotel, dates, spinner, error, hotels };
};

export default connect(mapStateToProps, actions)(ResponseForm);

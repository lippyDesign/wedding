import React, { Component } from 'react';
import moment from 'moment';

class Countdown extends Component {
    constructor() {
        super();

        this.state = {
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };

        this.timer = this.timer.bind(this);
    }
    componentDidMount() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timer() {
        const eventTime = moment([2017, 7, 15]).valueOf() - 21600000;
        const currentTime = moment().valueOf();
        const ms = eventTime - currentTime;
        let x = ms / 1000;
        const seconds = Math.floor(x % 60);
        x /= 60;
        const minutes = Math.floor(x % 60);
        x /= 60;
        const hours = Math.floor(x % 24);
        x /= 24;
        const days = Math.floor(x);
        this.setState({ days, hours, minutes, seconds });
    }

	render() {
        const { days, hours, minutes, seconds } = this.state;
		return (
			<section className="countdown">
                <h2>{days} DAYS AND <span className="colorRed">{String("0" + hours).slice(-2)}:{String("0" + minutes).slice(-2)}:{String("0" + seconds).slice(-2)}</span></h2>
                <h3>UNTIL THE WEDDING</h3>
			</section>
		);
	}
}

export default Countdown;

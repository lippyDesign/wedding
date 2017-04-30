import React, { Component } from 'react';

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
    componentWillMount() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timer() {
        const eventTime = new Date('Oct 28, 2017 17:00:00').getTime();
        const currentTime = new Date().getTime();
        const distance = eventTime - currentTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
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

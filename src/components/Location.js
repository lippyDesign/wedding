import React, { Component } from 'react';
import Countdown from './Countdown';

class Location extends Component {
	render() {
		return (
			<div className='location'>
				<h2>THE TIME AND PLACE</h2>
				<section className="address">
					<h3 className="headingSub">LOCATION</h3>
					<p>The ceremony will be located at </p>
				</section>
				<section className="dateAndTime">
					<h3 className="headingSub">DATE AND TIME</h3>
					<p>The event will begin on 15th of July, 2017 at 5:00pm local time.</p>
					<Countdown />
				</section>
				<section className="nearby">
					<h3 className="headingSub">NEARBY</h3>
					<h4>Hotels:</h4>
					<ul>
						<li>Hotel</li>
						<li>Hotel</li>
						<li>Hotel</li>
						<li>Hotel</li>
						<li>Hotel</li>
					</ul>
					<h4 className="barsHeading">Bars & Restaurants:</h4>
					<ul>
						<li>Bar</li>
						<li>Bar</li>
						<li>Bar</li>
						<li>Bar</li>
						<li>Bar</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default Location;

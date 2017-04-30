import React, { Component } from 'react';
import Countdown from './Countdown';

class Location extends Component {
	render() {
		return (
			<div className='location'>
				<h2>THE TIME AND PLACE</h2>
				<section className="address">
					<h3 className="headingSub">LOCATION</h3>
					<p>The ceremony will be located at <a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d1081689-Reviews-Casa_Yvonneka-Puerto_Vallarta.html'>Casa Yvonneka, Puerto Vallarta Mexico</a></p>
				</section>
				<section className="dateAndTime">
					<h3 className="headingSub">DATE AND TIME</h3>
					<p>The event will begin on 28th of October, 2017 at 5:00pm local time.</p>
					<Countdown />
				</section>
				<section className="nearby">
					<h3 className="headingSub">NEARBY</h3>
					<h4 className='boldText'>Hotels:</h4>
					<ul>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d152378-Reviews-Tropicana_Hotel-Puerto_Vallarta.html'>Hotel Tropicana</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d225452-Reviews-Vallarta_Shores-Puerto_Vallarta.html'>Vallarta Shores</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d481596-Reviews-Hyatt_Ziva_Puerto_Vallarta-Puerto_Vallarta.html'>Hyatt Ziva Puerto Vallarta</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d254471-Reviews-Villa_Premiere_Boutique_Hotel_Romantic_Getaway-Puerto_Vallarta.html'>Villa Premiere Boutique Hotel & Romantic Getaway</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Hotel_Review-g150793-d154751-Reviews-Sheraton_Buganvilias_Resort_Convention_Center-Puerto_Vallarta.html'>Sheraton Buganvilias Resort and Convention Center</a></li>
					</ul>
					<h4 className="barsHeading boldText">Bars & Restaurants:</h4>
					<ul>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g150793-d2467613-Reviews-Salud_Super_Food-Puerto_Vallarta.html'>Salud Super Food</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g150793-d1312571-Reviews-Vista_Grill-Puerto_Vallarta.html'>Vista Grill on the Beach</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g150793-d951075-Reviews-La_Palapa-Puerto_Vallarta.html'>La Palapa Restaurant</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g150793-d1167863-Reviews-Cafe_de_Olla-Puerto_Vallarta.html'>Café de Olla</a></li>
						<li><a className="linkBlue" target='_blank' href='https://www.tripadvisor.com/Restaurant_Review-g6840323-d1606614-Reviews-The_Swedes_Bar_Bistro-Emiliano_Zapata.html'>Restaurant The Swedes</a></li>
					</ul>
					<h4 className="barsHeading boldText">Beaches:</h4>
					<ul>
						<li>Playa Los Muertos</li>
						<li>Playa Camarones</li>
						<li>Playa Conchas Chinas</li>
						<li>Flamingos Beach</li>
						<li>Playa Las Gemelas</li>
						<li>Playa Mismaloya</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default Location;

import React, { Component } from 'react';
import kissBeach from '../assets/kiss-beach.jpg';
import Countdown from './Countdown';

class Main extends Component {
	render() {
		return (
			<main>
				<img className="img-kissBeach" src={kissBeach} alt="kiss at the beach" />
				<div className="mainHeading">
					<h1>BUNNY <span className="colorRed andSep">&</span> MEDVEZHONOK</h1>
					<h2>ARE GETTING MARRIED</h2>
					<h3>OCTOBER 28th, 2017</h3>
					<h3><i className="fa fa-heart-o fa-2x colorRed" aria-hidden="true"></i></h3>
				</div>
				<Countdown />
			</main>
		);
	}
}

export default Main;

import React, { Component } from 'react';
import Photos from './Photos';

class Story extends Component {
	render() {
		return (
			<div className="story">
				<h2>OUR STORY</h2>
				<Photos />
				<section className="quote">
					<div>
						<p>"I swear I couldn't love you more than I do right now, and yet I know I will tomorrow."</p>
						<em>— Leo Christopher</em>
					</div>
					
				</section>
			</div>
		);
	}
}

export default Story;

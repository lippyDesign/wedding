import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = ({ children }) => {
	return (
		<div className="site">
			<div className="content">
				<Header />
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Home;

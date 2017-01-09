import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';

const componentRoutes = {
	component: Home,
	path: '/',
	indexRoute: { component: Main },
	childRoutes: [
		// {
		// 	path: 'artists/new',
		// 	getComponent(location, cb) {
		// 		System.import('./components/artists/ArtistCreate')
		// 			.then(module => cb(null, module.default));
		// 	}
		// },
		// {
		// 	path: 'artists/:id',
		// 	getComponent(location, cb) {
		// 		System.import('./components/artists/ArtistDetail')
		// 			.then(module => cb(null, module.default));
		// 	}
		// },
		// {
		// 	path: 'artists/:id/edit',
		// 	getComponent(location, cb) {
		// 		System.import('./components/artists/ArtistEdit')
		// 			.then(module => cb(null, module.default));
		// 	}
		// }
	]
};

const Routes = () => <Router history={hashHistory} routes={componentRoutes} />;

export default Routes;

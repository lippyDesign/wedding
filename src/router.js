import React from 'react';
import { Router, hashHistory } from 'react-router';

import Home from './components/Home';
import Main from './components/Main';

const componentRoutes = {
	component: Home,
	path: '/',
	indexRoute: { component: Main },
	childRoutes: [
		{
			path: '/story',
			getComponent(location, cb) {
				System.import('./components/Story')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: '/festivities',
			getComponent(location, cb) {
				System.import('./components/Festivities')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: '/location',
			getComponent(location, cb) {
				System.import('./components/Location')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: '/rsvp',
			getComponent(location, cb) {
				System.import('./components/Rsvp')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: '/registry',
			getComponent(location, cb) {
				System.import('./components/Registry')
					.then(module => cb(null, module.default));
			}
		},
		{
			path: '/admin',
			getComponent(location, cb) {
				System.import('./components/Admin')
					.then(module => cb(null, module.default));
			}
		}
	]
};

const Routes = () => <Router history={hashHistory} routes={componentRoutes} />;

export default Routes;

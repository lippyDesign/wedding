import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            homeActive: '',
            storyActive: '',
            locationActive: '',
            festivitiesActive: '',
            registryActive: '',
            rsvpActive: '',
            smallNaviOpened: false
        };
    }

    componentDidMount() {
        const arr = document.URL.split('/');

        this.changeActive(arr[arr.length - 1]);
    }

    changeActive(menuItem) {
        switch (menuItem) {
            case '':
                this.setState({
                    homeActive: 'active',
                    storyActive: '',
                    locationActive: '',
                    festivitiesActive: '',
                    registryActive: '',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
                break;
            case 'story':
                this.setState({
                    homeActive: '',
                    storyActive: 'active',
                    locationActive: '',
                    festivitiesActive: '',
                    registryActive: '',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
                break;
            case 'location':
                this.setState({
                    homeActive: '',
                    storyActive: '',
                    locationActive: 'active',
                    festivitiesActive: '',
                    registryActive: '',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
                break;
            case 'festivities':
                this.setState({
                    homeActive: '',
                    storyActive: '',
                    locationActive: '',
                    festivitiesActive: 'active',
                    registryActive: '',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
                break;
            case 'registry':
                this.setState({
                    homeActive: '',
                    storyActive: '',
                    locationActive: '',
                    festivitiesActive: '',
                    registryActive: 'active',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
                break;
            case 'rsvp':
                this.setState({
                    homeActive: '',
                    storyActive: '',
                    locationActive: '',
                    festivitiesActive: '',
                    registryActive: '',
                    rsvpActive: 'active',
                    smallNaviOpened: false
                });
                break;
            default:
                this.setState({
                    homeActive: '',
                    storyActive: '',
                    locationActive: '',
                    festivitiesActive: '',
                    registryActive: '',
                    rsvpActive: '',
                    smallNaviOpened: false
                });
        }
    }

	render() {
        const navClass = this.state.smallNaviOpened ? 'naviLinkHolder displayFlex' : 'naviLinkHolder';
        const buttonTitle = this.state.smallNaviOpened ? 'fa fa-times' : 'fa fa-bars';
		return (
			<nav>
				<ul className="navigationList">
                    <li className='naviButtonHolder'>
                        <button
                            className='naviButton'
                            onClick={() => this.setState({ smallNaviOpened: !this.state.smallNaviOpened })}
                        >
                            <i className={buttonTitle} aria-hidden="true" />
                        </button>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.homeActive}
                            onClick={this.changeActive.bind(this, '')}
                            to='/'
                        >HOME</Link>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.storyActive}
                            onClick={this.changeActive.bind(this, 'story')}
                            to='/story'
                        >OUR STORY</Link>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.locationActive}
                            onClick={this.changeActive.bind(this, 'location')}
                            to='/location'
                        >WHEN & WHERE</Link>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.festivitiesActive}
                            onClick={this.changeActive.bind(this, 'festivities')}
                            to='/festivities'
                        >FESTIVITIES</Link>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.registryActive}
                            onClick={this.changeActive.bind(this, 'registry')}
                            to='/registry'
                        >REGISTRY</Link>
                    </li>
                    <li className={navClass}>
                        <Link
                            className={this.state.rsvpActive}
                            onClick={this.changeActive.bind(this, 'rsvp')}
                            to='/rsvp'
                        >RSVP</Link>
                    </li>
                </ul>
			</nav>
		);
	}
}

export default Navigation;

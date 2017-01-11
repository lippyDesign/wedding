import React, { Component } from 'react';

class NoForm extends Component {
	render() {
		return (
			<form>
                <h3>Sorry to hear that!</h3>
                <label>First name</label>
                <input type="text" placeholder="Jack" />
                <label>Last name</label>
                <input type="text" placeholder="Smith" />
                <label>Email</label>
                <input type="email" placeholder="jack@smith.com" />
                <label>Reason you can't make it</label>
                <input type="text" placeholder="please tell us why" />
                <div className="rsvpAnswer">
                    <button className="submitButton notComingBtn">Not Coming</button>
                </div>
            </form>
		);
	}
}

export default NoForm;

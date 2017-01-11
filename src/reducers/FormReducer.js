import _ from 'lodash';
import {
    RSVP_FIRST_CHANGED,
    RSVP_LAST_CHANGED,
    RSVP_EMAIL_CHANGED,
    RSVP_PHONE_CHANGED,
    RSVP_COMMENTS_CHANGED,
    RSVP_CHECKBOX_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    rsvpFirst: '',
    rsvpLast: '',
    rsvpEmail: '',
    rsvpPhone: '',
    rsvpComments: '',
    rsvpVegetarian: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RSVP_FIRST_CHANGED:
            console.log(action.payload)
            return _.extend({}, state, { rsvpFirst: action.payload });
        case RSVP_LAST_CHANGED:
            return _.extend({}, state, { rsvpLast: action.payload });
        case RSVP_EMAIL_CHANGED:
            return _.extend({}, state, { rsvpEmail: action.payload });
        case RSVP_PHONE_CHANGED:
            return _.extend({}, state, { rsvpPhone: action.payload });
        case RSVP_COMMENTS_CHANGED:
            return _.extend({}, state, { rsvpComments: action.payload });
        case RSVP_CHECKBOX_CHANGED:
            return _.extend({}, state, { rsvpVegetarian: action.payload });
        default:
            return state;
    }
};

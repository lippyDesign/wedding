import _ from 'lodash';
import {
    RSVP_FIRST_UPDATE,
    RSVP_LAST_UPDATE,
    RSVP_EMAIL_UPDATE,
    RSVP_PHONE_UPDATE,
    RSVP_COMMENTS_UPDATE,
    RSVP_VEGGIE_UPDATE,
    SHOW_COMING_FORM,
    SHOW_NOT_COMING_FORM,
    COMING_SUBMITTED
} from '../actions/types';

const INITIAL_STATE = {
    first: '',
    last: '',
    email: '',
    phone: '',
    comments: '',
    vegetarian: false,
    error: '',
    form: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RSVP_FIRST_UPDATE:
            return _.extend({}, state, { first: action.payload });
        case RSVP_LAST_UPDATE:
            return _.extend({}, state, { last: action.payload });
        case RSVP_EMAIL_UPDATE:
            return _.extend({}, state, { email: action.payload });
        case RSVP_PHONE_UPDATE:
            return _.extend({}, state, { phone: action.payload });
        case RSVP_COMMENTS_UPDATE:
            return _.extend({}, state, { comments: action.payload });
        case RSVP_VEGGIE_UPDATE:
            return _.extend({}, state, { vegetarian: action.payload });
        case SHOW_COMING_FORM:
            return _.extend({}, INITIAL_STATE, { form: 'coming' });
        case SHOW_NOT_COMING_FORM:
            return _.extend({}, INITIAL_STATE, { form: 'notComing' });
        case COMING_SUBMITTED:
            return _.extend({}, INITIAL_STATE, { form: 'comingSubmitted' });
        default:
            return state;
    }
};

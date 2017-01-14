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
    COMING_SUBMITTED,
    NOT_COMMENTS_UPDATE,
    NOT_EMAIL_UPDATE,
    NOT_LAST_UPDATE,
    NOT_FIRST_UPDATE,
    NOT_COMING_SUBMITTED
} from '../actions/types';

const INITIAL_STATE = {
    first: '',
    last: '',
    email: '',
    phone: '',
    comments: '',
    vegetarian: false,
    error: '',
    form: '',
    firstNot: '',
    lastNot: '',
    emailNot: '',
    commentsNot: ''
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
        case NOT_FIRST_UPDATE:
            return _.extend({}, state, { firstNot: action.payload });
        case NOT_LAST_UPDATE:
            return _.extend({}, state, { lastNot: action.payload });
        case NOT_EMAIL_UPDATE:
            return _.extend({}, state, { emailNot: action.payload });
        case NOT_COMMENTS_UPDATE:
            return _.extend({}, state, { commentsNot: action.payload });
        case NOT_COMING_SUBMITTED:
            return _.extend({}, INITIAL_STATE, { form: 'notComingSubmitted' });
        default:
            return state; 
    }
};

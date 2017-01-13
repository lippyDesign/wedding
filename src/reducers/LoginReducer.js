import _ from 'lodash';
import {
    LOGIN_EMAIL_UPDATE,
    LOGIN_PASSWORD_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    loginEmail: '',
    loginPassword: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_UPDATE:
            return _.extend({}, state, { loginEmail: action.payload });
        case LOGIN_PASSWORD_UPDATE:
            return _.extend({}, state, { loginPassword: action.payload });
        default:
            return state;
    }
};
import _ from 'lodash';
import {
    LOGIN_EMAIL_UPDATE,
    LOGIN_PASSWORD_UPDATE,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    loginEmail: '',
    loginPassword: '',
    spinner: false,
    error: '',
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_EMAIL_UPDATE:
            return _.extend({}, state, { loginEmail: action.payload });
        case LOGIN_PASSWORD_UPDATE:
            return _.extend({}, state, { loginPassword: action.payload });
        case LOGIN_USER:
            return _.extend({}, state, { spinner: true, error: '' });
        case LOGIN_USER_FAIL:
            return _.extend({}, state, { loginPassword: '', spinner: false, error: 'Login Failed' });
        case LOGIN_USER_SUCCESS:
            return _.extend({}, INITIAL_STATE, { user: action.payload });
        default:
            return state;
    }
};

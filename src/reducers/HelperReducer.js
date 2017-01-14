import _ from 'lodash';
import {
    SPINNER_UPDATE,
    ERROR_UPDATE,
    COMING_SUBMITTED,
    NOT_COMING_SUBMITTED
} from '../actions/types';

const INITIAL_STATE = {
    error: '',
    spinner: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SPINNER_UPDATE:
            return _.extend({}, state, { spinner: action.payload });
        case ERROR_UPDATE:
            return _.extend({}, state, { error: action.payload });
        case COMING_SUBMITTED:
            return _.extend({}, state, { error: '', spinner: false });
        case NOT_COMING_SUBMITTED:
            return _.extend({}, state, { error: '', spinner: false });
        default:
            return state;
    }
};

import _ from 'lodash';
import {
    TIME
} from '../actions/types';

const INITIAL_STATE = {
    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TIME:
            return _.extend({}, state, { time: action.payload });
        default:
            return state;
    }
};

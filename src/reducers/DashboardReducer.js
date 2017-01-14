import _ from 'lodash';
import {
    SHOW_COMING_GUESTS,
    SHOW_NOT_COMING_GUESTS,
    SHOW_BOTH_GUESTS
} from '../actions/types';

const INITIAL_STATE = {
    dashboardToShow: 'showComing'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_COMING_GUESTS:
            return _.extend({}, state, { dashboardToShow: 'showComing' });
        case SHOW_NOT_COMING_GUESTS:
            return _.extend({}, state, { dashboardToShow: 'showNotComing' });
        case SHOW_BOTH_GUESTS:
            return _.extend({}, state, { dashboardToShow: 'showBoth' });
        default:
            return state;
    }
};

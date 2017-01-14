import { combineReducers } from 'redux';
import HelperReducer from './HelperReducer';
import RsvpFormReducer from './RsvpFormReducer';
import LoginReducer from './LoginReducer';
import GuestsReducer from './GuestsReducer';
import NotComingReducer from './NotComingReducer';
import DashboardReducer from './DashboardReducer';

const rootReducer = combineReducers({
    helper: HelperReducer,
    rsvp: RsvpFormReducer,
    login: LoginReducer,
    guests: GuestsReducer,
    notComing: NotComingReducer,
    dashboard: DashboardReducer
});

export default rootReducer;

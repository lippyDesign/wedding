import { combineReducers } from 'redux';
import HelperReducer from './HelperReducer';
import RsvpFormReducer from './RsvpFormReducer';
import LoginReducer from './LoginReducer';
import GuestsReducer from './GuestsReducer';

const rootReducer = combineReducers({
    helper: HelperReducer,
    rsvp: RsvpFormReducer,
    login: LoginReducer,
    guests: GuestsReducer
});

export default rootReducer;

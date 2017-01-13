import { combineReducers } from 'redux';
import HelperReducer from './HelperReducer';
import RsvpFormReducer from './RsvpFormReducer';
import LoginReducer from './LoginReducer';

const rootReducer = combineReducers({
    helper: HelperReducer,
    rsvp: RsvpFormReducer,
    login: LoginReducer
});

export default rootReducer;

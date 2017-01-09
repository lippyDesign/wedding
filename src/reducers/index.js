import { combineReducers } from 'redux';
import HelperReducer from './HelperReducer';

const rootReducer = combineReducers({
    helper: HelperReducer
});

export default rootReducer;

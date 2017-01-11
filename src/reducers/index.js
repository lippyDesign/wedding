import { combineReducers } from 'redux';
import HelperReducer from './HelperReducer';
import FormReducer from './FormReducer';

const rootReducer = combineReducers({
    helper: HelperReducer,
    form: FormReducer
});

export default rootReducer;

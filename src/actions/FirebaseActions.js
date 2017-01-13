import firebase from 'firebase';
import axios from 'axios';
import {
    COMING_SUBMITTED,
    LOGIN_EMAIL_UPDATE,
    LOGIN_PASSWORD_UPDATE,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    GUESTS_FETCH_SUCCESS
} from './types';

export const guestsFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/users/N48vIGwpAXf0eArXwZV0iqxq3463/guests')
            .on('value', snapshot => {
                dispatch({ type: GUESTS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const createGuest = ({ first, last, email, phone, comments, vegetarian, date }) => {
    const sendComingEmail = () => {
        axios.post('/contactus', { first, last, email, phone, date, comments, vegetarian })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (dispatch) => {
        firebase.database().ref('/users/N48vIGwpAXf0eArXwZV0iqxq3463/guests')
            .push({ first, last, email, phone, comments, vegetarian })
            .then(() => {
                sendComingEmail();
            })
            .then(() => {
                dispatch({ type: COMING_SUBMITTED });
            })
            .catch((error) => console.log(error));
    };
};

// export const deletePost = (key) => {
//     return dispatch => Posts.child(key).remove();
// };

export const loginEmailChanged = (text) => (
    {
        type: LOGIN_EMAIL_UPDATE,
        payload: text
    }
);

export const loginPasswordChanged = (text) => (
    {
        type: LOGIN_PASSWORD_UPDATE,
        payload: text
    }
);

export const loginUser = ({ loginEmail, loginPassword }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => logoutUserSuccess(dispatch))
            .catch(error => console.log(error));
    };
};

const loginUserFail = (dispatch, error) => {
    console.log(error.code);
    console.log(error.message);
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const logoutUserSuccess = (dispatch) => {
    dispatch({ type: LOGOUT_USER_SUCCESS });
    Actions.auth({ type: 'reset' });
};
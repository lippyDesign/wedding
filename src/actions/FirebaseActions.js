import firebase from 'firebase';
import axios from 'axios';
import {
    FETCH_GUESTS,
    COMING_SUBMITTED,
    LOGIN_EMAIL_UPDATE,
    LOGIN_PASSWORD_UPDATE
} from './types';

//const database = firebase.database();

// export const fetchPosts = () => {
//     return dispatch => {
//         Posts.on('value', snapshot => {
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: snapshot.val()
//             });
//         });
//     };
// };

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
            .push({ first, last, email, phone, comments, vegetarian, coming: 'yes' })
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

import {
    RSVP_FIRST_CHANGED,
    RSVP_LAST_CHANGED,
    RSVP_EMAIL_CHANGED,
    RSVP_PHONE_CHANGED,
    RSVP_COMMENTS_CHANGED,
    RSVP_CHECKBOX_CHANGED
} from './types';

export const rsvpFirstChanged = (text) => {
    console.log(text)
    return {
        type: RSVP_FIRST_CHANGED,
        payload: text
    }
};
export const rsvpLastChanged = (text) => (
    {
        type: RSVP_LAST_CHANGED,
        payload: text
    }
);
export const rsvpEmailChanged = (text) => (
    {
        type: RSVP_EMAIL_CHANGED,
        payload: text
    }
);
export const rsvpPhoneChanged = (text) => (
    {
        type: RSVP_PHONE_CHANGED,
        payload: text
    }
);
export const rsvpCommentsChanged = (text) => (
    {
        type: RSVP_COMMENTS_CHANGED,
        payload: text
    }
);
export const rsvpCheckboxChanged = (bool) => (
    {
        type: RSVP_CHECKBOX_CHANGED,
        payload: bool
    }
);

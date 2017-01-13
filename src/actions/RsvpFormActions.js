import {
    RSVP_FIRST_UPDATE,
    RSVP_LAST_UPDATE,
    RSVP_EMAIL_UPDATE,
    RSVP_PHONE_UPDATE,
    RSVP_COMMENTS_UPDATE,
    RSVP_VEGGIE_UPDATE,
    SHOW_COMING_FORM,
    SHOW_NOT_COMING_FORM
} from './types';

export const rsvpFirstChanged = (text) => (
    {
        type: RSVP_FIRST_UPDATE,
        payload: text
    }
);

export const rsvpLastChanged = (text) => (
    {
        type: RSVP_LAST_UPDATE,
        payload: text
    }
);

export const rsvpEmailChanged = (text) => (
    {
        type: RSVP_EMAIL_UPDATE,
        payload: text
    }
);

export const rsvpPhoneChanged = (text) => (
    {
        type: RSVP_PHONE_UPDATE,
        payload: text
    }
);

export const rsvpCommentsChanged = (text) => (
    {
        type: RSVP_COMMENTS_UPDATE,
        payload: text
    }
);

export const rsvpVeggieChanged = (bool) => (
    {
        type: RSVP_VEGGIE_UPDATE,
        payload: bool
    }
);

export const showComingForm = () => (
    {
        type: SHOW_COMING_FORM
    }
);

export const showNotComingForm = () => (
    {
        type: SHOW_NOT_COMING_FORM
    }
);

import {
    RSVP_FIRST_UPDATE,
    RSVP_LAST_UPDATE,
    RSVP_EMAIL_UPDATE,
    RSVP_PHONE_UPDATE,
    RSVP_HOTEL_UPDATE,
    RSVP_DATES_UPDATE,
    RSVP_COMMENTS_UPDATE,
    RSVP_VEGGIE_UPDATE,
    SHOW_COMING_FORM,
    SHOW_NOT_COMING_FORM,
    NOT_COMMENTS_UPDATE,
    NOT_EMAIL_UPDATE,
    NOT_LAST_UPDATE,
    NOT_FIRST_UPDATE
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

export const rsvpHotelChanged = (text) => (
    {
        type: RSVP_HOTEL_UPDATE,
        payload: text
    }
);

export const rsvpDatesChanged = (text) => (
    {
        type: RSVP_DATES_UPDATE,
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

export const notComingFirstChanged = (text) => (
    {
        type: NOT_FIRST_UPDATE,
        payload: text
    }
);

export const notComingLastChanged = (text) => (
    {
        type: NOT_LAST_UPDATE,
        payload: text
    }
);

export const notComingEmailChanged = (text) => (
    {
        type: NOT_EMAIL_UPDATE,
        payload: text
    }
);

export const notComingCommentsChanged = (text) => (
    {
        type: NOT_COMMENTS_UPDATE,
        payload: text
    }
);

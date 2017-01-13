import {
    SPINNER_UPDATE,
    ERROR_UPDATE
} from './types';

export const spinnerChanged = (bool) => (
    {
        type: SPINNER_UPDATE,
        payload: bool
    }
);

export const errorChanged = (text) => (
    {
        type: ERROR_UPDATE,
        payload: text
    }
);

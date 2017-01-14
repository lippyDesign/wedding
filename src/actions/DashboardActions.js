import {
    SHOW_COMING_GUESTS,
    SHOW_NOT_COMING_GUESTS,
    SHOW_BOTH_GUESTS
} from './types';

export const showComing = () => (
    {
        type: SHOW_COMING_GUESTS
    }
);

export const showNotComing = () => (
    {
        type: SHOW_NOT_COMING_GUESTS
    }
);

export const showBoth = () => (
    {
        type: SHOW_BOTH_GUESTS
    }
);

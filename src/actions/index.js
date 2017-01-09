import TIME from './types'

export const time = (text) => (
    {
        type: TIME,
        payload: text
    }
);
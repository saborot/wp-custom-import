import { CHANGE_STAG_URL } from './constants';

export const setStagUrl = (text) => ({
   type: CHANGE_STAG_URL,
   payload: text
})
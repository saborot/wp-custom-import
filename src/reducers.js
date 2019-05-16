import { CHANGE_STAG_URL } from './constants';

const initialState = {
   stagUrl: '',
   livePagesFile : '',
   liveMediaFile : '',
   excludedPages: [],
   slugsToUpdate: []
}

export const setAssets = (state=initialState, action={}) =>  {

   switch(action.type) {
      case CHANGE_STAG_URL:
         return Object.assign({}, state, state.stagUrl, action.payload);
      default:
         return state;
   }
}
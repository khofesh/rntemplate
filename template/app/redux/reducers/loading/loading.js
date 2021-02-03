import {Types} from '../../types';

export const loadingReducer = (state, action) => {
  if (action.type === Types.loading) {
    return action.payload;
  } else {
    return typeof state === 'undefined' ? false : state;
  }
};

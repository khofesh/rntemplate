import {Types} from '../../types';

export const errorsReducer = (state, action) => {
  if (action.type === Types.error) {
    return action.payload;
  } else {
    return typeof state === 'undefined' ? null : state;
  }
};

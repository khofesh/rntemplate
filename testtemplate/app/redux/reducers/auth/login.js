import {Types} from '../../types';

export const loginReducer = (state, action) => {
  if (action.type === Types.login) {
    return action.payload;
  } else {
    return typeof state === 'undefined' ? true : state;
  }
};

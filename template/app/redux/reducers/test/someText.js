import {Types} from '../../types';

export const someTextReducer = (state = 'Initial Text', action) => {
  switch (action.type) {
    case Types.test:
      return action.payload;

    default:
      return state;
  }
};

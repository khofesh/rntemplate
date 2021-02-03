import {Types} from '../../types';

export const someTextAction = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: Types.test,
      payload: 'Tengo cien dolares',
    });
  };
};

import {Types} from '../../types';

export const errorAction = (errorMessage) => {
  return (dispatch) => {
    dispatch({
      type: Types.error,
      payload: errorMessage,
    });
  };
};

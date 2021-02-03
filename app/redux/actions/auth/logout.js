import {Types} from '../../types';

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({
      type: Types.error,
      payload: null,
    });
    dispatch({
      type: Types.login,
      payload: null,
    });
  };
};

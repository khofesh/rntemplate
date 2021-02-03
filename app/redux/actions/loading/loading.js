import {Types} from '../../types';

export const loadingAction = (boolean) => {
  return (dispatch) => {
    dispatch({
      type: Types.loading,
      payload: boolean,
    });
  };
};

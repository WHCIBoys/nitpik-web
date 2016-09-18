import * as C from '../constants';
import * as fetchr from '../utils/fetchr';

export const saveNitToDb = () => {
  return (dispatch) => {
    return fetchr.post('nits', {})
    .then((res) => {
      dispatch(
        { type: C.AUTH_ACTIONS.GET_USER_INFO_SUCCESS, payload: res }
      );
    })
    .catch((err) => {
      dispatch(
        { type: C.AUTH_ACTIONS.GET_USER_INFO_ERROR, payload: err }
      );
    });
  };
};

export const saveNitToState = ({ id, nitContent }) => {
  return {
    type: C.NIT_ACTIONS.SAVE_USER_NIT_STATE,
    payload: { id, nitContent },
  };
};

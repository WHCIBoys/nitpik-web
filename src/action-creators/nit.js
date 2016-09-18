import * as C from '../constants';
import * as fetchr from '../utils/fetchr';

export const saveNitToDb = () => {
  return (dispatch) => {
    return fetchr.post('api/nits', {})
    .then((res) => {
      dispatch(
        { type: C.NIT_ACTIONS.SAVE_USER_NIT_DB_SUCESS, payload: res }
      );
    })
    .catch((err) => {
      dispatch(
        { type: C.NIT_ACTIONS.SAVE_USER_NIT_DB_ERROR, payload: err }
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

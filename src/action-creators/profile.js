import * as C from '../constants';
import * as fetchr from '../utils/fetchr';

export function loadUserNits() {
  return (dispatch, getState) => {
    const userId = getState().session.getIn(['user', 'id'], 0);
    dispatch( { type: C.PROFILE_ACTIONS.LOAD_USER_NITS_PENDING });
    return fetchr.get(`api/nits?user_id=${userId}`)
      .then((res) => {
        dispatch(
          { type: C.PROFILE_ACTIONS.LOAD_USER_NITS_SUCCESS, payload: { nits: res } }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.PROFILE_ACTIONS.LOAD_USER_NITS_ERROR, payload: err }
        );
      });
  };
}

export function loadUserFriendships() {
  return (dispatch) => {
    dispatch( { type: C.PROFILE_ACTIONS.LOAD_USER_FRIENDSHIPS_PENDING });
    return fetchr.get('api/friendships')
      .then((res) => {
        dispatch(
          { type: C.PROFILE_ACTIONS.LOAD_USER_FRIENDSHIPS_SUCCESS, payload: { friendships: res } }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.PROFILE_ACTIONS.LOAD_USER_FRIENDSHIPS_ERROR, payload: err }
        );
      });
  };
}

import * as C from '../constants';
import * as fetchr from '../utils/fetchr';

export function loginUser(accessToken, jwtToken) {
  return {
    type: C.AUTH_ACTIONS.LOGIN_USER_SUCCESS,
    payload: {
      accessToken,
      token: jwtToken,
    },
  };
}

export function requestLogin() {
  return {
    type: C.AUTH_ACTIONS.LOGIN_USER_PENDING,
  };
}

export function logoutUser() {
  return {
    type: C.AUTH_ACTIONS.LOGOUT_USER,
  };
}

export const getUserInfo = () => {
  return (dispatch) => {
    dispatch( { type: C.AUTH_ACTIONS.GET_USER_INFO });
    return fetchr.get('api/users/me')
      .then((res) => {
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_SUCCESS, payload: {userProfile: res} }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_ERROR, payload: err }
        );
      });
  };
};

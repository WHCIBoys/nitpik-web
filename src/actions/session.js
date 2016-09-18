import * as C from '../constants';

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

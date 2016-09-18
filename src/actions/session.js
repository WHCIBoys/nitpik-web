import { login } from '../api/auth/';

import * as C from '../constants';

export function loginUser() {
  return (dispatch) => {
    return dispatch({
      types: [
        C.AUTH_ACTIONS.LOGIN_USER_PENDING,
        C.AUTH_ACTIONS.LOGIN_USER_SUCCESS,
        C.AUTH_ACTIONS.LOGIN_USER_ERROR,
      ],
      payload: {
        promise: login()
          .then((res) => {
            return res;
          }),
      },
    });
  };
}

export function logoutUser() {
  return {
    type: C.AUTH_ACTIONS.LOGOUT_USER,
  };
}

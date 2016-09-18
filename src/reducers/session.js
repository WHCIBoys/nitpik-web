import * as C from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  token: null,
  accessToken: null,
  user: {},
  hasError: false,
  isLoading: false,
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case C.AUTH_ACTIONS.LOGIN_USER_PENDING:
    return state.merge(fromJS({
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    }));

  case C.AUTH_ACTIONS.LOGIN_USER_SUCCESS:
    return state.merge(fromJS({
      token: action.payload.token,
      accessToken: action.payload.accessToken,
      hasError: false,
      isLoading: false,
    }));

  case C.AUTH_ACTIONS.GET_USER_INFO_SUCCESS:
    return state.merge(fromJS({
      user: action.payload.userProfile,
      hasError: false,
      isLoading: false,
    }));

  case C.AUTH_ACTIONS.GET_USER_INFO_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case C.AUTH_ACTIONS.LOGIN_USER_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case C.AUTH_ACTIONS.LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default sessionReducer;

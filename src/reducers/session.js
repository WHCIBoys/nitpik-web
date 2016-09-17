import * as C from '../constants';

import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
});

function sessionReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case C.LOGIN_USER_PENDING:
    return state.merge(fromJS({
      token: null,
      user: {},
      hasError: false,
      isLoading: true,
    }));

  case C.LOGIN_USER_SUCCESS:
    return state.merge(fromJS({
      token: action.payload.token,
      user: action.payload.profile,
      hasError: false,
      isLoading: false,
    }));

  case C.LOGIN_USER_ERROR:
    return state.merge(fromJS({
      hasError: true,
      isLoading: false,
    }));

  case C.LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default sessionReducer;

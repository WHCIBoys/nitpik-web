import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

export const LoadUserNits = ReduxActions.createAction(
  C.LOAD_USER_NITS.LOAD_USER_NITS_PENDING,
  ({ userId }) => ({ userId }),
);

export const SendNitsToState = ReduxActions.createAction(
  C.LOAD_USER_NITS.LOAD_USER_NITS_SUCCESS,
  ({ nits }) => ({ nits }),
);

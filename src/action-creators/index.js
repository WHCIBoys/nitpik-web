import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

export const LoadUserNits = ReduxActions.createAction(
  C.NIT_ACTIONS.LOAD_USER_NITS_PENDING,
  () => getNits()
);

export function getNits() {
  return (dispatch) => {
    return fetch('/nits')
      .then((res) => {
        dispatch(
          { type: C.NIT_ACTIONS.LOAD_USER_NITS_SUCCESS, payload: res }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.NIT_ACTIONS.LOAD_USER_NITS_ERROR, payload: err }
        );
      });
  };
}

export const SendNitsToState = ReduxActions.createAction(
  C.NIT_ACTIONS.LOAD_USER_NITS_SUCCESS,
  ({ nits }) => ({ payload: nits }),
);

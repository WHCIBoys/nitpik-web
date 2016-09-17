import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

export const LoadUserNits = ReduxActions.createAction(
  C.LOAD_USER_NITS.PENDING,
  ({ userId }) => (getNits(userId))
);

export function getNits(userId) {
  return (dispatch) => {
    return fetch(`/nits/${userId}`)
      .then((res) => {
        console.log(res);
        dispatch(
          { type: C.LOAD_USER_NITS.SUCCESS, payload: res }
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          { type: C.LOAD_USER_NITS.ERROR, payload: err }
        );
      });
  };
}

export const SendNitsToState = ReduxActions.createAction(
  C.LOAD_USER_NITS.SUCCESS,
  ({ nits }) => ({ payload: nits }),
);

import * as C from '../constants';

export const saveNitToDb = () => {
  return (dispatch) => {
    return fetch(`${C.FACEBOOK_GRAPH_URL}me?fields=id,name`)
      .then((res) => {
        console.log(res);
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_SUCCESS, payload: res }
        );
      })
      .catch((err) => {
        dispatch(
          { type: C.AUTH_ACTIONS.GET_USER_INFO_ERROR, payload: err }
        );
      });
  };
};

export const saveNitToState = ReduxActions.createAction(
  C.NIT_ACTIONS.SAVE_USER_NIT_STATE,
  ({ id, nitContent }) => ({ payload: {id, nitContent} }),
);

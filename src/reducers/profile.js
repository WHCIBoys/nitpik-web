import * as I from 'immutable';
import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

const INITIAL_STATE = I.fromJS({
  nits: [],
});

export default ReduxActions.handleActions({

  [C.LOAD_USER_NITS.SUCCESS]: (state, { payload }) => {
    const { nits } = payload;
    return state.set('nits', I.fromJS(nits));
  },

  [C.LOAD_USER_NITS.PENDING]: (state, { payload }) => {
    const { nits } = payload;
    return state.set('nits', I.fromJS(nits));
  },

}, INITIAL_STATE);

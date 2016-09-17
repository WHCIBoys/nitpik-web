import * as I from 'immutable';
import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

const INITIAL_STATE = I.fromJS({
  nits: [],
});

export default ReduxActions.handleActions({

  [C.NIT_ACTIONS.LOAD_USER_NITS_SUCCESS]: (state, { payload }) => {
    const { nits } = payload;
    return state.set('nits', I.fromJS(nits));
  },

}, INITIAL_STATE);

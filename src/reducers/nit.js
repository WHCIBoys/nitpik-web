import * as I from 'immutable';
import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

const INITIAL_STATE = I.fromJS({
  unSavedNits: {},
});

export default ReduxActions.handleActions({
  [C.NIT_ACTIONS.SAVE_USER_NIT_STATE]: (state, { payload }) => {
    const { id, nitContent } = payload;
    return state.update('unSavedNits', (unSavedNits) => {
      return unSavedNits.set(id, nitContent);
    });
  },
}, INITIAL_STATE);

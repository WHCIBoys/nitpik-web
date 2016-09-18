import * as I from 'immutable';
import * as C from '../constants';
import * as ReduxActions from 'redux-actions';

const INITIAL_STATE = I.fromJS({
  nits: [],
  friendships: [],
});

export default ReduxActions.handleActions({
  [C.PROFILE_ACTIONS.LOAD_USER_NITS_SUCCESS]: (state, { payload }) => {
    const { nits } = payload;
    return state.set('nits', I.fromJS(nits));
  },
  [C.PROFILE_ACTIONS.LOAD_USER_FRIENDSHIPS_SUCCESS]: (state, { payload }) => {
    const { friendships } = payload;
    return state.set('friendships', I.fromJS(friendships));
  },
}, INITIAL_STATE);

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import profile from './profile';

const rootReducer = combineReducers({
  session,
  profile,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { push } from 'react-router-redux';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import UserProfile from '../containers/user-profile';
import * as SessionActions from '../actions/session';
import a$ync from '../utils/a$ync';

const profileQuery = (nextState) => {
  const { params: { profileId } } = nextState;
  console.log(profileId);
  // Dispatch the actions here
};

export default (store) => (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="login/facebook" onEnter={() => a$ync(login)(store)}/>
    <Route onEnter={profileQuery} path="profile/:profileId" component={ UserProfile }/>
  </Route>
);

export function login(store) {
  const currentState = store.getState();
  const {
    routing: {
      locationBeforeTransitions: {
        query: {
          access_code: accessToken,
          jwt: jwtToken,
        },
      },
    },
  } = currentState;

  if (accessToken && jwtToken) {
    store.dispatch(SessionActions.loginUser(accessToken, jwtToken));
  }

  return store.dispatch(push('/'));
}

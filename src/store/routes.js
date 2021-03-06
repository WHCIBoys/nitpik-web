import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { push } from 'react-router-redux';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import UserProfile from '../containers/user-profile';
import * as SessionActions from '../actions/session';
import * as ProfileActionsCreator from '../action-creators/profile';
import a$ync from '../utils/a$ync';

export default (store) => (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="login/facebook" onEnter={() => a$ync(login)(store)}/>
    <Route path="profile/:profileId" component={ UserProfile }/>
  </Route>
);

export function login(store) {
  const currentState = store.getState();
  const {
    routing: {
      locationBeforeTransitions: {
        query: {
          access_token: accessToken,
          jwt: jwtToken,
        },
      },
    },
  } = currentState;

  if (accessToken && jwtToken) {
    store.dispatch(SessionActions.loginUser(accessToken, jwtToken));
    store.dispatch(SessionActions.getUserInfo());
    store.dispatch(ProfileActionsCreator.loadUserFriendships());
  }

  return store.dispatch(push('/'));
}

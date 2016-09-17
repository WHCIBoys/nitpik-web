import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { push } from 'react-router-redux';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import UserProfile from '../containers/user-profile';
import * as AuthActionCreators from '../actions-creators/auth';

const profileQuery = (nextState) => {
  const { params: { profileId } } = nextState;
  console.log(profileId);
  // Dispatch the actions here
};

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="login/facebook" onEnter={() => login(store)}/>
    <Route onEnter={profileQuery} path="profile/:profileId" component={ UserProfile }/>
  </Route>
);

export function login(store) {
  const currentState = store.getState();
  const {
    routing: {
      locationBeforeTransitions: {
        query: {
          access_token: accessToken,
        },
      },
    },
  } = currentState;

  if (accessToken) {
    store.dispatch(AuthActionCreators.savedUserAccessToken(accessToken));
    store.dispatch(AuthActionCreators.getUserInfo(accessToken));
  }

  return store.dispatch(push('/'));
}

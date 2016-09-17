import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';
import AboutPage from '../containers/about-page';
import HomePage from '../containers/home-page';
import UserProfile from '../containers/user-profile';

const profileQuery = (nextState) => {
  const { params: { profileId } } = nextState;
  console.log(profileId);
  // Dispatch the actions here
};

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
    <Route onEnter={profileQuery} path="profile/:profileId" component={ UserProfile }/>
  </Route>
);

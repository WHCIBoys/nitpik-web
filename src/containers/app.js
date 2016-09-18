import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logoutUser, requestLogin } from '../actions/session';
import { getNits } from '../action-creators';

import { Link } from 'react-router';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';
import Container from '../components/container';
import Loader from '../components/ui/loader';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(requestLogin()),
    logout: () => dispatch(logoutUser()),
    openUserProfile: (userId) => dispatch(push(`/profile/${userId}`)),
    fetchNits: (userId) => dispatch(getNits(userId)),
  };
}

function App({ children, session, login, logout, openUserProfile }) {
  const token = session.get('token', false);
  const isFetching = session.get('isLoading', false);
  const isLoggedIn = token && token !== null && typeof token !== 'undefined';
  const firstName = session.getIn(['user', 'first'], '');
  const lastName = session.getIn(['user', 'last'], '');

  if (isFetching) {
    return (
      <Container>
        <Loader/>
      </Container>
    );
  }

  return (
    <div>
      <LoginModal
        onSubmit={ login }
        isPending={ session.get('isLoading', false) }
        hasError={ session.get('hasError', false) }
        isVisible={ !isLoggedIn } />
      <Navigator testid="navigator" isVisible={ isLoggedIn }>
        <NavigatorItem isVisible={ isLoggedIn } mr>
          <Link to="/">Home</Link>
        </NavigatorItem>
        <div className="flex flex-auto" />
        <NavigatorItem isVisible={ isLoggedIn } mr>
          <div data-testid="user-profile" className="h3">{ `${ firstName } ${ lastName }` }</div>
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn } mr>
          <Button onClick={ () => openUserProfile(1) } className="bg-blue white">
            My Profile
          </Button>
        </NavigatorItem>
        <NavigatorItem isVisible={ isLoggedIn }>
          <Button onClick={ logout } className="bg-red white">
            Logout
          </Button>
        </NavigatorItem>
      </Navigator>
      <Content isVisible={ isLoggedIn }>
        { children }
      </Content>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  session: React.PropTypes.object,
  login: React.PropTypes.func,
  logout: React.PropTypes.func,
  openUserProfile: React.PropTypes.func,
  fetchNits: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

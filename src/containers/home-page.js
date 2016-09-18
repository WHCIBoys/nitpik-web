import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import * as I from 'immutable';

import Container from '../components/container';
import FriendsList from '../components/friends-list';

function mapStateToProps(state) {
  return {
    friendships: state.profile.get('friendships', I.List()),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openUserProfile: (userId) => dispatch(push(`/profile/${userId}`)),
  };
}

function HomePage({ openUserProfile, friendships }) {
  return (
    <Container testid="home" size={4} center>
      <h2 data-testid="home-heading" className="center caps white" style={{position: 'relative', marginTop: '-70px', marginBottom: '50px'}} id="qa-counter-heading">Friends</h2>
      <FriendsList friendships={friendships} onProfileClick={openUserProfile}/>
    </Container>
  );
}

HomePage.propTypes = {
  openUserProfile: React.PropTypes.func,
  friendships: React.PropTypes.instanceOf(I.List),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

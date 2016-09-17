import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/container';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function UserProfile({ }) {
  return (
    <Container testid="home" size={4} center>
      <h2 data-testid="home-heading" className="center caps" id="qa-counter-heading">User Profile</h2>
    </Container>
  );
}

UserProfile.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

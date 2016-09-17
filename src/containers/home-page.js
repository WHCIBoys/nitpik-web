import React from 'react';
import { connect } from 'react-redux';

import Container from '../components/container';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function HomePage({ }) {
  return (
    <Container testid="home" size={2} center>
      <h2 data-testid="home-heading" className="center caps" id="qa-counter-heading">Homepage</h2>
    </Container>
  );
}

HomePage.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

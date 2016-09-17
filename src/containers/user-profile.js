import React from 'react';
import { connect } from 'react-redux';
import * as MOCK_NITS_FOR_MAAZ from '../constants/mock-db.json';

import Container from '../components/container';
import Button from '../components/button';
import FontAwesome from 'react-fontawesome';
import NitList from '../components/nit-list';

// import * as MOCK_NITS_FOR_MAAZ from '../constants/mock-db.json';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

function UserProfile({ params: { profileId }}) {
  const NITS_FOR_CURRENT_USER = MOCK_NITS_FOR_MAAZ.nits.filter((nit) =>
    nit.user.id === Number(profileId
  ));
  return (
    <Container size={2} center>
      <div>
        <span className="flex justify-center h1 my1" id="qa-counter-heading">
          { MOCK_NITS_FOR_MAAZ.friendships
              .map((friendship) => friendship.friend)
              .concat(MOCK_NITS_FOR_MAAZ.friendships[0].user)
              .filter((friend) => friend.id === Number(profileId))[0].name }
        </span>
        <div className="flex flex-column">
        <textarea
          className="bg-silver border mb1"
          autoFocus
          rows="7"
          cols="50"
          style={{ 'maxWidth': '100%', borderStyle: 'groove', borderWidth: '2px' }}/>
        <Button className="bg-green white">
          <div className="flex items-center justify-center">
            <FontAwesome
              className="fa-check"
              name="facebookSignIn"/>
            <div className="mx2 items-center"> Submit! </div>
          </div>
        </Button>
        </div>
        <div>
          {
            NITS_FOR_CURRENT_USER.length > 0
            ? <NitList nitList={MOCK_NITS_FOR_MAAZ.nits}/>
            : <div className="h2 pt2 center">
                There aren't any public Nits for this user.
              </div>
          }
        </div>
      </div>
    </Container>
  );
}

UserProfile.propTypes = {
  params: React.PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

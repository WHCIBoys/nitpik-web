import React from 'react';
import { connect } from 'react-redux';
import * as MOCK_NITS_FOR_MAAZ from '../constants/mock-db.json';
import * as UserUtil from '../utils/user';

import Container from '../components/container';
import Button from '../components/button';
import FontAwesome from 'react-fontawesome';
import NitList from '../components/nit-list';
import * as NitActions from '../action-creators/nit';
import * as C from '../constants';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    saveNitToDb: () => dispatch(NitActions.saveNitToDb()),
    saveNitToState: (nitInfo) => {
      dispatch(NitActions.saveNitToState(nitInfo));
    },
  };
}

function UserProfile({ params: { profileId }, saveNitToDb, saveNitToState }) {
  const NITS_FOR_CURRENT_USER = MOCK_NITS_FOR_MAAZ.nits.filter((nit) =>
    nit.user.id === Number(profileId
  ));

  const profileUser = MOCK_NITS_FOR_MAAZ.friendships
      .map((friendship) => friendship.friend)
      .concat(MOCK_NITS_FOR_MAAZ.friendships[0].user)
      .filter((friend) => friend.id === Number(profileId))[0];

  const curUser = {
    'facebookId': '10207490889771713',
  };

  return (
    <Container size={2} center>
      <div style={{position: 'relative', zIndex: 3000, marginTop: '-175px'}}>
        <div
          className="circle border white"
          style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            backgroundSize: 'cover',
            backgroundImage: `url(${UserUtil.getUserFbProfileUrl(profileUser.facebookId, 'normal')})`,
            backgroundPosition: 'center center',
          }}/>
        <span className="flex justify-center h2 my1 caps white"
          style={{
            fontWeight: 'bold',
            marginBottom: '100px',
          }}
          id="qa-counter-heading">
          {profileUser.name}
        </span>
        <div className="flex flex-column" style={{boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 3px'}}>
          <div className="flex" style={{padding: '10px'}}>
            <div
              className="circle border white"
              style={{
                width: '25px',
                height: '25px',
                minWidth: '25px',
                minHeight: '25px',
                marginTop: '0',
                marginRight: '10px',
                backgroundSize: 'cover',
                backgroundImage: `url(${UserUtil.getUserFbProfileUrl(curUser.facebookId, 'normal')})`,
                backgroundPosition: 'center center',
              }}/>
            <textarea
              className="mb1"
              autoFocus
              rows="7"
              onBlur={(e) => saveNitToState({
                id: profileId,
                nitContent: e.target.value,
              })}
              style={{ 'width': '100%', borderWidth: '2px', border: 'none', resize: 'none' }}/>
          </div>
          <div style={{'width': '100%', 'text-align': 'right', borderTop: `1px solid ${C.grey200}`}} >
            <Button className="bg-white white" style={{width: '100px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '0px', borderLeft: `1px solid ${C.grey200}`}} onClick={() => saveNitToDb()}>
              <div className="flex items-center justify-center" style={{color: C.grey300}}>
                <FontAwesome
                  className="fa-check"
                  name="facebookSignIn"/>
                <div className="mx2 items-center">Post</div>
              </div>
            </Button>
          </div>
        </div>

        <div>
          {
            NITS_FOR_CURRENT_USER.length > 0
            ? <NitList nitList={MOCK_NITS_FOR_MAAZ.nits}/>
            : <div className="h3 pt2 center caps" style={{color: C.grey400}}>
                no public nits found
              </div>
          }
        </div>
      </div>
    </Container>
  );
}

UserProfile.propTypes = {
  params: React.PropTypes.object,
  saveNitToDb: React.PropTypes.func,
  saveNitToState: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

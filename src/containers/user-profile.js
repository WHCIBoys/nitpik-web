import React from 'react';
import { connect } from 'react-redux';
import * as UserUtil from '../utils/user';
import * as I from 'immutable';

import Container from '../components/container';
import Button from '../components/button';
import FontAwesome from 'react-fontawesome';
import NitList from '../components/nit-list';
import * as NitActions from '../action-creators/nit';
import * as C from '../constants';
import cx from 'classnames';


function mapStateToProps(state) {
  return {
    loggedInUser: state.session.get('user', I.Map()),
    allNits: state.profile.get('nits', I.List()),
    friendships: state.profile.get('friendships', I.List()),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveNitToDb: () => dispatch(NitActions.saveNitToDb()),
    saveNitToState: (nitInfo) => {
      dispatch(NitActions.saveNitToState(nitInfo));
    },
  };
}

function UserProfile({
    params: { profileId },
    saveNitToDb,
    saveNitToState,
    loggedInUser,
    allNits,
    friendships,
  }) {
  const userIsOnHisOwnProfile = loggedInUser.get('id') === profileId;
  const profileUser = friendships
                        .map((friendship) => friendship.get('friend'))
                        .push(loggedInUser)
                        .filter((friend) => friend.get('id') === profileId).get(0, I.Map());

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
            backgroundImage: `url(${UserUtil.getUserFbProfileUrl(profileUser.get('facebookId'), 'normal')})`,
            backgroundPosition: 'center center',
          }}/>
        <span className="flex justify-center h2 my1 caps white"
          style={{
            fontWeight: 'bold',
            marginBottom: '100px',
          }}
          id="qa-counter-heading">
          {profileUser.get('name')}
        </span>
        <div className={cx('flex flex-column', { 'display-none': userIsOnHisOwnProfile })} style={{boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 3px'}}>
          <div className={cx('flex')} style={{padding: '10px'}}>
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
                backgroundImage: `url(${UserUtil.getUserFbProfileUrl(loggedInUser.get('facebookId'), 'normal')})`,
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
            <div style={{'width': '100%', 'textAlign': 'right', borderTop: `1px solid ${C.grey200}`}} >
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
              allNits.length > 0
              ? <NitList nitList={allNits}/>
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
  loggedInUser: React.PropTypes.instanceOf(I.Map),
  allNits: React.PropTypes.instanceOf(I.List),
  friendships: React.PropTypes.instanceOf(I.List),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

import React from 'react';
import Friend from './friend';
import * as I from 'immutable';


function FriendsList({ friendships, isVisible = true, onProfileClick }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {
        friendships.map((friendship, i) => {
          return <Friend key={i} userInfo={friendship.get('friend')} onProfileClick={onProfileClick}/>;
        })
      }
    </div>
  );
}

FriendsList.propTypes = {
  friendships: React.PropTypes.instanceOf(I.List),
  isVisible: React.PropTypes.bool,
  onProfileClick: React.PropTypes.func,
};

export default FriendsList;

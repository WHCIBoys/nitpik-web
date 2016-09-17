import React from 'react';
import Friend from './friend';

function FriendsList({ friendships, isVisible = true, onProfileClick }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {
        friendships.map((friendship, i) => {
          return <Friend key={i} userInfo={friendship.friend} onProfileClick={onProfileClick}/>;
        })
      }
    </div>
  );
}

FriendsList.propTypes = {
  friendships: React.PropTypes.array,
  isVisible: React.PropTypes.bool,
  onProfileClick: React.PropTypes.func,
};

export default FriendsList;

import React from 'react';
import Friend from './friend';

function FriendsList({ friends, isVisible = true, onProfileClick }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {
        friends.map((friend, i) => {
          return <Friend key={i} userInfo={friend} onProfileClick={onProfileClick}/>;
        })
      }
    </div>
  );
}

FriendsList.propTypes = {
  friends: React.PropTypes.array,
  isVisible: React.PropTypes.bool,
  onProfileClick: React.PropTypes.func,
};

export default FriendsList;

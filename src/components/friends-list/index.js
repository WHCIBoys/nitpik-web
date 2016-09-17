import React from 'react';
import Friend from './friend';

function FriendsList({ friends, isVisible = true }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {
        friends.map((friend, i) => {
          return <Friend key={i} userInfo={friend}/>;
        })
      }
    </div>
  );
}

FriendsList.propTypes = {
  friends: React.PropTypes.array,
  isVisible: React.PropTypes.bool,
};

export default FriendsList;

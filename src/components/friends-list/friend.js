import React from 'react';

function Friend({ userInfo, onProfileClick }) {
  return (
    <div
      className="flex items-center mt2 mx1 p2 bg-grey border rounded"
      style={{width: '30%', cursor: 'pointer'}}
      onClick={() => onProfileClick()}>
      <img
        className="rounded"
        src="http://digventures.com/flag-fen/wp-content/uploads/placeholder-man-grid-240x268.png"
        style={{
          width: 'auto',
          height: '100px',
        }}/>
      <span className="ml2 mr1">{ userInfo.firstName }</span>
      <span>{ userInfo.lastName }</span>
    </div>
  );
}

Friend.propTypes = {
  userInfo: React.PropTypes.object,
  onProfileClick: React.PropTypes.func,
};

export default Friend;
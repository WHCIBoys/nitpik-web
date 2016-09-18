import React from 'react';
import * as UserUtil from '../../utils/user';

function Friend({ userInfo, onProfileClick }) {
  return (
    <div
      className="flex items-center mt2 mx1 p2 bg-gray rounded"
      style={{width: '30%', cursor: 'pointer', background: '#FFF'}}
      onClick={() => onProfileClick(userInfo.id)}>
      <img
        className="circle border white"
        src={UserUtil.getUserFbProfileUrl(userInfo.facebookId, 'normal')}
        style={{
          width: '50px',
          height: '50px',
        }}/>
      <span className="ml2 mr1 h3">{ userInfo.name }</span>
    </div>
  );
}

Friend.propTypes = {
  userInfo: React.PropTypes.object,
  onProfileClick: React.PropTypes.func,
};

export default Friend;

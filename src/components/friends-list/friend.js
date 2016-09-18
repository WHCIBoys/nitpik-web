import React from 'react';
import * as UserUtil from '../../utils/user';
import * as C from '../../constants';

function Friend({ userInfo, onProfileClick }) {
  return (
    <div
      className="flex items-center mt2 mx1 bg-gray rounded"
      style={{
        width: '30%',
        cursor: 'pointer',
        padding: '10px',
        background: '#FFF',
        boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 3px',
      }}
      onClick={() => onProfileClick(userInfo.id)}>
      <div
        className="circle border white"
        style={{
          width: '40px',
          height: '40px',
          backgroundSize: 'cover',
          backgroundImage: `url(${UserUtil.getUserFbProfileUrl(userInfo.facebookId, 'normal')})`,
          backgroundPosition: 'center center',
        }}/>
      <span className="ml2 mr1 h3" style={{color: C.grey600, fontWeight: '300'}}>{ userInfo.name }</span>
    </div>
  );
}

Friend.propTypes = {
  userInfo: React.PropTypes.object,
  onProfileClick: React.PropTypes.func,
};

export default Friend;

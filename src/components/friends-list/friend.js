import React from 'react';
import * as UserUtil from '../../utils/user';
import * as C from '../../constants';
import * as I from 'immutable';


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
      onClick={() => onProfileClick(userInfo.get('id'))}>
      <div
        className="circle border white"
        style={{
          width: '40px',
          height: '40px',
          backgroundSize: 'cover',
          backgroundImage: `url(${UserUtil.getUserFbProfileUrl(userInfo.get('facebookId'), 'normal')})`,
          backgroundPosition: 'center center',
        }}/>
      <span className="ml2 mr1 h3" style={{color: C.grey600, fontWeight: '300'}}>{ userInfo.get('name') }</span>
    </div>
  );
}

Friend.propTypes = {
  userInfo: React.PropTypes.instanceOf(I.Map),
  onProfileClick: React.PropTypes.func,
};

export default Friend;

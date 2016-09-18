import React from 'react';
import Nit from './nit';
import * as C from '../../constants';
import * as I from 'immutable';

function NitList({ nitList }) {
  return (
    <div>
      <h2 data-testid="home-heading" className="center caps" style={{color: C.grey500}} id="qa-counter-heading">Nits</h2>
      <div className="flex flex-wrap">
        {
          nitList.map((nit, i) => {
            return <Nit key={i} content={nit.get('content')}/>;
          })
        }
      </div>
    </div>
  );
}

NitList.propTypes = {
  nitList: React.PropTypes.instaceOf(I.List()),
  isVisible: React.PropTypes.bool,
};

export default NitList;

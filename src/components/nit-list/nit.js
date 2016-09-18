import React from 'react';
import * as C from '../../constants';

function Nit({ content }) {
  return (
    <div
      className="flex items-center mt2 p2 rounded"
      style={{width: '100%', borderRadius: '2px', boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 3px'}}>
      <span className="h4" style={{color: C.grey600}}>{ content }</span>
    </div>
  );
}

Nit.propTypes = {
  content: React.PropTypes.string,
};

export default Nit;

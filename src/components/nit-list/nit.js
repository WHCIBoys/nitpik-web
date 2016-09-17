import React from 'react';

function Nit({ content }) {
  return (
    <div
      className="flex items-center mt2 p2 bg-gray border rounded"
      style={{borderRadius: '14px', width: '100%'}}>
      <span className="h4">{ content }</span>
    </div>
  );
}

Nit.propTypes = {
  content: React.PropTypes.string,
};

export default Nit;

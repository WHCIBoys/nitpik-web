import React from 'react';
import Nit from './nit';

function NitList({ nitList }) {
  console.log(nitList);
  return (
    <div className="flex flex-wrap">
      {
        nitList.map((nit, i) => {
          return <Nit key={i} content={nit.content}/>;
        })
      }
    </div>
  );
}

NitList.propTypes = {
  nitList: React.PropTypes.array,
  isVisible: React.PropTypes.bool,
};

export default NitList;

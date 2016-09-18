import React from 'react';
import { centerContainer, red } from '../../constants/styles';

const Loader = () => {
  return (
    <div className="qa-loader"
      style={centerContainer}>
      <i style={styles.base} className="fa fa-2x fa-spinner fa-pulse"/>
    </div>
  );
};

const styles = {
  base: {
    color: red,
    zIndex: 1000,
  },
};

export default Loader;

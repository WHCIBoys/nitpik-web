import React from 'react';

function Content({ children, isVisible }) {
  return (
    <main style={{paddingBottom: '20px'}}>
      { isVisible ? children : null }
    </main>
  );
}

Content.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
};

export default Content;

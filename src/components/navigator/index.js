import React from 'react';

function Navigator({ children, isVisible, ...props }) {
  if (!isVisible) {
    return null;
  }

  return (
    <nav data-testid={ props.testid } className="flex items-center p1 bg-white border-bottom">
      { children }
    </nav>
  );
}

Navigator.propTypes = {
  children: React.PropTypes.node,
  isVisible: React.PropTypes.bool,
  testid: React.PropTypes.string,
};

export default Navigator;

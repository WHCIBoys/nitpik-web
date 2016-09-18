import React from 'react';

function Navigator({ children, isVisible, ...props }) {
  if (!isVisible) {
    return null;
  }

  return (
    <nav className="flex p1 bg-black"
      style={{
        position: 'relative',
        height: '300px',
        padding: '25px',
        backgroundImage: 'url("http://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Desktop-Starry-Night-Wallpaper-Download.jpg")',
        backgroundColor: '#000',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundAttachment: 'fixed',
      }} data-testid={ props.testid }>
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

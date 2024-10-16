import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: '#4CAF50', padding: '1rem' }}>
      <h1 style={{ color: 'white' }}>{title}</h1>
    </header>
  );
};

export default Header;

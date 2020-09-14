import React from 'react';
import './Header.less';

const Header = props => {
  return (
    <div className="header-component">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;

import React from 'react';
import Header from '../../common/Header.js';
import RenderChooseUser from './RenderChooseUser.js';

const ChooseUserContainer = () => {
  return (
    <div>
      <Header title="Choose Your Path!" />
      <RenderChooseUser />
    </div>
  );
};

export default ChooseUserContainer;

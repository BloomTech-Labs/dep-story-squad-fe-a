import React from 'react';
import Header from '../../common/Header';
import RenderDrawingSubmit from './RenderDrawingSubmit';
import './DrawingSubmit.less';

const DrawingSubmitContainer = () => {
  return (
    <div>
      <Header title="Ready, Set... Draw!" />
      <RenderDrawingSubmit />
    </div>
  );
};

export default DrawingSubmitContainer;

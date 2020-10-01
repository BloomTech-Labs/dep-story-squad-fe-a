import React from 'react';
import Header from '../../common/Header.js';
import RenderWritingSubmit from './RenderWritingSubmit.js';
import './WritingSubmit.less';

const WritingSubmitContainer = () => {
  return (
    <div>
      <Header title="Pencils Ready?" />
      <RenderWritingSubmit />
    </div>
  );
};

export default WritingSubmitContainer;

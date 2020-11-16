import React from 'react';

import writing_trophy_gray from '../images/writing_trophy_gray.png';
import writing_trophy_full_color from '../images/writing_trophy_full_color.png';

function getWritingTrophy(value) {
  switch (value) {
    case writing_trophy_gray:
      return writing_trophy_gray;

    case writing_trophy_full_color:
      return writing_trophy_full_color;

    default:
      return writing_trophy_gray;
  }
}

function getWritingTrophies(value) {
  switch (value) {
    case 0:
      return [writing_trophy_gray];

    case 30:
      return [writing_trophy_full_color];

    default:
      return [writing_trophy_gray];
  }
}

export default function WritingTrophyLogic({ value }) {
  return (
    <div>
      {getWritingTrophies(value).map(value => (
        <img src={getWritingTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

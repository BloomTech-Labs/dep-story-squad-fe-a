import React from 'react';

import reading_trophy_gray from '../images/reading_trophy_gray.png';
import reading_trophy_full_color from '../images/reading_trophy_full_color.png';

function getReadingTrophy(value) {
  switch (value) {
    case reading_trophy_gray:
      return reading_trophy_gray;

    case reading_trophy_full_color:
      return reading_trophy_full_color;
  }
}

function getReadingTrophies(value) {
  switch (value) {
    case 0:
      return [reading_trophy_gray];

    case 100:
      return [reading_trophy_full_color];

    default:
      return [reading_trophy_gray];
  }
}

export default function ReadingTrophyLogic({ value }) {
  return (
    <div>
      {getReadingTrophies(value).map(value => (
        <img src={getReadingTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

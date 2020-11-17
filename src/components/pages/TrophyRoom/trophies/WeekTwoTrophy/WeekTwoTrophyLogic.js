import React from 'react';

import week_2_trophy_placeholder_gray from '../../images/week_2_trophy_placeholder_gray.png';
import week_2_trophy_placeholder_color from '../../images/week_2_trophy_placeholder_color.png';

function getWeekTwoTrophy(value) {
  switch (value) {
    case week_2_trophy_placeholder_gray:
      return week_2_trophy_placeholder_gray;

    case week_2_trophy_placeholder_color:
      return week_2_trophy_placeholder_color;
  }
}

function getWeekTwoTrophies(value) {
  switch (value) {
    case 0:
      return [week_2_trophy_placeholder_gray];

    case 120:
      return [week_2_trophy_placeholder_color];

    default:
      return [week_2_trophy_placeholder_gray];
  }
}

export default function WeekTwoTrophyLogic({ value }) {
  return (
    <div>
      {getWeekTwoTrophies(value).map(value => (
        <img src={getWeekTwoTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

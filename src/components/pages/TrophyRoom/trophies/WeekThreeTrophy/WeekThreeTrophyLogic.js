import React from 'react';

import week_3_trophy_placeholder_gray from '../../images/week_3_trophy_placeholder_gray.png';
import week_3_trophy_placeholder_color from '../../images/week_3_trophy_placeholder_color.png';

function getWeekThreeTrophy(value) {
  switch (value) {
    case week_3_trophy_placeholder_gray:
      return week_3_trophy_placeholder_gray;

    case week_3_trophy_placeholder_color:
      return week_3_trophy_placeholder_color;
  }
}

function getWeekThreeTrophies(value) {
  if (value >= 9) {
    return [week_3_trophy_placeholder_color];
  } else {
    return [week_3_trophy_placeholder_gray];
  }
}

export default function WeekThreeTrophyLogic({ value }) {
  return (
    <div>
      {getWeekThreeTrophies(value).map(value => (
        <img src={getWeekThreeTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

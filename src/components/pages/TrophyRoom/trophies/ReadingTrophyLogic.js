import React from 'react';

import week_1_equip_manager_trophy_gray from '../images/week_1_equip_manager_trophy_gray.png';
import week_1_equip_manager_trophy_color from '../images/week_1_equip_manager_trophy_color.png';
import reading_trophy_gray from '../images/reading_trophy_gray.png';
import reading_trophy_full_color from '../images/reading_trophy_full_color.png';

function getReadingTrophy(value) {
  switch (value) {
    case week_1_equip_manager_trophy_gray:
      return week_1_equip_manager_trophy_gray;

    case week_1_equip_manager_trophy_color:
      return week_1_equip_manager_trophy_color;
  }
}

function getReadingTrophies(value) {
  switch (value) {
    case 0:
      return [week_1_equip_manager_trophy_gray];

    case 100:
      return [week_1_equip_manager_trophy_color];

    default:
      return [week_1_equip_manager_trophy_color];
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

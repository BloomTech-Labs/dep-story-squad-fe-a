import React from 'react';

import week_1_equip_manager_trophy_gray from '../../images/week_1_equip_manager_trophy_gray.png';
import week_1_equip_manager_trophy_color from '../../images/week_1_equip_manager_trophy_color.png';

function getWeekOneTrophy(value) {
  switch (value) {
    case week_1_equip_manager_trophy_gray:
      return week_1_equip_manager_trophy_gray;

    case week_1_equip_manager_trophy_color:
      return week_1_equip_manager_trophy_color;
  }
}

function getWeekOneTrophies(value) {
  switch (value) {
    case 0:
      return [week_1_equip_manager_trophy_gray];

    case 3:
      return [week_1_equip_manager_trophy_color];

    default:
      return [week_1_equip_manager_trophy_gray];
  }
}

export default function WeekOneTrophyLogic({ value }) {
  return (
    <div>
      {getWeekOneTrophies(value).map(value => (
        <img src={getWeekOneTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

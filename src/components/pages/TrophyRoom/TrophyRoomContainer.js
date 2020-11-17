import React from 'react';
import { Header } from '../../common/';
import RenderWeekOneTrophy from './trophies/WeekOneTrophy/RenderWeekOneTrophy';
import RenderWeekTwoTrophy from './trophies/WeekTwoTrophy/RenderWeekTwoTrophy';
import RenderWeekThreeTrophy from './trophies/WeekThreeTrophy/RenderWeekThreeTrophy';
import './TrophyRoomContainer.less';

const TrophyRoomContainer = () => {
  return (
    <div className="trophy-room-container">
      <Header title="Trophy Room" />
      <div className="trophy-cards-container">
        <RenderWeekOneTrophy />
        <RenderWeekTwoTrophy />
        <RenderWeekThreeTrophy />
      </div>
    </div>
  );
};

export default TrophyRoomContainer;

import React from 'react';
import { Header } from '../../common/';
import RenderReadingTrophyCard from './trophies/RenderReadingTrophyCard';
import RenderWritingTrophyCard from './trophies/RenderWritingTrophyCard';
import RenderDrawingTrophyCard from './trophies/RenderDrawingTrophyCard';
import './TrophyRoomContainer.less';

const TrophyRoomContainer = () => {
  return (
    <div className="trophy-room-container">
      <Header title="Trophy Room" />
      <div className="trophy-cards-container">
        <RenderReadingTrophyCard />
        <RenderWritingTrophyCard />
        <RenderDrawingTrophyCard />
      </div>
    </div>
  );
};

export default TrophyRoomContainer;

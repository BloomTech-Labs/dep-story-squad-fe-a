import React from 'react';
import { Header } from '../../common/';
import RenderReadingTrophyCard from './trophies/RenderReadingTrophyCard';
import RenderWritingTrophyCard from './trophies/RenderWritingTrophyCard';
import RenderDrawingTrophyCard from './trophies/RenderDrawingTrophyCard';

const TrophyRoomContainer = () => {
  return (
    <div className="trophy-room-container">
      <Header title="Trophy Room" />
      <RenderReadingTrophyCard />
      <RenderWritingTrophyCard />
      <RenderDrawingTrophyCard />
    </div>
  );
};

export default TrophyRoomContainer;

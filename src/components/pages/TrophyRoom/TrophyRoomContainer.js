import React from 'react';
import { Header } from '../../common/';
import RenderTrophyRoomPage from './RenderTrophyRoomPage';
import RenderReadingTrophyCard from './trophies/RenderReadingTrophyCard';

const TrophyRoomContainer = () => {
  return (
    <div className="trophy-room-container">
      <Header title="Trophy Room" />
      <RenderReadingTrophyCard />
    </div>
  );
};

export default TrophyRoomContainer;

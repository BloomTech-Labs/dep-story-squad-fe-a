import React from 'react';
import { Header } from '../../common/';
import RenderTrophyRoomPage from './RenderTrophyRoomPage';

const TrophyRoomContainer = () => {
  return (
    <div className="trophy-room-container">
      <Header title="🏆 Trophy Room" />
      <RenderTrophyRoomPage />
    </div>
  );
};

export default TrophyRoomContainer;

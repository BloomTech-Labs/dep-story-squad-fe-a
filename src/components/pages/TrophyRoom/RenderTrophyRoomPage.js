import React from 'react';
import Trophy from './trophies/TrophyDisplay';
import Star from './stars/StarDisplay';

const RenderTrophyRoomPage = props => {
  return (
    <div>
      <Trophy value={0} />
      <Star value={20} />
    </div>
  );
};

export default RenderTrophyRoomPage;

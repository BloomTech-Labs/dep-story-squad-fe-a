import React from 'react';
import Trophy from './trophies/TrophyDisplay';
import Star from './stars/StarDisplay';
import './TrophyRoom.less';

import { connect } from 'react-redux';

const RenderTrophyRoomPage = props => {
  return (
    <div>
      <div class="outer-div">
        <div class="inner-div">
          <div class="front">
            <div class="front__bkg-photo"></div>
            <div class="front__face-photo">
              <Trophy className="trophy" value={60} />
            </div>
            <div class="front__text">
              <h3 class="front__text-header">Stories: 3</h3>
              <h3 class="front__text-header">Drawings: 3</h3>
              <h3 class="front__text-header">Player Points: 30</h3>
            </div>
          </div>
          <div class="back">
            <div>
              <Trophy className="trophy" value={0} />
              <h3 class="back__text-header">
                Rack up 5 stars to unlock the next Trophy!
              </h3>
              <Star value={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderTrophyRoomPage;

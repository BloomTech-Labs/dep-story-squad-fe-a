import React from 'react';
import { Header } from '../../common/';
import RenderMissionDashboard from './RenderMissionDashboard';
import './MissionDashboard.less';

const MissionDashboardContainer = () => {
  return (
    <div className="mission-container">
      <Header title="Mission" />
      <RenderMissionDashboard />
    </div>
  );
};

export default MissionDashboardContainer;

import React from 'react';
import RenderChildDashboard from './RenderChildDashboard.js';
import Header from '../../common/Header.js';
import './ChildDashboard.less';

const ChildDashboardContainer = () => {
  return (
    <div className="dashboard-container">
      <Header title="Story Squad" />
      <RenderChildDashboard />
    </div>
  );
};

export default ChildDashboardContainer;

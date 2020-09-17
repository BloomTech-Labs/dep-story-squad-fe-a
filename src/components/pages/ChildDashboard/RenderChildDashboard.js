import React from 'react';
import AcceptMission from './dashboard_images/accept_mission.png';
import changeAvatar from './dashboard_images/change_avatar.png';
import passport from './dashboard_images/passport.png';
import trophyRoom from './dashboard_images/trophy_room.png';
import { Link } from 'react-router-dom';

const RenderChildDashboard = () => {
  return (
    <div className="dashboard-images">
      <Link to="/mission-dashboard">
        <img src={AcceptMission} alt="Accept Mission" />
      </Link>
      <img src={changeAvatar} alt="Change Avatar" />
      <img src={passport} alt="Passport" />
      <img src={trophyRoom} alt="Trophy Room" />
    </div>
  );
};

export default RenderChildDashboard;

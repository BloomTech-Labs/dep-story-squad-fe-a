import React, { useState } from 'react';
import AcceptMission from './dashboard_images/accept_mission.png';
import changeAvatar from './dashboard_images/change_avatar.png';
import passport from './dashboard_images/passport.png';
import trophyRoom from './dashboard_images/trophy_room.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';

const RenderChildDashboard = props => {
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(
    props.displayDashboardWelcomeModal
  );

  // const closeWelcomeModal = () => {
  //   if ()
  // }

  return (
    <div className="dashboard-images">
      <Link to="/mission-dashboard">
        <img src={AcceptMission} alt="Accept Mission" />
      </Link>
      <img src={changeAvatar} alt="Change Avatar" />
      <img src={passport} alt="Passport" />
      <Link to="/trophy-room">
        <img src={trophyRoom} alt="Trophy Room" />
      </Link>

      <Modal
        open={welcomeModalVisible}
        onClose={() => setWelcomeModalVisible(false)}
        styles={{
          modal: {
            padding: '5%',
          },
        }}
        center
      >
        <h2>
          Welcome to Story Squad. Accept your mission to start an adventure!
        </h2>
        {/* <label>
          Do Not Show This Message Again: &nbsp;
          <input type="checkbox" value="doNotDisplay"/>
        </label> */}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    displayDashboardWelcomeModal:
      state.childReducer.settings.displayDashboardWelcomeModal,
  };
};

export default connect(mapStateToProps, {})(RenderChildDashboard);

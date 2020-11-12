import React, { useState } from 'react';
import AcceptMission from './dashboard_images/accept_mission.png';
import changeAvatar from './dashboard_images/change_avatar.png';
import passport from './dashboard_images/passport.png';
import trophyRoom from './dashboard_images/trophy_room.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { axiosWithAuth } from '../../../api';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

const RenderChildDashboard = props => {
  console.log('hello', props.student_id);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [pinCheckVisible, setPinCheckVisible] = useState(true);
  const [pinError, setPinError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { authState } = useOktaAuth();
  const history = useHistory();

  const onSubmit = values => {
    const student = {
      student_id: props.student_id,
      pin: values.pin,
    };

    axiosWithAuth('web', authState)
      .post(`/api/student/pin-check/${props.student_id}`, student)
      .then(res => {
        setPinCheckVisible(false);
        setWelcomeModalVisible(true);
      })
      .catch(err => {
        setPinError(true);
      });
  };

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
        open={pinCheckVisible}
        onClose={() => null}
        showCloseIcon={false}
        styles={{
          modal: {
            padding: '5%',
            backgroundColor: '#6CEAE6',
            fontFamily: 'Bangers',
          },
        }}
        center
      >
        <h1>Please enter your user pin to continue</h1>
        <form className="modal-pin-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            PIN Number: &nbsp;
            <input
              type="number"
              name="pin"
              min="0000"
              max="9999"
              ref={register({ required: true })}
            />
          </label>
          <input className="modal-submit-button" type="submit" />
        </form>
        {errors.pin && <span id="red-error">Pin is Required</span>}
      </Modal>
      <Modal
        open={welcomeModalVisible}
        onClose={() => setWelcomeModalVisible(false)}
        styles={{
          modal: {
            padding: '5%',
            backgroundColor: '#6CEAE6',
            fontFamily: 'Bangers',
            fontSize: '28px',
            textAlign: 'center',
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
      <Modal
        open={pinError}
        onClose={() => setPinError(false)}
        styles={{
          modal: {
            padding: '5%',
            backgroundColor: '#6CEAE6',
            fontFamily: 'Nunito',
            fontSize: '28px',
            textAlign: 'center',
            fontColor: 'red',
          },
        }}
        center
      >
        <h2>Incorrect Pin for that user</h2>
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
    student_id: state.childReducer.student_id,
    displayDashboardWelcomeModal:
      state.childReducer.settings.displayDashboardWelcomeModal,
  };
};

export default connect(mapStateToProps, {})(RenderChildDashboard);

import React, { useEffect, useState } from 'react';
import read from './mission_images/read.png';
import write from './mission_images/write.png';
import draw from './mission_images/draw.png';
import { Modal } from 'react-responsive-modal';
import Iframe from 'react-iframe';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { readingCompleted } from '../../../state/actions';

const RenderMissionDashboard = props => {
  console.log('PROPS IN RENDER MISSION DASH', props);
  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(false);
  const [greatJobModalVisible, setGreatJobModalVisible] = useState(false);
  const [preventWritingModalVisible, setPreventWritingModalVisible] = useState(
    false
  );
  const [preventDrawingModalVisible, setPreventDrawingModalVisible] = useState(
    false
  );
  const history = useHistory();

  function closePDF() {
    setPdfModalVisible(false);
    props.readingCompleted();
    setGreatJobModalVisible(true);
  }

  useEffect(() => {
    if (!props.reading_complete) {
      setWelcomeModalVisible(true);
    }
  }, []);

  const clickWriteLogo = () => {
    if (!props.reading_complete) {
      setPreventWritingModalVisible(true);
    } else {
      history.push('/writing-submit');
    }
  };

  const clickDrawLogo = () => {
    if (!props.writing_complete) {
      setPreventDrawingModalVisible(true);
    } else {
      history.push('/drawing-submit');
    }
  };

  return (
    <div className="mission-images">
      <div className="read-logo-container">
        <img
          src={read}
          alt="Read"
          className="read-logo"
          onClick={() => setPdfModalVisible(true)}
        />
        <input
          className="checkbox"
          type="checkbox"
          checked={props.reading_complete}
        />
      </div>
      <div className="write-and-draw">
        <div className="write-logo-container">
          <img
            src={write}
            alt="Write"
            className="write-logo"
            onClick={clickWriteLogo}
          />
          <input
            type="checkbox"
            className="checkbox"
            checked={props.writing_complete}
          />
        </div>
        <div className="draw-logo-container">
          <img
            src={draw}
            alt="Draw"
            className="write-logo"
            onClick={clickDrawLogo}
          />
          <input
            type="checkbox"
            className="checkbox"
            checked={props.drawing_complete}
          />
        </div>
      </div>
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
          Welcome to Story Squad! To begin your journey, click the 'READ' icon
          to start the story! Are you ready to accept the challenge?
        </h2>
        <button onClick={() => setWelcomeModalVisible(false)}>
          I Accept!!!
        </button>
      </Modal>
      <Modal
        open={pdfModalVisible}
        onClose={closePDF}
        styles={{
          overlay: {
            height: '100%',
            width: '100%',
          },
          modal: {
            height: '100%',
            width: '100%',
            padding: '35px',
          },
        }}
      >
        <Iframe
          url="https://story-squad-team-a-app-data.s3.amazonaws.com/shark_stories/stories/Story_Squad_Week_1_reading.pdf"
          height="100%"
          width="100%"
          frameBorder="5"
        />
      </Modal>
      <Modal
        open={greatJobModalVisible}
        onClose={() => setGreatJobModalVisible(false)}
        styles={{
          modal: {
            padding: '5%',
          },
        }}
        center
      >
        <h2>
          Great Job! Its time to get creative. Click on one of the prompts.
        </h2>
      </Modal>
      <Modal
        open={preventWritingModalVisible}
        onClose={() => setPreventWritingModalVisible(false)}
        styles={{
          modal: {
            padding: '5%',
          },
        }}
        center
      >
        <h2>You must complete the reading before you can add your own story</h2>
      </Modal>
      <Modal
        open={preventDrawingModalVisible}
        onClose={() => setPreventDrawingModalVisible(false)}
        styles={{
          modal: {
            padding: '5%',
          },
        }}
        center
      >
        <h2>You must submit your writing before you upload a drawing</h2>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('178->State in renderMissionDashboard', state);
  return {
    reading_complete: state.childReducer.settings.reading_complete,
    writing_complete: state.childReducer.settings.writing_complete,
    drawing_complete: state.childReducer.settings.drawing_complete,
  };
};

export default connect(mapStateToProps, { readingCompleted })(
  RenderMissionDashboard
);

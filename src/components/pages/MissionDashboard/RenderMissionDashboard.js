import React, { useState } from 'react';
import read from './mission_images/read.png';
import write from './mission_images/write.png';
import draw from './mission_images/draw.png';
import { Modal } from 'react-responsive-modal';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

const RenderMissionDashboard = () => {
  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [greatJobModalVisible, setGreatJobModalVisible] = useState(false);
  const [readComplete, setReadComplete] = useState(false);

  function closePDF() {
    setPdfModalVisible(false);
    setReadComplete(true);
    setGreatJobModalVisible(true);
  }

  return (
    <div className="mission-images">
      <div className="read-logo-container">
        <img
          src={read}
          alt="Read"
          className="read-logo"
          onClick={() => setPdfModalVisible(true)}
        />
        <input className="checkbox" type="checkbox" checked={readComplete} />
      </div>
      <div className="write-and-draw">
        <div className="write-logo-container">
          <Link to="/writing-submit">
            <img src={write} alt="Write" className="write-logo" />
          </Link>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="draw-logo-container">
          <Link to="/drawing-submit">
            <img src={draw} alt="Draw" className="write-logo" />
          </Link>
          <input type="checkbox" className="checkbox" />
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
    </div>
  );
};

export default RenderMissionDashboard;

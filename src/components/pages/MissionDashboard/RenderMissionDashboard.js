import React, { useState } from 'react';
import read from './mission_images/read.png';
import write from './mission_images/write.png';
import draw from './mission_images/draw.png';
import { Modal } from 'react-responsive-modal';
import Iframe from 'react-iframe';
import { Checkbox } from 'antd';

const RenderMissionDashboard = () => {
  const [pdfModalVisible, setPdfModalVisible] = useState(false);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [readComplete, setReadComplete] = useState(false);

  function closePDF() {
    setPdfModalVisible(false);
    setReadComplete(true);
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
          <img src={write} alt="Write" />
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="draw-logo-container">
          <img src={draw} alt="Draw" />
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
          },
        }}
      >
        <Iframe
          url="https://story-squad-files.s3-us-west-1.amazonaws.com/Web-Developer-Bootcamp-Course-Outline.pdf"
          height="100%"
          width="100%"
        />
      </Modal>
    </div>
  );
};

export default RenderMissionDashboard;

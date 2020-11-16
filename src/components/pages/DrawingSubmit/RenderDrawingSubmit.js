import React, { useState, useRef, useEffect } from 'react';
import S3FileUpload from 'react-s3';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { Spin } from 'antd';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';
import DisplayUploadFiles from '../../common/DisplayUploadFiles.js';
import { drawingCompleted, updateChildRecords } from '../../../state/actions';

const RenderDrawingSubmit = props => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const fileNamesRef = useRef(fileNames);
  fileNamesRef.current = fileNames;
  const fileInput = useRef(null);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [successfulUpload, setSuccessfulUpload] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const history = useHistory();
  const { authState } = useOktaAuth();

  const [currentChapter, setCurrentChapter] = useState('');

  useEffect(() => {
    if (props.game_mode === 'multiplayer') {
      setCurrentChapter(props.multiplayer_current_chapter);
    } else {
      setCurrentChapter(props.singleplayer_current_chapter);
    }
  }, []);

  useEffect(() => {
    console.log(selectedFiles);
  }, [fileNamesRef.current]);

  const s3config = {
    bucketName: 'training-images-team-a',
    dirName: `drawings/${props.game_mode}/${props.student_id}/story_${currentChapter}`,
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_S3_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
  };

  const onFileChange = e => {
    e.preventDefault();
    setSelectedFiles([...selectedFiles, ...e.target.files]);
    const pictures = e.target.files;
    for (const entry of Object.entries(pictures)) {
      fileNamesRef.current = [...fileNamesRef.current, entry[1].name];
      setFileNames(fileNamesRef.current);
      console.log('Object Entry:', entry);
    }
    console.log(typeof e.target.files);
    console.log('FILE NAMES:', fileNames);
  };

  const onUpload = async () => {
    setUploadingImages(true);
    for (let i = 0; i < selectedFiles.length; i++) {
      await S3FileUpload.uploadFile(selectedFiles[i], s3config)
        .then(data => {
          console.log(data);
          setSuccessfulUpload(true);
        })
        .catch(err => console.error(err));
    }

    console.log('Payload to Update Child:', props.student_id, props.records);
    //check this function to make sure it is working
    setUploadModalVisible(true);
    props.drawingCompleted();
    props.updateChildRecords(authState, props.student_id, props.student);

    setTimeout(function() {
      history.push('/mission-dashboard');
    }, 5000);
  };

  function handleClick() {
    fileInput.current.click();
  }

  const removeFileFromUploadList = fileName => {
    let newUploadFiles = [...selectedFiles];
    const filteredList = newUploadFiles.filter(file => file.name !== fileName);
    setSelectedFiles(filteredList);
    console.log('New Upload Files', newUploadFiles);

    let newFileNames = [...fileNames];
    fileNamesRef.current = newFileNames.filter(file => file !== fileName);
    setFileNames(fileNamesRef.current);

    console.log('Selected Files after removal', selectedFiles);
    console.log('File Names after removal', fileNames);
  };

  return (
    <div className="drawing-submit-container">
      <div className="drawing-prompt">
        Draw a picture to go along with the story you wrote
      </div>
      <h1>Upload</h1>
      <input
        type="file"
        accept=".jpg,.jpeg"
        multiple
        onChange={onFileChange}
        className="choose-files"
        ref={fileInput}
      />
      {fileNamesRef.current.map((file, index) => (
        <DisplayUploadFiles
          key={index}
          file={file}
          removeFileFromUploadList={removeFileFromUploadList}
        />
      ))}
      <button className="choose-drawing-button" onClick={handleClick}>
        Choose Files from your Device
      </button>
      <div className="submit-drawing-button-container">
        {uploadingImages ? (
          <Spin />
        ) : (
          <button className="submit-drawing-button" onClick={onUpload}>
            Submit
          </button>
        )}
      </div>
      <Modal
        open={uploadModalVisible}
        onClose={() => null}
        showCloseIcon={false}
        styles={{
          modal: {
            padding: '5%',
          },
        }}
        center
      >
        {successfulUpload ? (
          <h2>Your Drawing Had Been Successfully Uploaded!</h2>
        ) : (
          <h2>Sorry, an Error Occurred when trying to upload your drawing</h2>
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    student: state.childReducer,
    student_id: state.childReducer.student_id,
    game_mode: state.childReducer.settings.game_mode,
    multiplayer_current_chapter:
      state.childReducer.settings.multiplayer_current_chapter,
    singleplayer_current_chapter:
      state.childReducer.settings.singleplayer_current_chapter,
  };
};

export default connect(mapStateToProps, {
  drawingCompleted,
  updateChildRecords,
})(RenderDrawingSubmit);

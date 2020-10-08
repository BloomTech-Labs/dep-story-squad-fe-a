import React, { useState, useRef, useEffect } from 'react';
import Iframe from 'react-iframe';
import S3FileUpload, { uploadFile } from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import DisplayUploadFiles from '../../common/DisplayUploadFiles.js';
import { axiosWithAuth } from '../../../api';

const RenderWritingSubmit = props => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const fileNamesRef = useRef(fileNames);
  fileNamesRef.current = fileNames;
  const fileInput = useRef(null);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [successfulUpload, setSuccessfulUpload] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const history = useHistory();

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
    dirName: `new_stories_dataset/${props.game_mode}/${props.student_id}/story_${currentChapter}`,
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

  const sendKeyToDS = async s3Directory => {
    const data = {
      s3_dir: s3Directory,
      get_complexity_score: 1,
      star_rating: 0,
    };
    await axiosWithAuth()
      .post('/HTR/image/s3_dir', data)
      .then(res => {
        console.log('DS Response', res);
      })
      .catch(err => console.log(err));
  };

  const onUpload = async () => {
    setUploadingImages(true);
    if (selectedFiles.length > 1) {
      for (let i = 0; i < selectedFiles.length - 1; i++) {
        await S3FileUpload.uploadFile(selectedFiles[i], s3config)
          .then(data => {
            console.log(data);
          })
          .catch(err => console.error(err));
      }
    }
    await S3FileUpload.uploadFile(
      selectedFiles[selectedFiles.length - 1],
      s3config
    )
      .then(data => {
        console.log(data);
        setSuccessfulUpload(true);
        // const s3Key = data.key.split('/');
        // console.log('S3 Key Split', s3Key);
        // let s3Directory = '';
        // for (let i = 0; i < s3Key.length - 1; i++) {
        //   s3Directory = s3Directory + s3Key[i] + '/';
        // }
        // console.log('S3 Directory:', s3Directory);
        sendKeyToDS(s3config.dirName);
      })
      .catch(err => console.error(err));
    setUploadModalVisible(true);
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
    <div className="writing-submit-container">
      <div className="writing-prompt">
        <Iframe
          url="https://story-squad-team-a-app-data.s3.amazonaws.com/shark_stories/prompts/Story_Squad_Week_1_prompt.pdf"
          height="100%"
          width="100%"
        />
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
      <button className="choose-files-button" onClick={handleClick}>
        Choose Files from your Device
      </button>
      <div className="submit-button-container">
        {uploadingImages ? (
          <Spin />
        ) : (
          <button className="submit-button" onClick={onUpload}>
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
          <h2>Your Writing Had Been Successfully Uploaded!</h2>
        ) : (
          <h2>Sorry, an Error Occurred when trying to upload your story</h2>
        )}
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    student_id: state.childReducer.student_id,
    game_mode: state.childReducer.settings.game_mode,
    multiplayer_current_chapter:
      state.childReducer.settings.multiplayer_current_chapter,
    singleplayer_current_chapter:
      state.childReducer.settings.singleplayer_current_chapter,
  };
};

export default connect(mapStateToProps, {})(RenderWritingSubmit);

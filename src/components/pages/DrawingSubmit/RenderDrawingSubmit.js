import React, { useState, useRef, useEffect } from 'react';
import S3FileUpload from 'react-s3';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import { Spin } from 'antd';

const RenderDrawingSubmit = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const fileNamesRef = useRef(fileNames);
  fileNamesRef.current = fileNames;
  const [folderID, setFolderID] = useState(uuidv4());
  const fileInput = useRef(null);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [successfulUpload, setSuccessfulUpload] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(selectedFiles);
  }, [fileNamesRef.current]);

  const s3config = {
    bucketName: 'story-squad-team-a-app-data',
    dirName: `upload_testing/username3/${folderID}`,
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_S3_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
  };

  const onFileChange = e => {
    e.preventDefault();
    setSelectedFiles(e.target.files);
    const pictures = e.target.files;
    fileNames = [];
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
    setFolderID(uuidv4());
    for (let i = 0; i < selectedFiles.length; i++) {
      await S3FileUpload.uploadFile(selectedFiles[i], s3config)
        .then(data => {
          console.log(data);
          setSuccessfulUpload(true);
        })
        .catch(err => console.error(err));
    }
    setUploadModalVisible(true);
    setTimeout(function() {
      history.push('/mission-dashboard');
    }, 5000);
  };

  function handleClick() {
    fileInput.current.click();
  }

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
        <p key={index}>{file}</p>
      ))}
      <button onClick={handleClick}>Choose Files from your Device</button>
      {uploadingImages ? <Spin /> : <button onClick={onUpload}>Submit</button>}
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

export default RenderDrawingSubmit;

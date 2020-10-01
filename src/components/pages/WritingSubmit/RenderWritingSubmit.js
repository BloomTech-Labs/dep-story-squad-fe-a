import React, { useState, useRef, useEffect } from 'react';
import Iframe from 'react-iframe';
import S3FileUpload from 'react-s3';
import { v4 as uuidv4 } from 'uuid';

const RenderWritingSubmit = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  let fileNames = [];
  const [folderID, setFolderID] = useState(uuidv4());
  const fileInput = useRef(null);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  const s3config = {
    bucketName: 'story-squad-team-a-app-data',
    dirName: `upload_testing/username3/${folderID}`,
    region: 'us-east-1',
    accessKeyId: process.env.REACT_APP_S3_KEY,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
  };

  const onFileChange = e => {
    setSelectedFiles(e.target.files);
    const pictures = e.target.files;
    fileNames = [];
    for (const entry of Object.entries(pictures)) {
      fileNames.push(entry[1].name);
    }
    console.log(typeof e.target.files);
    console.log('FILE NAMES:', fileNames);
  };

  const onUpload = () => {
    setFolderID(uuidv4());
    for (let i = 0; i < selectedFiles.length; i++) {
      S3FileUpload.uploadFile(selectedFiles[i], s3config)
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  };

  function handleClick() {
    fileInput.current.click();
  }

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
      {fileNames.map(file => (
        <p>{file.name}</p>
      ))}
      <button onClick={handleClick}>Choose Files from your Device</button>
      <button onClick={onUpload}>Submit</button>
    </div>
  );
};

export default RenderWritingSubmit;

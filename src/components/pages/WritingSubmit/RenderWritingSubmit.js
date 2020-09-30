import React from 'react';
import Iframe from 'react-iframe';
import S3FileUpload from 'react-s3';

const s3config = {
  bucketName: 'story-squad-team-a-app-data',
  dirName: 'upload_testing',
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_S3_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_KEY,
};

const RenderWritingSubmit = () => {
  const file = null;

  const onFileChange = e => {
    console.log(e.target.files);
  };

  const onUpload = () => {
    S3FileUpload.uploadFile(file, s3config)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Iframe
        url="https://story-squad-team-a-app-data.s3.amazonaws.com/shark_stories/prompts/Story_Squad_Week_1_prompt.pdf"
        height="100%"
        width="80%"
      />
      <h1>Upload</h1>
      <input type="file" accept=".jpg,.jpeg" onChange={onFileChange} />
    </div>
  );
};

export default RenderWritingSubmit;

import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import './DisplayUploadFiles.less';

const DisplayUploadFiles = props => {
  return (
    <div className="file-name">
      <p>{props.file}</p>
      <DeleteOutlined
        className="delete-icon"
        onClick={() => props.removeFileFromUploadList(props.file)}
      />
    </div>
  );
};

export default DisplayUploadFiles;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../api';
import './ChooseUser.less';

const initialChildren = [
  {
    name: 'Bob',
    grade: 5,
    dyslexia: false,
  },
  {
    name: 'Joe',
    grade: 4,
    dyslexia: false,
  },
];

const RenderChooseUser = () => {
  const [children, setChildren] = useState(initialChildren);
  const history = useHistory();

  // !!!! NOT WORKING. Waiting for Backend to troubleshoot API bugs !!!!
  // useEffect(() => {
  //   axiosWithAuth("web")
  //     .get('/api/account/login')
  //     .then(res => console.log("Web Backend Login Res", res))
  //     .catch(err => console.log("Web Backend Login Error", err.message))
  // }, [])

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h4>
          So we can direct you to the right place, please let us know who you
          are.
        </h4>
        <div className="buttons">
          <button onClick={() => history.push('/parent-dashboard')}>
            Parent
          </button>
          {children.map(child => (
            <button onClick={() => history.push('/child-dashboard')}>
              {child.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenderChooseUser;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

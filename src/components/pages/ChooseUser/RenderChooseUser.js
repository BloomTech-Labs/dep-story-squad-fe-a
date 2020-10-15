import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../api';
import './ChooseUser.less';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';
import { updateParentInfo } from '../../../state/actions';

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

const RenderChooseUser = props => {
  const [children, setChildren] = useState(props.children);
  const history = useHistory();
  const { authState } = useOktaAuth();

  const { username } = props;

  useEffect(() => {
    props.updateParentInfo(authState);
  }, []);

  useEffect(() => {
    axiosWithAuth('web', authState)
      .get('/api/account/students')
      .then(res => console.log('Web Backend STUDENT Res', res))
      .catch(err => console.log(err));
  }, [username]);

  return (
    <div className="outer-container">
      <div className="inner-container">
        {children.length > 0 ? (
          <h4>
            So we can direct you to the right place, please let us know who you
            are.
          </h4>
        ) : (
          <h4>
            In order to add a student to your account, we need to verify your
            age. To do this, please add a credit card to your account.
          </h4>
        )}
        <div className="buttons">
          <button onClick={() => history.push('/parent-dashboard')}>
            {props.username}
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

const mapStateToProps = state => {
  return {
    children: state.parentReducer.student_ids,
    account_id: state.parentReducer.account_id,
    username: state.parentReducer.username,
    email: state.parentReducer.email,
  };
};

export default connect(mapStateToProps, { updateParentInfo })(RenderChooseUser);

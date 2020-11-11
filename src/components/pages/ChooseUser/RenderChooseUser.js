import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../../api';
import './ChooseUser.less';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';
import {
  updateParentInfo,
  updateChildInfo,
  clearChildInfo,
} from '../../../state/actions';

const RenderChooseUser = props => {
  const [children, setChildren] = useState(props.children);
  const history = useHistory();
  const { authState } = useOktaAuth();
  const { username } = props;

  useEffect(() => {
    props.updateParentInfo(authState);
    props.clearChildInfo();
  }, []);

  useEffect(() => {
    axiosWithAuth('web', authState)
      .get('/api/account/students')
      .then(res => {
        console.log('Web Backend STUDENT Res', res);
        setChildren(res.data.students);
      })
      .catch(err => console.log('Web Backend STUDENT Error', err));
  }, [username]);

  const clickChildButton = child => {
    props.updateChildInfo(child);
    history.push('/child-dashboard');
  };

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
            <button
              key={child.student_id}
              onClick={() => clickChildButton(child)}
            >
              {child.username}
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

export default connect(mapStateToProps, {
  updateParentInfo,
  updateChildInfo,
  clearChildInfo,
})(RenderChooseUser);

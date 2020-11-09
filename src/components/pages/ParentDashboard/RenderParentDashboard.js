import React, { useState } from 'react';
import ChildCard from './ChildCard';
import { Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { axiosWithAuth } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';
import { updateParentInfo } from '../../../state/actions';

const { Meta } = Card;

const initialChildren = [];

const initialFormValues = {
  username: '',
  grade: '',
  dyslexic: false,
  image: '',
};

const RenderParentDashboard = props => {
  const [children, setChildren] = useState(initialChildren);
  const [modalVisible, setModalVisible] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const { register, handleSubmit, errors } = useForm();
  const { authState } = useOktaAuth();

  if (!props.account_id) {
    props.updateParentInfo(authState);
  }

  const onSubmit = values => {
    setChildren([...children, values]);
    console.log('Values:', values);
    setFormValues(initialFormValues);
    console.log(children);
    setModalVisible(false);

    const newStudent = {
      username: values.username,
      account_id: props.account_id,
      pin: values.pin,
    };

    console.log('Request Body:', newStudent);

    axiosWithAuth('web', authState)
      .post('/api/student', newStudent)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  console.log('Account ID from Redux Store:', props.account_id);

  return (
    <div>
      <h1>Dashboard</h1>
      {children.map(child => (
        <ChildCard name={child.username} image={child.image} />
      ))}

      <Card onClick={() => setModalVisible(true)}>
        <Meta avatar={<PlusCircleFilled />} title="Add Child" />
      </Card>

      <Modal open={modalVisible} onClose={() => setModalVisible(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            User Name: <br />
            <input
              name="username"
              type="text"
              ref={register({ required: true })}
            />
          </label>

          <br />
          <br />

          <label>
            Grade: &nbsp;
            <select name="grade" ref={register({ required: true })}>
              <option value="" selected disabled hidden></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
            </select>
          </label>

          <br />
          <br />

          <label>
            Dyslexic?: &nbsp;
            <input type="checkbox" name="dyslexic" ref={register} />
          </label>

          <br />
          <br />

          <label>
            PIN Number: &nbsp;
            <input
              type="number"
              name="pin"
              min="1000"
              max="9999"
              ref={register({ required: true })}
            />
          </label>

          <br />
          <br />

          {/* errors will return when field validation fails  */}
          {errors.username && <span>A User Name is required</span>}
          <br />
          {errors.grade && <span>A Grade Level is required</span>}
          <br />
          {errors.pin && <span>A 4-Digit PIN Number is required</span>}
          <br />

          <input type="submit" />
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    account_id: state.parentReducer.account_id,
  };
};

export default connect(mapStateToProps, { updateParentInfo })(
  RenderParentDashboard
);

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

const { Meta } = Card;

const initialChildren = [
  {
    username: 'Bob',
    grade: 5,
    dyslexic: false,
    image:
      'https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png',
  },
  {
    username: 'Joe',
    grade: 4,
    dyslexic: false,
    image: '../../common/images/avatars/Hero_3.png',
  },
];

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

  const onSubmit = values => {
    setChildren([...children, values]);
    console.log('Values:', values);
    setFormValues(initialFormValues);
    console.log(children);
    setModalVisible(false);

    const newStudent = {
      username: values.username,
      account_id: props.account_id,
    };

    console.log('Request Username:', newStudent.username);

    axiosWithAuth('web', authState)
      .post('/api/student', newStudent)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

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

          {/* errors will return when field validation fails  */}
          {errors.username && <span>A User Name is required</span>}
          <br />
          {errors.grade && <span>A Grade Level is required</span>}
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

export default connect(mapStateToProps, {})(RenderParentDashboard);

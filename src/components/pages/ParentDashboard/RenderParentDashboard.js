import React, { useState } from 'react';
import ChildCard from './ChildCard';
import { Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

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

const RenderParentDashboard = () => {
  const [children, setChildren] = useState(initialChildren);
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = values => {
    setChildren([...children, values]);
    console.log('Values:', values);
    setFormValues(initialFormValues);
    console.log(children);
    setModalVisible(false);
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

export default RenderParentDashboard;

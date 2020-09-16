import React, { useState } from 'react';
import ChildCard from './ChildCard';
import { Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

const { Meta } = Card;

const initialChildren = [
  {
    name: 'Bob',
    grade: 5,
    dyslexia: false,
    image:
      'https://www.pinclipart.com/picdir/big/220-2207735_avatars-clipart-generic-user-woman-people-icon-png.png',
  },
  {
    name: 'Joe',
    grade: 4,
    dyslexia: false,
    image: '../../common/images/avatars/Hero_3.png',
  },
];

const RenderParentDashboard = () => {
  const [children, setChildren] = useState(initialChildren);

  return (
    <div>
      <h1>Dashboard</h1>
      {children.map(child => (
        <ChildCard name={child.name} image={child.image} />
      ))}
      <Card>
        <Meta avatar={<PlusCircleFilled />} title="Add Child" />
      </Card>
    </div>
  );
};

export default RenderParentDashboard;

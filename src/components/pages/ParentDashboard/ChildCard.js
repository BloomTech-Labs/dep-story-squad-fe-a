import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const ChildCard = props => {
  return (
    <div>
      <Card>
        <Meta avatar={<Avatar src={props.image} />} title={props.name} />
      </Card>
    </div>
  );
};

export default ChildCard;

import React from 'react';
import drawing_trophy_gray from '../images/drawing_trophy_gray.png';
import drawing_trophy_full_color from '../images/drawing_trophy_full_color.png';

function getDrawingTrophy(value) {
  switch (value) {
    case drawing_trophy_gray:
      return drawing_trophy_gray;

    case drawing_trophy_full_color:
      return drawing_trophy_full_color;

    default:
      return drawing_trophy_gray;
  }
}

function getDrawingTrophies(value) {
  switch (value) {
    case 0:
      return [drawing_trophy_gray];

    case 30:
      return [drawing_trophy_full_color];

    default:
      return [drawing_trophy_gray];
  }
}

export default function DrawingTrophyLogic({ value }) {
  return (
    <div>
      {getDrawingTrophies(value).map(value => (
        <img src={getDrawingTrophy(value)} alt="trophy_image" width={350} />
      ))}
    </div>
  );
}

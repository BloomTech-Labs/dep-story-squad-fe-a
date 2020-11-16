import React from 'react';
import no_trophy from '../images/no_trophy_PNG.png';
import bronze_trophy from '../images/bronze_trophy_text.png';
import silver_trophy from '../images/silver_trophy_text.png';
import gold_trophy from '../images/gold_trophy_text.png';

function getTrophy(value) {
  switch (value) {
    case no_trophy:
      return no_trophy;

    case bronze_trophy:
      return bronze_trophy;

    case silver_trophy:
      return silver_trophy;

    case gold_trophy:
      return gold_trophy;

    default:
      return no_trophy;
  }
}

function getTrophies(value) {
  switch (value) {
    case 0:
      return [no_trophy];

    case 30:
      return [bronze_trophy];

    case 60:
      return [silver_trophy];

    case 100:
      return [gold_trophy];

    default:
      return [no_trophy];
  }
}

export default function Trophy({ value }) {
  return (
    <div>
      {getTrophies(value).map(value => (
        <img src={getTrophy(value)} alt="trophy_image" width={200} />
      ))}
    </div>
  );
}

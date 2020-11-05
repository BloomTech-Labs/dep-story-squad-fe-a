import React from 'react';
import no_trophy from '../images/no_trophy.png';
import gold_trophy from '../images/gold_trophy.png';

function getTrophy(value) {
  switch (value) {
    case no_trophy:
      return 'https://lh3.googleusercontent.com/proxy/dsS1UL-aKNhSlFWhI6W2ZUhm5i68ekxuo0DLaUqDJn7GzId8DA-1fZfh2bQGx27dCunhAaoLfRcjM2XP4sJMxJCgLoFTbWtPcmTNtQXmEe24';
    case gold_trophy:
      return 'https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-c4d-hd-enterprise-golden-trophy-enterprise-honor-gold-cup-cupenterprise-honorqualificationgolden-png-image_621239.jpg';
    default:
      return 'https://lh3.googleusercontent.com/proxy/dsS1UL-aKNhSlFWhI6W2ZUhm5i68ekxuo0DLaUqDJn7GzId8DA-1fZfh2bQGx27dCunhAaoLfRcjM2XP4sJMxJCgLoFTbWtPcmTNtQXmEe24';
  }
}

//Why does it work when using static url taken from elements log
//return "/static/media/no_trophy.6bb7273d.png";
//return "/static/media/gold_trophy.81319b36.png";

function getTrophies(value) {
  switch (value) {
    case 0:
      return [no_trophy];

    case 100:
      return [gold_trophy];

    default:
      return [no_trophy];
  }
}

export default function Trophy({ value }) {
  return (
    <div>
      <h1>Current Trophy</h1>

      {getTrophies(value).map(value => (
        //<img src={`../images/${value}.png`} width={100} />

        <img src={getTrophy(value)} width={300} alt="trophy_image" />
      ))}
    </div>
  );
}

import React from 'react';
import gold_star from '../images/gold_coin.png';
import gray_star from '../images/gray_coin.png';

function getStar(value) {
  switch (value) {
    case gray_star:
      return gray_star;
    case gold_star:
      return gold_star;
    default:
      return '/static/media/gray_star.cc6f8248.png';
  }
}

function getStars(value) {
  switch (value) {
    case 0:
      return [gray_star, gray_star, gray_star, gray_star, gray_star];

    case 20:
      return [gold_star, gold_star, gray_star, gray_star, gray_star];

    case 30:
      return [gold_star, gold_star, gold_star, gray_star, gray_star];

    case 40:
      return [gold_star, gold_star, gold_star, gold_star, gray_star];

    case 100:
      return [gold_star, gold_star, gold_star, gold_star, gold_star];

    default:
      return [gray_star, gray_star, gray_star, gray_star, gray_star];
  }
}

export default function Rating({ value }) {
  return (
    <div>
      {getStars(value).map(value => (
        //<img src={`/static/media/${value}.e0ba5ce1.png`} width={100} />

        <img src={getStar(value)} width={40} alt="stars_image" />
      ))}
    </div>
  );
}

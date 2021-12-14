import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './Rating.module.css';

function RatingSecond() {
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  return (
    <div className={styles.container}>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        showTooltip
        tooltipArray={[
          'Unzureichend',
          'Ausreichend',
          'Befriedigend',
          'Gut',
          'Sehr Gut',
        ]}
      />
    </div>
  );
}

export default RatingSecond;

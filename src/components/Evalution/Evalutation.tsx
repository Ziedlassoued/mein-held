import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import styles from './Evaluation.module.css';

export default function Evaluation() {
  return (
    <div className={styles.container}>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
}

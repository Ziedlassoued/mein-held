import React, { ChangeEvent } from 'react';
import styles from './UploadImage.module.css';

type ImageUploadProps = {
  onUpload: (url: string) => void;
};

function UploadImage({ onUpload }: ImageUploadProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;

      fetch('/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((result) => console.log(onUpload(result.url)));
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        className={styles.imageUpload}
        onChange={handleChange}
      />

      <button type="submit" value="upload">
        upload
      </button>
    </div>
  );
}

export default UploadImage;

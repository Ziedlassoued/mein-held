import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import styles from './Slider.module.css';

interface SliderProps {
  slides: any;
}

function Slider({ slides }: SliderProps) {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line react/prop-types
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  // eslint-disable-next-line react/prop-types
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <BiChevronLeft className={styles.leftarrow} onClick={prevSlide} />
      <BiChevronRight className={styles.rightarrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div key="index" className={styles.index}>
            {index === current && (
              <img className={styles.image} src={slide.image} alt="maler" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;

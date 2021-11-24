import React from 'react';
import './global.css';

function Styleguide() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-tertiary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            border: '1px solid white',
            background: 'var(--color-background)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-text-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-text-secondary)',
            borderRadius: '50%',
          }}
        />
      </div>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <p>Paragraph</p>
      <a href="#">Link</a>
      <div
        style={{
          marginTop: 16,
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: 'var(--border-radius)',
          }}
        />
        <div
          style={{
            width: 100,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: 'var(--border-radius)',
          }}
        />
      </div>
    </div>
  );
}

export default Styleguide;

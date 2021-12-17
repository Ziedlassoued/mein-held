import React from 'react';
import Blog from './Blog';

export default {
  component: Blog,
  title: 'Pages/Blog',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Blog />;

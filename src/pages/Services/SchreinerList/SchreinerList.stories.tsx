import React from 'react';
import SchreinerList from './SchreinerList';

export default {
  component: SchreinerList,
  title: 'SchreinerList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SchreinerList />;

import React from 'react';
import ElektrikerList from './ElektrikerList';

export default {
  component: ElektrikerList,
  title: 'ElektrikerList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <ElektrikerList />;

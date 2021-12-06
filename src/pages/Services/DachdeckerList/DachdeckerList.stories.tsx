import React from 'react';
import DachdeckerList from './DachdeckerList';

export default {
  component: DachdeckerList,
  title: 'DachdeckerList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <DachdeckerList />;

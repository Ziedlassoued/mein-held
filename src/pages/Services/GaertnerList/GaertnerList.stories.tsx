import React from 'react';
import GaertnerList from './GaertnerList';

export default {
  component: GaertnerList,
  title: 'GaertnerList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <GaertnerList />;

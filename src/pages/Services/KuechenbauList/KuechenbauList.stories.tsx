import React from 'react';
import KuechenbauList from './KuechenbauList';

export default {
  component: KuechenbauList,
  title: 'KuechenbauList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <KuechenbauList />;

import React from 'react';
import KlempnerList from './KlempnerList';

export default {
  component: KlempnerList,
  title: 'KlempnerList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <KlempnerList />;

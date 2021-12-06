import React from 'react';
import SmarthomeList from './SmarthomeList';

export default {
  component: SmarthomeList,
  title: 'SmarthomeList',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SmarthomeList />;

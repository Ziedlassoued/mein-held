import React from 'react';
import LandingPage from './LandingPage';

export default {
  component: LandingPage,
  title: 'Pages/LandingPage',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <LandingPage />;

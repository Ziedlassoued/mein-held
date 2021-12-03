import React from 'react';
import SignUp from './SignUp';

export default {
  component: SignUp,
  title: 'Pages/SignUp',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SignUp />;

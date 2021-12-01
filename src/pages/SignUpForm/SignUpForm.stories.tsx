import React from 'react';
import SignUpForm from './SignUpForm';

export default {
  component: SignUpForm,
  title: 'Pages/SignUpForm',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <SignUpForm />;

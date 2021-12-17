import React from 'react';
import Contact from './Contact';

export default {
  component: Contact,
  title: 'Pages/Contact',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Contact />;

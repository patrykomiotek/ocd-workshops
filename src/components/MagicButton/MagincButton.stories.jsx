// import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Poligon/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
    bgColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RedButton.args = {
  bgColor: 'red',
  color: 'white',
  label: 'Red button',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  bgColor: 'blue',
  color: 'white',
  label: 'Blue button',
};

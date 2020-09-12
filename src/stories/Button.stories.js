import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button 8r',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button 7',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button 2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button xx',
};

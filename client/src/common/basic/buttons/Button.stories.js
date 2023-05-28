import { Button } from './Button';
import {iconNames} from '../atoms/Icon';

export default {
  title: 'Basic/Buttons',
  component: Button,
  argTypes: {
    mode: {
        options: ['DarkMode', 'LightMode'],
        control: {type: 'radio'}
    }
  }
};

// Button 스토리 정의
export const PrimaryButton = {
  args: {
    mode: 'DarkMode',
    label: 'Button'
  },
};

// Icon Button 스토리 정의
export const IconButton = {
  args: {
    ...PrimaryButton.args,
    icon: 'BsBellFill'
  },
};

IconButton.argTypes = {
    icon: {
        options: iconNames,
        control: { type: 'select' },
    }
}
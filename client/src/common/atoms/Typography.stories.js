import { HeadingText, LabelText, BodyText } from './Typography';

const Typography = ({ type, text }) => {
    if (type === 'Heading')
      return <HeadingText>{text}</HeadingText>;
    else if (type === 'Label')
      return <LabelText>{text}</LabelText>;
    else if (type === 'Body')
      return <BodyText>{text}</BodyText>;
    else
      return <BodyText>{text}</BodyText>;
};

export default {
    title: 'Atoms/Typography',
    component: Typography,
    argTypes: {
      type: {
        options: ['Heading', 'Label', 'Body'],
        control: { type: 'radio' },
      },
    },
    parameters: {
      backgrounds: {
        default: { value: 'light' },
      },
    },
};

export const Heading = {
  args: {
    type: 'Heading',
    text: `Lorem ipsum dolor sit amet`,
  },
};

export const Label = {
  args: {
    type: 'Label',
    text: `Lorem ipsum dolor sit amet`,
  },
};

export const Body = {
  args: {
    type: 'Body',
    text: `Lorem ipsum dolor sit amet`,
  },
};

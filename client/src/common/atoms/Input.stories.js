import { Input } from './Input';

export default {
    title: 'Atoms/Input',
    component: Input,
}

export const Default = {
    args: {
        placeholder: 'Search question...',
    }
};

export const WithLeftIcon = {
    args: {
        icon: 'BsSearch',
        ...Default.args
    }
}
import { Input } from './Input';

export default {
    title: 'Atoms/Input',
    component: Input,
}

export const Default = {
    args: {
        placeholder: 'Search question...',
        primary: true,
    }
};

export const WithLeftIcon = {
    args: {
        icon: 'BsSearch',
        placeholder: 'Search question...',
    }
}
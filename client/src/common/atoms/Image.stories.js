import { Image } from './Image';

export default {
    title: 'Atoms/Images',
    component: Image,
    argTypes: {
        url: {
            control: {type: 'file'}
        },
        size: {
            options: [40, 50, 100, 200],
            control: {type: 'radio'}
        },
        radius: {
            options: [0, 8, 30, 70],
            control: {type: 'radio'}
        }
    }
}

export const Images = {
    args: {
        url: './images/full-logo.png',
        size: 200,
        radius: 0
    },
};
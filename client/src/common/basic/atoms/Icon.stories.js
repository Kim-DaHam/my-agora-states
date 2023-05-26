import {Icon, iconNames} from './Icon';

export default {
    title: 'Atoms/Icons',
    component: Icon,
    parameters: {
        backgrounds: {default: {value: 'light'}}, // 스토리 배경색
        controls: {hideNoControlsWarning: true},
    }
};

// All 스토리 정의
export const All = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}>
            {
                iconNames.map((icon)=>(
                    <Icon icon={icon} key={icon}/>
                ))
            }
        </div>
    )
}

// Item 스토리 정의
export const Item = (args) => <Icon {...args} />;

// Item 컴포넌트 렌더링
Item.argTypes = {
    icon: {
        options: iconNames,
        control: { type: 'select' },
    },
    size: {
        options: [16, 24, 48],
        control: { type: 'radio' },
    },
    mode: {
        options: ['LightMode', 'DarkMode'],
        control: { type: 'radio' }
    }
};

// 초기 설정
Item.args = {
    icon: 'BsBellFill',
    size: 48,
    mode: 'LightMode'
}
import * as Icons from 'react-feather';
import globalToken from '../../../../src/tokens/global.json';
import {styled} from 'styled-components';

const { Primary, White } = globalToken;

export const iconNames = [
    'FaBell',
    'GiHamburgerMenu',
    'AiFillCaretUp',
    'AiOutlineCaretDown',
    'MdModeComment',
    'HiPaperAirplane',
    'BsArrowRight',
    'RxDoubleArrowUp'
];

export const Icon = ({ icon, mode, size, ...rest }) => {

    const FeatherIcon = styled(Icons[icon])`
        color: ${(props) => props.mode === 'DarkMode' ? White.value : Primary.value};
    `;

    return <FeatherIcon mode={mode} size={size} {...rest} />;
}
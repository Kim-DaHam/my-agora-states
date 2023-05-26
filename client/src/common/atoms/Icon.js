import * as Icons from "react-icons/bs";
import globalToken from '../../../src/tokens/global.json';
import { styled } from 'styled-components';

const { Primary, White } = globalToken;

export const iconNames = [
    'BsBellFill',
    'BsFillGrid3X3GapFill',
    'BsFillCaretUpFill',
    'BsFillCaretDownFill',
    'BsFillChatSquareDotsFill',
    'BsSendFill',
    'BsFillForwardFill',
    'BsArrowRight',
    'BsSuitHeartFill',
    'BsSuitHeart',
    'BsStarFill',
    'BsStar',
    'BsCheckLg',
    'BsXLg',
    'BsChevronDoubleRight',
    'BsChevronDoubleUp',
    'BsCheck',
    'BsThreeDots',
    'BsSearch',
    'BsTrash3Fill',
    'BsFillPencilFill',
    'BsWrench',
    'BsTagFill',
    'BsFillExclamationTriangleFill',
    'BsMoonStars',
    'BsMoonStarsFill',
    'BsFillHandThumbsUpFill',
    'BsHandThumbsUp'
];

export const Icon = ({ icon, mode, size, ...rest }) => {

    const FeatherIcon = styled(Icons[icon])`
        color: ${(props) => props.mode === 'DarkMode' ? White.value : Primary.value};
    `;

    return <FeatherIcon mode={mode} size={size} {...rest} />;
}
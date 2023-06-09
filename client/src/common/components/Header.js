import {Link} from 'react-router-dom';
import { css, styled } from 'styled-components';
import globalToken from '../../tokens/global.json'
import '../data/global-style.css'

import { Image } from '../basic/atoms/Image'
import { Input } from '../basic/atoms/Input'
import { Icon } from '../basic/atoms/Icon'

const { Spacing } = globalToken;

const HeaderContainer = styled.div`
    width: 100vw;
    height: 60px;
    box-shadow: 0px 3px 15px 0px rgb(24, 24, 24);
    padding: 0px ${Spacing[32].value};

    display: flex;
    align-items: center;
    background-color: var(--color-night-bg);
`;

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Image url="/images/small-logo-white.png" alt="header_logo_img" size={8} radius={0}/>
            </Link>
            <Input primary={true} placeholder="Search question"/>
            <Icon icon='BsBellFill'/>
            <Image url="/images/profile.png" alt="profile_img"
            size={30} radius={0}/>
        </HeaderContainer>
    )
}

export default Header;
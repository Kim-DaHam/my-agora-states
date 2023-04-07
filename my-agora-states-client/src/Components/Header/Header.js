import {Link} from 'react-router-dom';
import '../../static/global-style.css';
import './Header.css';

function Header() {
    return (
        <div className="header__container">
            <div className="header__contents">
                <Link to="/">
                    <img
                        src="/images/small-logo-white.png"
                        className="header__logo"
                        alt="header_logo_img"/>
                </Link>
                <div className='header__items'>
                    <div className='search__wrapper'>
                        <input
                            type="text"
                            placeholder="Search question"
                            className="header__searchInput"/>
                    </div>
                </div>
                <div className="header__right__section">
                    <i className="fa-solid fa-bell fa-lg header__alarm"></i>
                    <img
                        src="/images/profile.png"
                        className="header__profile"
                        alt="profile_img"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars } from 'react-icons/fa';

const Header = () => {
    
    const [toggleBtns, setToggleBtns] = useState(false);

    var IsVisiable = toggleBtns ? 'block' : '';
    var IsActive = toggleBtns ? 1 : 0.7;

    return (
        <div className="navbar">
            <div className="navbar__brand">
                <img className="navbar__brand__logo" src={`${process.env.PUBLIC_URL}/logo-white.png`} alt='header-logo'></img>
                <span className="navbar__brand__name">TrialHub</span>
            </div>
            <div className="navbar__menu">
                <div className="navbar__menu__btns">
                    <Link className="navbar__menu__btns__signin" to="/" style={{display: IsVisiable}}>Sign In</Link>
                    <Link className="navbar__menu__btns__contactus" style={{display: IsVisiable}} to="/">Contact Us</Link>
                </div>             
                <FaBars className="navbar__menu__bars" style={{opacity: IsActive}} onClick={() => setToggleBtns(!toggleBtns)} />
            </div>
        </div>
    )
}

export default Header;
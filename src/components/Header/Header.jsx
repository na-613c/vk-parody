import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img src='https://i.pinimg.com/564x/e7/0d/7b/e70d7b65d17d851106a7e5e12639f710.jpg' alt='header'/>
                <h1>VK-parody</h1>
            </div>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>)
};

export default Header;

import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/564x/e7/0d/7b/e70d7b65d17d851106a7e5e12639f710.jpg' alt='header'/>
            <span className='padding'>
                <h1>VK-parody</h1> 
            </span>
        </header>)
}

export default Header;

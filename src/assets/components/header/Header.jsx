import React from 'react';
import logo from '../../images/header/logo.png';
import Aside from './Aside';
import Menu from './Menu';

export default function Header() {
    return (
        <header className='Header'>
            <nav className='Header-Nav'>
                <img className='Header-ImgLogo' alt='logo' src={logo} />
                <ul className='Header-List'>
                    <li className="Header-ListItem">REVIEW</li>
                    <li className="Header-ListItem">ЭКСТРИМ</li>
                    <li className="Header-ListItem">ЛЕГЕНДЫ</li>
                    <li className="Header-ListItem">ЗОЖ И ТУРИЗМ</li>
                    <li className="Header-ListItem">ПОЗІРК</li>
                    <li className="Header-ListItem">ТРЕШ</li>
                    <Menu />
                </ul>
            </nav>
            <div className='Header-PageTitle'>
                <div>
                    <p>#ЭКСТРИМ</p>
                    <h1>Юрий Поклад: «Динамо»<br />как бы начинает работать заново</h1>
                </div>
            </div>
            <Aside />
        </header>
    )
}

import React, { useState } from 'react';
import logo from '../../images/header/logo.png';
import vk from '../../images/footer/vk.png';
import facebook from '../../images/footer/facebook.png';
import instagram from '../../images/footer/instagram.png';
import youtube from '../../images/footer/youtube.png';
import telegram from '../../images/footer/telegram.png';
import tiktok from '../../images/footer/tiktok.png';
import twitter from '../../images/footer/twitter.png';

import Aside from './Aside';

import logoWhite from '../../images/header/logoWhite.png';
import close from '../../images/header/Close.png';
import navItems from '../navItems';
import sports from '../sports';



export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const handleChange = () => {
        setMenuActive(!menuActive);
    }

    return (
        <header className='Header'>
            <div className='Header-NavContainer' >
                <nav className='Header-Nav'>
                    <img className='Header-ImgLogo' alt='logo' src={logo} />
                    <ul className='Header-List'>
                        {navItems.map(item =>
                            <li className='Header-Item'>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                        <div onClick={handleChange} className='Heder-Menu-desktop MenuBtn'>

                        </div>
                    </ul>
                    <div onClick={handleChange} className='Header-Menu-tabletMobile MenuBtn' >
                    </div>
                </nav>
            </div>
            <div className={'MenuContainer' + (menuActive ? ' active' : '')} >
                <div className='MenuContainer-Logo'>
                    <img src={logoWhite} />
                    <div onClick={handleChange}  ><img src={close} /></div>
                </div>
                <div className='MenuContainer-AllList'>
                    <ul className='MenuContainer-List'>
                        {navItems.map(item =>
                            <li className='MenuContainer-Item'>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                    <ul className='MenuContainer-ListSports'>
                        {sports.map(sport =>
                            <li className='MenuContainer-ItemSport' key={sport.id}>
                                {sport.value}
                            </li>
                        )}
                    </ul>
                    <div className='MenuContainer-Feedback'>
                        <a>О ПРОЕКТЕ</a>
                        <a>ОБРАТНАЯ СВЯЗЬ</a>
                    </div>
                </div>
                <div className='MenuSocial'>
                    <ul className='MenuSocial-List'>
                        <li className='MenuSocial-Item'><a href='https://vk.com' className='MenuSocial-Link'><img src={vk} alt='vk' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://facebook.com' className='MenuSocial-Link'><img src={facebook} alt='facebook' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://instagram.com' className='MenuSocial-Link'><img src={instagram} alt='instagram' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://youtube.com' className='MenuSocial-Link'><img src={youtube} alt='youtube' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://telegram.com' className=' MenuSocial-Link'><img src={telegram} alt='telegram' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://tiktok.com' className='MenuSocial-Link'><img src={tiktok} alt='tiktok' /></a></li>
                        <li className='MenuSocial-Item'><a href='https://twitter.com' className='MenuSocial-Link'><img src={twitter} alt='twitter' /></a></li>
                    </ul>
                </div >
                <div className='Menu-Networks'>
                    <div className='MenuAdvertisement'>
                        <p className='MenuAdvertisement-Text'>Размещение рекламы:</p>
                        <a className='MenuAdvertisement-Email'>ads@sporthub.news</a>
                    </div>
                    <div className='MenuFollowContainer'>
                        <p>Подписка:</p>
                        <form className='MenuFollowContainer-Form'>
                            <input type='email' className='MenuForm-InoutEmail' placeholder='Введите ваш email' />
                            <input type='submit' className='MenuForm-InoutSubmit' value='Подписаться' />
                        </form>
                    </div>
                </div>
            </div>
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

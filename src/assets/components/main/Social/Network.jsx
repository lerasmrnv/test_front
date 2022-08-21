import React from 'react';
import vk from '../../../images/main/social/vk.png';
import facebook from '../../../images/main/social/facebook.png';
import instagram from '../../../images/main/social/instagram.png';
import youtube from '../../../images/main/social/youtube 1.png';
import telegram from '../../../images/main/social/telegram.png';
import tiktok from '../../../images/main/social/tiktok.png';
import twitter from '../../../images/main/social/twitter.png';

export default function Network() {
    return (
        <div className='NetworkContainer'>
            <p>Соцсети</p>
            <div className='NetworkContainer-Link'>
                <a href='https://vk.com'><img src={vk} alt='vk' /></a>
                <a href='https://facebook.com'><img src={facebook} alt='facebook' /></a>
                <a href='https://instagram.com'><img src={instagram} alt='instagram' /></a>
                <a href='https://youtube.com'><img src={youtube} alt='youtube' /></a>
                <a href='https://telegram.com'><img src={telegram} alt='telegram' /></a>
                <a href='https://tiktok.com'><img src={tiktok} alt='tiktok' /></a>
                <a href='https://twitter.com'><img src={twitter} alt='twitter' /></a>
            </div>
        </div>
    )
}

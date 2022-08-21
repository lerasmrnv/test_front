import React from 'react';
import vk from '../../images/footer/vk.png';
import facebook from '../../images/footer/facebook.png';
import instagram from '../../images/footer/instagram.png';
import youtube from '../../images/footer/youtube.png';
import telegram from '../../images/footer/telegram.png';
import tiktok from '../../images/footer/tiktok.png';
import twitter from '../../images/footer/twitter.png';

export default function FooterSocial() {
    return (
        <div className='FooterSocial'>
            <ul className='FooterSocial-List'>
                <li className='FooterSocial-Item'><a href='https://vk.com' className='FooterSocial-Link'><img src={vk} alt='vk' /></a></li>
                <li className='FooterSocial-Item'><a href='https://facebook.com' className='FooterSocial-Link'><img src={facebook} alt='facebook' /></a></li>
                <li className='FooterSocial-Item'><a href='https://instagram.com' className='FooterSocial-Link'><img src={instagram} alt='instagram' /></a></li>
                <li className='FooterSocial-Item'><a href='https://youtube.com' className='FooterSocial-Link'><img src={youtube} alt='youtube' /></a></li>
                <li className='FooterSocial-Item'><a href='https://telegram.com' className=' FooterSocial-Link'><img src={telegram} alt='telegram' /></a></li>
                <li className='FooterSocial-Item'><a href='https://tiktok.com' className='FooterSocial-Link'><img src={tiktok} alt='tiktok' /></a></li>
                <li className='FooterSocial-Item'><a href='https://twitter.com' className='FooterSocial-Link'><img src={twitter} alt='twitter' /></a></li>
            </ul>
        </div >
    )
}

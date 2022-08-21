import React from 'react';
import logoWhite from '../../images/footer/logo.png';

export default function FooterNav() {
    return (
        <div className='FooterNav'>
            <ul className='FooterNav-List'>
                <li className='FooterNav-Item'><a className='FooterNav-Link'><img src={logoWhite} /></a></li>
                <li className='FooterNav-Item'><a className='FooterNav-Link'>о проекте</a></li>
                <li className='FooterNav-Item'><a className='FooterNav-Link'>обратная связь</a></li>
                <li className='FooterNav-Item'>
                    <p className='FooterNav-Text'>Реклама</p>
                    <a className='FooterNav-Email'>ads@sporthub.news</a>
                </li>
            </ul>
        </div>
    )
}

import React from 'react';
import logoPRAS from '../../images/footer/logoPRAS.png';

export default function FooterCopyright() {
    return (
        <div className='FooterCopyright'>
            <p>© {(new Date().getFullYear())} «Спортхаб»</p>
            <div>
                <img src={logoPRAS} alt='PRAS' />
                <p>Разработка сайта — компания PRAS</p>
            </div>
        </div>
    )
}

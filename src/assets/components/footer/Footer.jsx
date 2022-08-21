import React from 'react'
import FooterCopyright from './FooterCopyright'
import FooterNav from './FooterNav'
import FooterSocial from './FooterSocial'

export default function Footer() {
    return (
        <footer className='Footer'>
            <FooterNav />
            <FooterSocial />
            <FooterCopyright />
        </footer>
    )
}

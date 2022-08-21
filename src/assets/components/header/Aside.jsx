import React from 'react';
import sports from '../../constants/sports';


export default function Aside() {

    return (
        <ul className='Header-ListSports'>
            {sports.map(sport =>
                <li className='Header-ItemSport' key={sport.id}>
                    {sport.value}
                </li>
            )}
        </ul>
    )
}

import React from 'react'
import frame from '../../../images/main/quotes/Frame.png';


export default function Quotes(props) {
    return (
        <div className='Quotes'>
            <div className='Quotes-Img'>
                <img className='Quotes-ImgFrame' src={frame} alt='img' />
                <img className='Quotes-ImgPhoto' src={props.img} alt='img' />
            </div>
            <p className='Quotes-Title'>{props.name}</p>
            <p className='Quotes-Post'>{props.post}</p>
            <p className='Quotes-Text'>{props.text}</p>
        </div>
    )
}

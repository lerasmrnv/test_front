import React from 'react'

export default function ItemNewsWhite(props) {
    return (
        <div className='ItemNews-white'>
            <img src={props.img} className='ItemNews-white-Img' />
            <div className='ItemNews-white-Data' >
                <p className='ItemNews-white-DataPublication'>{props.data}</p>
                <p>|</p>
                <p>{props.theme}</p>
            </div>
            <h3 className='ItemNews-white-Title'>{props.title}</h3>
            <p className='ItemNews-white-Text' >{props.text}</p>
        </div>
    )
}

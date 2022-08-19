import React from 'react'

export default function ItemNewsDark(props) {
    return (
        <div className='ItemNews-dark'>

            <div className='ItemNews-dark-Data' >
                <p className='ItemNews-dark-DataPublication'>{props.data}</p>
                <p className='ItemNews-dark-DataPublication-text'>|</p>
                <p className='ItemNews-dark-DataPublication-text'>{props.theme}</p>
            </div>
            <h3 className='ItemNews-dark-Title'>{props.title}</h3>
            <p className='ItemNews-dark-Text' >{props.text}</p>
        </div>
    )
}

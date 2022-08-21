import React from 'react'

export default function Follow() {
    return (
        <div className='FollowContainer'>
            <p>Подписка</p>
            <form className='FollowContainer-Form'>
                <input type='email' className='Form-InoutEmail' placeholder='Введите ваш email' />
                <input type='submit' className='Form-InoutSubmit' value='Подписаться' />
            </form>
        </div>
    )
}

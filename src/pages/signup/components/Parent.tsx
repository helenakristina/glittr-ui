import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Parent = () => {
    const [info, setInfo] = useState({
        first_name: '',
        last_name: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Hey there, parent!</h1>
            <h2>What is your name?</h2>
            <input className='parent txt-field'
                type='text'
                name='first_name'
                placeholder='First Name'
                value={info.first_name}
                onChange={handleChange}
            />
            <input className='parent txt-field'
                type='text'
                name='last_name'
                placeholder='Last Name'
                value={info.last_name}
                onChange={handleChange}
            />
            <br />
            <Link className='onb-btn link-btn' to='/notice'>Next</Link>
        </div>
    )
}

export default Parent;
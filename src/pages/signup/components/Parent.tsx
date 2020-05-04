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
        <div>
            <h1>Hey there, parent!</h1>
            <h4>What is your name?</h4>
            <input
                type='text'
                name='first_name'
                placeholder='First Name'
                value={info.first_name}
                onChange={handleChange}
            />
            <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                value={info.last_name}
                onChange={handleChange}
            />
            <Link to='/notice'>Next</Link>
        </div>
    )
}

export default Parent;
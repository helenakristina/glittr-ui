import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ParentForm = () => {
    const [info, setInfo] = useState({
        email: '',
        password_hash: '',
        zip_code: ''
    })

    const [pass, setPass] = useState('');
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        //
        setPass(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        //
        history.push('/confirmation')
    }

    return (
        <div>
            <h1>Almost there!</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={info.email}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password_hash'
                    placeholder='Password'
                    value={info.password_hash}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm Password'
                    value={pass}
                    onChange={checkPassword}
                />
                <input
                    type='text'
                    name='zip_code'
                    placeholder='Zip Code'
                    value={info.zip_code}
                    onChange={handleChange}
                />
                <button>submit</button>
            </form>
        </div>
    )
}

export default ParentForm;
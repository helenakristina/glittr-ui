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
        <div className='onb-container'>
            <h1 className='onb-heading'>Almost there!</h1>
            <form onSubmit={handleSubmit}>

                <label>Email Address:
                    <input className='parent-field txt-field'
                        type='email'
                        name='email'
                        placeholder='jane@doe.com'
                        value={info.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Zip Code:
                <input className='parent-field txt-field'
                        type='text'
                        name='zip_code'
                        placeholder='Zip Code'
                        value={info.zip_code}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Password:
                <input className='parent-field txt-field'
                        type='password'
                        name='password_hash'
                        placeholder='Password'
                        value={info.password_hash}
                        onChange={handleChange}
                    />
                </label>
                <label>Confirm Password:
                <input className='parent-field txt-field'
                        type='password'
                        name='confirm_password'
                        placeholder='Confirm Password'
                        value={pass}
                        onChange={checkPassword}
                    />
                </label>
                <br />
                <button className='onb-btn'>Submit</button>
            </form>
        </div>
    )
}

export default ParentForm;
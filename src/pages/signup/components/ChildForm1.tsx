import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ChildForm1 = () => {
    const [info, setInfo] = useState({
        username: '',
        password_hash: '',
    })

    const [pass, setPass] = useState('')
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const checkPass = () => {
        //
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/created')
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Set a username and password that your child can log in with!</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:
                <input
                        className='txt-field'
                        type='text'
                        name='username'
                        placeholder='janedoe21'
                        value={info.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Password:
                <input
                        className='txt-field'
                        type='text'
                        name='password'
                        placeholder='password'
                        value={info.password_hash}
                        onChange={handleChange}
                    />
                </label>
                <label>Confirm Password:
                <input
                        className='txt-field'
                        type='text'
                        name='pass'
                        placeholder='confirm password'
                        value={pass}
                        onChange={checkPass}
                    />
                </label>
                <br />
                <button className='onb-btn'>submit</button>
            </form>
        </div>
    )
}

export default ChildForm1;
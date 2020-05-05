import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const ChildForm = () => {
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: ''
    })
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/child-form-01')
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Let's create your child's profile!</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                <input
                        className='txt-field'
                        type='text'
                        name='first_name'
                        placeholder='Jane'
                        value={info.first_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Last Name:
                <input
                        className='txt-field'
                        type='text'
                        name='last_name'
                        placeholder='Doe'
                        value={info.last_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Date of Birth:
                <input
                        className='txt-field'
                        type='text'
                        name='date_of_birth'
                        placeholder='YYYY-MM-DD'
                        value={info.date_of_birth}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button className='onb-btn'>Next</button>
            </form>
        </div>
    )
}

export default ChildForm;
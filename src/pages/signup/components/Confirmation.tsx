import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Confirmation = () => {
    const [code, setCode] = useState('')
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/confirmed')
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Check your email for the super secret security code</h1>
            <form onSubmit={handleSubmit}>
                <input className='txt-field'
                    type='number'
                    name='code'
                    placeholder='_ _ _ _'
                    value={code}
                    onChange={handleChange}
                />
                <br />
                <button className='onb-btn'>Submit</button>
            </form>

        </div>
    )
}

export default Confirmation;
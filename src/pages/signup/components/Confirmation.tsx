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
        <div>
            <h1>Check your email for the super secret security code</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    name='code'
                    placeholder='_ _ _ _'
                    value={code}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Confirmation;
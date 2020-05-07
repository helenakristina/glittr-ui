import React from 'react';
import { useHistory } from 'react-router-dom';

const Confirmed = () => {
    const history = useHistory();

    const routeToForm = (e: any) => {
        e.preventDefault();
        history.push('/child-form')
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Email Confirmed!</h1>
            <button className='onb-btn' onClick={routeToForm}>Create Profile</button>
        </div>
    )
}

export default Confirmed;
import React from 'react';
import { useHistory } from 'react-router-dom';

const Confirmed = () => {
    const history = useHistory();

    const routeToForm = (e: any) => {
        e.preventDefault();
        history.push('/child-form')
    }

    return (
        <div>
            <h1>Email Confirmed!</h1>
            <button onClick={routeToForm}>Create Profile</button>
        </div>
    )
}

export default Confirmed;
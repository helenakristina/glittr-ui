import React from 'react'
import { useHistory } from 'react-router-dom'

const ChildForm1 = () => {
    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/created')
    }

    return (
        <div>
            <h1>Set a username and password that your child can log in with!</h1>
            <form onSubmit={handleSubmit}>
                <input />
                <input />
                <input />
                <button>submit</button>
            </form>
        </div>
    )
}

export default ChildForm1;